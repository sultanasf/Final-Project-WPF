import { NextResponse } from "next/server";
import { deleteCookie } from "cookies-next";

export async function middleware(req) {
  // check if the path is / , redirect to /dashboard
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  // check if the path is /login
  if (req.nextUrl.pathname.startsWith("/login")) {
    try {
      const token = req.cookies.get("token");
      if (!token) {
        return NextResponse.next();
      }
      const response = await fetch(`http://localhost:3000/user/get-anggota`, {
        headers: { Authorization: "Bearer " + token.value },
      });
      if (response.status === 401) {
        const response = await fetch(`http://localhost:3000/user/get-petugas`, {
          headers: { Authorization: "Bearer " + token.value },
        });
        if (response.status !== 401) {
          return NextResponse.redirect(new URL("/dashboard", req.url));
        }
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } catch (error) {
      console.log(error.message);
      return NextResponse.next();
    }
  } else {
    try {
      const token = req.cookies.get("token");
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      const response = await fetch(`http://localhost:3000/user/get-anggota`, {
        headers: { Authorization: "Bearer " + token.value },
      });
      if (response.status === 401) {
        const response = await fetch(`http://localhost:3000/user/get-petugas`, {
          headers: { Authorization: "Bearer " + token.value },
        });
        if (response.status === 401) {
          deleteCookie("token");
          return NextResponse.redirect(new URL("/login", req.url));
        }
        return NextResponse.next();
      }
      return NextResponse.next();
    } catch (error) {
      console.log(error.message);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/login", "/dashboard", "/book", "/loan", "/profile", "/"],
};
