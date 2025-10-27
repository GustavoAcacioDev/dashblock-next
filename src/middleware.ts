import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl

    // If authenticated and trying to access login/register, redirect to dashboard
    if (req.nextauth.token && (pathname === '/login' || pathname === '/register')) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Allow root path redirect
    if (pathname === '/' && req.nextauth.token) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const { pathname } = req.nextUrl

        // Allow public routes
        if (pathname.startsWith('/login') ||
            pathname.startsWith('/register') ||
            pathname.startsWith('/api/auth') ||
            pathname.startsWith('/api/register')) {
          return true
        }

        // Root path redirect to login if not authenticated
        if (pathname === '/' && !token) {
          return false
        }

        // Require authentication for all other routes
        return !!token
      },
    },
    pages: {
      signIn: '/login',
    },
  }
)

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
