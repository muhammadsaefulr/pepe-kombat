import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { QueryCache } from "@tanstack/react-query";
import TanstackQueryClient from "@/components/ReactQuery/QueryClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pepe Kombat V1",
  description: "Lorem Ipsum Dolor Sit Amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackQueryClient>
      <html lang="en">
        <body className={`${inter.className} bg-yellow`}>{children}</body>
      </html>
    </TanstackQueryClient>
  );
}
