import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STAFF UNITED | Professional Business Solutions",
  description:
    "Professional staffing and business solutions with clear standards, reliable service, and transparent operations. We deliver consistent excellence through structured workflows and human expertise.",
  generator: "v0.app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0b1b33]">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
