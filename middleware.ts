import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const dashboardPath = "/dashboard";
  const loginPath = "/";

  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session && req.nextUrl.pathname === loginPath) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = dashboardPath;
    return NextResponse.redirect(redirectUrl);
  }

  if (!session && req.nextUrl.pathname.startsWith(dashboardPath)) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = loginPath;
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
