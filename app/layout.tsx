import type { Metadata } from "next";
import Script from "next/script";
import { AosInit } from "@/components/AosInit";
import "aos/dist/aos.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shehryar Ahmed | Senior Software Engineer",
  description:
    "Senior software engineer in Dubai: full-stack systems, RAG / AI applications, multi-tenant ERP, and production platforms with React, Next.js, Node, TypeScript, FastAPI, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="min-h-full max-w-full overflow-x-hidden text-base text-gray-900 antialiased sm:text-lg lg:text-lg">
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
