import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const data = { username, password };

  return NextResponse.json({ message: "Berhasil Login !", data: data });
}
