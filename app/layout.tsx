import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit } from "next/font/google";

import { SiteShell } from "@/components/site-shell";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "HAO / STUDIO",
  description: "Bauhaus-inspired portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} bg-background font-display text-foreground antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
