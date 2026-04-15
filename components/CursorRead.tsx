"use client";

import { useEffect } from "react";

export default function CursorRead() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}
