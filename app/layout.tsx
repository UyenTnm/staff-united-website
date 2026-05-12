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
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Script from "next/script";

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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-300">
        {/* <ThemeProvider> */}
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
        {/* </ThemeProvider> */}
      </body>

      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {process.env.NEXT_PUBLIC_CLARITY_ID && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
    `}
        </Script>
      )}
    </html>
  );
}
