import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatBox from "@/components/chat/ChatBox";
import FloatingStack from "@/components/FloatingStack";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { ChatProvider } from "@/context/ChatContext";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STAFF UNITED | Professional Business Solutions",
  description:
    "We are your offshore execution partner in Vietnam, powered by all-women teams, delivering structured, high-performance services through managed remote teams across operations, admin, marketing, and back-office support—built for consistency, control, and scalable growth.",
  icons: {
    icon: "/staff-logo.ico",
  },
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
        <ChatProvider>
          <Navigation />
          {children}
          <Footer />

          <div className="fixed bottom-6 right-4 z-[9999] flex flex-col items-end gap-6">
            <WhatsAppButton />
            <ChatBox />
          </div>
          {/* <FloatingStack /> */}
        </ChatProvider>
      </body>
    </html>
  );
}
