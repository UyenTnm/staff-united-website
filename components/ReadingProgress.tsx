"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const content = document.getElementById("reading-content");
      if (!content) return;

      const rect = content.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = content.offsetHeight;
      const visible = windowHeight - rect.top;

      const scrolled = Math.min(Math.max(visible / total, 0), 1);

      setProgress(scrolled * 100);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] bg-white/30 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-[#4f8fcb] to-[#7fb3e8] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
