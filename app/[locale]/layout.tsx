import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ChatProvider } from "@/context/ChatContext";

import dynamic from "next/dynamic";

const ChatBox = dynamic(() => import("@/components/chat/ChatBox"));

const WhatsAppButton = dynamic(
  () => import("@/components/whatsapp/WhatsAppButton"),
);

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "vi")) {
    notFound();
  }

  const messages = await getMessages();

  // return (
  //   <NextIntlClientProvider messages={messages}>
  //     {children}
  //   </NextIntlClientProvider>
  // );
  return (
    <NextIntlClientProvider messages={messages}>
      <ChatProvider>
        <Navigation />

        {children}

        <Footer />

        <div className="fixed bottom-6 right-4 z-[9999] flex flex-col items-end gap-6">
          <WhatsAppButton />
          <ChatBox />
        </div>
      </ChatProvider>
    </NextIntlClientProvider>
  );
}
