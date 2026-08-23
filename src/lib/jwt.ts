import {SignJWT, jwtVerify} from "jose";

const JWT_SECRET = process.env.JWT_SECRET;


if(!JWT_SECRET){
    throw new Error("JWT_SECRET is not defined");
}

const secret = new TextEncoder().encode(JWT_SECRET);

export async function createToken(email: string) {
    return await new SignJWT({
        email, 
        role:"admin",
    })
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(secret);
}


export async function verifyToken(token: string){
    try{
        const {payload} = await jwtVerify(token, secret);
        return payload;
    } catch(error){
        return null;
    }
}