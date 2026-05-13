import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";

import "./globals.css";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ChatProvider } from "@/context/ChatContext";

// Lazy load non-critical widgets
const ChatBox = dynamic(() => import("@/components/chat/ChatBox"));

const WhatsAppButton = dynamic(
  () => import("@/components/whatsapp/WhatsAppButton"),
);

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
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "STAFF UNITED",
    url: "https://www.staffunitedgroup.com",
    logo: "https://www.staffunitedgroup.com/staff-logo.webp",
    description:
      "Women-powered offshore execution teams in Vietnam supporting global businesses with structured operational, administrative, and marketing services.",
    sameAs: [
      "https://www.linkedin.com/company/staff-united-group",
      "https://www.facebook.com/staffunitedgroup",
      "https://www.instagram.com/staffunitedgroup",
      "https://www.threads.com/@staffunitedgroup",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English"],
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <ChatProvider>
          <Navigation />
          {children}
          <Footer />

          <div className="fixed bottom-6 right-4 z-[9999] flex flex-col items-end gap-6">
            <WhatsAppButton />
            <ChatBox />
          </div>
        </ChatProvider>
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

      {CLARITY_ID && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </html>
  );
}
