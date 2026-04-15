"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6 z-50

        w-10 h-10
        rounded-full

        bg-white/80 backdrop-blur
        border border-gray-200
        text-[#0b1b33]

        flex items-center justify-center

        transition-all duration-300
        hover:bg-white
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        hover:-translate-y-1
      "
    >
      ↑
    </button>
  );
}
