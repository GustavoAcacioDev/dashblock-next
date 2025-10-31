import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { publicRoutes, authRoutes, apiAuthRoutes, DEFAULT_REDIRECT } from "./config/routes"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const isPublicRoute = publicRoutes.includes(pathname)
  const isAuthRoute = authRoutes.includes(pathname)
  const isApiAuthRoute = apiAuthRoutes.some(route => pathname.startsWith(route))

  // Allow API auth routes
  if (isApiAuthRoute) {
    return NextResponse.next()
  }

  // If authenticated and trying to access auth pages, redirect to dashboard
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL(DEFAULT_REDIRECT, req.url))
  }

  // If authenticated and on root, redirect to dashboard
  if (token && pathname === '/') {
    return NextResponse.redirect(new URL(DEFAULT_REDIRECT, req.url))
  }

  // If not authenticated and trying to access protected route, redirect to login
  if (!token && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
