import { NextResponse, NextRequest } from "next/server";
import { middlewareShape } from "./types";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
  const url = request.nextUrl;

  let payloadObject: middlewareShape | null = null;

  if (token) {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) {
        throw new Error("Invalid token format");
      }
      const decodedPayload = atob(parts[1]);
      payloadObject = JSON.parse(decodedPayload);
    } catch (error) {
      console.error("Error decoding token:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (
    payloadObject?.role === "attendee" &&
    (url.pathname === "/login" ||
      url.pathname === "/signup" ||
      url.pathname.startsWith("/forgotpasswordchange") ||
      url.pathname === "/forgotpassword" ||
      url.pathname === "/organizer-login" ||
      url.pathname === "/organizer-signup" ||
      url.pathname.startsWith("/organizer-forgotpasswordchange") ||
      url.pathname === "/organizer-forgotpassword")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    payloadObject?.role === "organizer" &&
    (url.pathname === "/login" ||
      url.pathname === "/signup" ||
      url.pathname.startsWith("/forgotpasswordchange") ||
      url.pathname === "/forgotpassword" ||
      url.pathname === "/organizer-login" ||
      url.pathname === "/organizer-signup" ||
      url.pathname.startsWith("/organizer-forgotpasswordchange") ||
      url.pathname === "/organizer-forgotpassword")
  ) {
    return NextResponse.redirect(new URL("/organizers", request.url));
  }

  if (
    payloadObject?.role === "attendee" &&
    url.pathname.startsWith("/organizers")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // if (
  //   payloadObject?.role === "organizer" &&
  //   (url.pathname === "/" || url.pathname.startsWith("/attendee"))
  // ) {
  //   return NextResponse.redirect(new URL("/organizers", request.url));
  // }

  // if (
  //   !token &&
  //   (url.pathname === "/" ||
  //     url.pathname.startsWith("/attendee") ||
  //     url.pathname.startsWith("/organizers"))
  // ) {
  //   return (
  //     NextResponse.redirect(new URL("/login", request.url)) ||
  //     NextResponse.redirect(new URL("/organizer-login", request.url))
  //   );
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/forgotpassword",
    "/forgotpasswordchange/:token",
    "/organizer-login",
    "/organizer-signup",
    "/organizer-forgotpasswordchange/:token",
    "/organizer-forgotpassword",
    "/attendee/:path*",
    "/organizers/:path*",
  ],
};
