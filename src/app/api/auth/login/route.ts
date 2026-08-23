import { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/lib/jwt";



export async function POST(request: NextRequest){
    try{
        const {email, password} = await request.json();
        if(!email||!password){
            return NextResponse.json(
                {message: "Email and password are required"},
                {status:400}
            );
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if(!adminEmail || !adminPassword){
            return NextResponse.json(
                {message: "admin credentials are not configured"},
                {status: 500}
            )
        };

        if(email !== adminEmail || password !== adminPassword) {
        return NextResponse.json(
            {message: "email or password is invalid"},
            {status: 401}
        );
    }

    const token = await createToken(email);
    const response = NextResponse.json(
        {message:"Login Successfull"},
        {status: 200}
    );


    response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60*60*24
    });

    return response;


    } catch (error) {
        return NextResponse.json(
            {message: "Internal server error"},
            {status: 500}
        );
    }

    
}