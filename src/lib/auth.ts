import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "staynest-super-secret-jwt-key-change-in-production-2026"
);

const COOKIE_NAME = "staynest-token";
const EXPIRY = "7d";

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  name: string;
}

// ─── Sign a JWT ───────────────────────────────────────────────────────────────
export async function signToken(payload: JWTPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(EXPIRY)
    .sign(SECRET);
}

// ─── Verify a JWT ─────────────────────────────────────────────────────────────
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as JWTPayload;
  } catch {
    return null;
  }
}

// ─── Set auth cookie (server-side) ────────────────────────────────────────────
export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

// ─── Clear auth cookie (server-side) ─────────────────────────────────────────
export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
}

// ─── Get current user from cookie (server-side in route handlers) ─────────────
export async function getCurrentUser(): Promise<JWTPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

// ─── Get token from request (used in middleware) ──────────────────────────────
export function getTokenFromRequest(req: NextRequest): string | null {
  return req.cookies.get(COOKIE_NAME)?.value ?? null;
}
