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
  fixed z-[9999]

  /* 📱 mobile → center */
  left-1/2 -translate-x-1/2
  bottom-[calc(env(safe-area-inset-bottom)+12px)]

  /* 💻 desktop → chuyển sang bên trái */
  sm:left-6 sm:translate-x-0
  sm:right-auto sm:bottom-6

  /* 🖥 màn to */
  2xl:left-10

  w-10 h-10 rounded-full
  bg-white/80 backdrop-blur
  border border-gray-200
  text-[#0b1b33]

  flex items-center justify-center
  shadow-md

  transition-all duration-300
  hover:bg-white
  hover:shadow-xl
  hover:-translate-y-1
  active:scale-95
"
    >
      ↑
    </button>
  );
}
