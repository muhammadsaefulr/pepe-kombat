import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { QueryCache } from "@tanstack/react-query";
import TanstackQueryClient from "@/components/ReactQuery/QueryClient";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pepe Kombat V1",
  description: "Earn Pepe Coin With Easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackQueryClient>
      <html lang="en">
        <body className={`${DMSans.className} bg-yellow`}>{children}</body>
      </html>
    </TanstackQueryClient>
  );
}
