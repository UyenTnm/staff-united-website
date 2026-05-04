"use client";

import { useChat } from "@/context/ChatContext";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const { isOpen } = useChat();
  const [ring, setRing] = useState(false);
  // const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRing(true);
      setTimeout(() => setRing(false), 1200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/message/AZZHT6WVG25BP1"
      target="_blank"
      rel="noopener noreferrer"
      className={`
      z-[9999]
      transition-all duration-300
      ${isOpen ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100"}
      `}
    >
      <div className="relative flex items-center justify-center">
        {ring && (
          <span className="absolute w-14 h-14 rounded-full bg-[#25D366]/40 animate-ping" />
        )}

        <div
          className={`w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-all duration-300
          ${ring ? "animate-ring" : ""}
          hover:scale-110 active:scale-95`}
        >
          <FaWhatsapp size={22} />
        </div>
      </div>
    </a>
  );
}
