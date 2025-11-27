import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname

  const token = request.cookies.get('auth_token')?.value

  const isProtectedRoute = path.startsWith('/dashboard')

//   if (isProtectedRoute && !token) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }
//   if (path === '/login' && token) {
//     return NextResponse.redirect(new URL('/dashboard/products', request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: [
//     '/dashboard/:path*',
//     '/login'
//   ],
}