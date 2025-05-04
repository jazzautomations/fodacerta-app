import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/dashboard')) {
    const token = req.cookies.get('supabase-auth-token');
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    // TODO: validar assinatura ativa no backend
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path*'] };
