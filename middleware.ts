import { NextRequest, NextResponse } from "next/server";
import { getSession, updateSession } from "@/lib/telegram/telegramSession";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = await updateSession(request);
  if (response) return response;

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], 
};