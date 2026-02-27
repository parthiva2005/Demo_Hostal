import { NextRequest, NextResponse } from "next/server";
import { getTokenFromRequest, verifyToken } from "@/lib/auth";


const AUTH_PATHS = ["/auth/login", "/auth/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  const token = getTokenFromRequest(request);
  const user = token ? await verifyToken(token) : null;

  // ─── Auth pages: redirect logged-in users to their dashboard ─────────────
  if (AUTH_PATHS.some((p) => pathname.startsWith(p))) {
    if (user) {
      const dashboardMap: Record<string, string> = {
        ADMIN: "/dashboard/admin",
        OWNER: "/dashboard/owner",
        TENANT: "/dashboard/tenant",
      };
      return NextResponse.redirect(
        new URL(dashboardMap[user.role] ?? "/", request.url)
      );
    }
    return NextResponse.next();
  }

  // ─── Dashboard routes: require auth ──────────────────────────────────────
  // if (pathname.startsWith("/dashboard")) {
  //   if (!user) {
  //     const loginUrl = new URL("/auth/login", request.url);
  //     loginUrl.searchParams.set("redirect", pathname);
  //     return NextResponse.redirect(loginUrl);
  //   }

  //   // Role-based access control
  //   if (pathname.startsWith("/dashboard/admin") && user.role !== "ADMIN") {
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }
  //   if (pathname.startsWith("/dashboard/owner") && user.role !== "OWNER") {
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }
  //   if (pathname.startsWith("/dashboard/tenant") && user.role !== "TENANT") {
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }

  //   return NextResponse.next();
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
