import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /dashboard routes except /dashboard/login
  if (
    pathname.startsWith("/dashboard") &&
    pathname !== "/dashboard/login"
  ) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(
        new URL("/dashboard/login", request.url)
      );
    }

    const payload = await verifyToken(token);

    if (!payload || payload.role !== "admin") {
      return NextResponse.redirect(
        new URL("/dashboard/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
