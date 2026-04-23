"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);

      setTimeout(() => setShake(false), 600); // duration animation
    }, 2000); // mỗi 5s rung 1 lần

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/message/AZZHT6WVG25BP1"
      target="_blank"
      rel="noopener noreferrer"
      className="
  fixed z-[9999]
  right-4
  bottom-[calc(env(safe-area-inset-bottom)+72px)]

  w-12 h-12 rounded-full
  bg-[#25D366] text-white

  flex items-center justify-center

  shadow-lg
  transition-all duration-300
  hover:scale-110 hover:shadow-xl
  active:scale-95
"
      style={
        shake
          ? {
              animation: "wiggle 0.6s ease-in-out",
            }
          : {}
      }
    >
      <FaWhatsapp size={22} />
    </a>
  );
}
