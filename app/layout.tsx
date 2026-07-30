import type { Metadata } from "next";
import Script from "next/script";
import { AosInit } from "@/components/AosInit";
import "aos/dist/aos.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shehryar Ahmed | Senior Software Engineer",
  description:
    "Senior software engineer in Dubai — full-stack systems, AI integration, multi-tenant ERP, and production platforms with React, Next.js, Node, TypeScript, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full text-2xl text-gray-900 antialiased sm:text-2xl md:text-2xl lg:text-lg xl:text-lg">
        <AosInit />
        {children}
        <Script
          src="https://kit.fontawesome.com/ca30ddfff9.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
