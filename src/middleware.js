import { NextResponse } from 'next/server';

export function middleware(request) {
  // Continue to the destination as normal
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/producten/:path*',
  ],
}; 