"use client";

import { useEffect, useState } from "react";

export default function FloatingStack() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        fixed z-[9999]
        right-4
        bottom-[calc(env(safe-area-inset-bottom)+1rem)]

        flex flex-col items-end gap-3
      "
    >
      {/* 🔼 Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`
          w-10 h-10 rounded-full
          bg-white/80 backdrop-blur
          border border-gray-200
          text-[#0b1b33]

          flex items-center justify-center

          shadow-md
          transition-all duration-300

          ${
            showTop
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-90 pointer-events-none"
          }

          hover:bg-white
          hover:shadow-xl
          hover:-translate-y-1
        `}
      >
        ↑
      </button>

      {/* 💬 Chat button */}
      {/* <button
        onClick={() => {
          // mở chat của bạn ở đây
          const event = new CustomEvent("open-chat");
          window.dispatchEvent(event);
        }}
        className="
          w-12 h-12 rounded-full
          bg-[#0a1b33] text-white

          flex items-center justify-center

          shadow-lg
          transition-all duration-300

          hover:scale-110
          active:scale-95
        "
      >
        💬
      </button> */}
    </div>
  );
}
