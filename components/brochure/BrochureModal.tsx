"use client";

import { X, Download } from "lucide-react";

interface BrochureModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BrochureModal({ open, onClose }: BrochureModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[99999]
        bg-black/70
        backdrop-blur-md
        flex items-center justify-center
        p-4
      "
    >
      <div
        className="
          relative
          w-full max-w-4xl
          bg-[#0d0d0d]
          border border-white/10
          rounded-3xl
          p-8
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute top-5 right-5
            text-white/60 hover:text-white
          "
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-light text-white">Company Brochure</h2>

          <p className="mt-3 text-white/60">Select your preferred language</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* English */}
          <div
            className="
              group
              border border-white/10
              rounded-2xl
              p-6
              transition-all duration-300
              hover:border-[#4f8dc9]
              hover:-translate-y-1
            "
          >
            <div className="text-5xl mb-4">🇬🇧</div>

            <h3 className="text-xl text-white mb-2">English Version</h3>

            <p className="text-white/60 mb-6">Brochure</p>

            <a
              href="/api/download-brochure-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="
    inline-flex items-center gap-2
    bg-[#4f8dc9]
    text-[#0a1b33]
    px-4 py-2
    rounded-full
  "
            >
              <Download size={16} />
              View & Download
            </a>
          </div>

          {/* Vietnamese */}
          <div
            className="
              group
              border border-white/10
              rounded-2xl
              p-6
              transition-all duration-300
              hover:border-[#4f8dc9]
              hover:-translate-y-1
            "
          >
            <div className="text-5xl mb-4">🇻🇳</div>

            <h3 className="text-xl text-white mb-2">Vietnamese Version</h3>

            <p className="text-white/60 mb-6">Hồ sơ năng lực công ty</p>

            <a
              href="/api/download-brochure-vi"
              target="_blank"
              rel="noopener noreferrer"
              className="
    inline-flex items-center gap-2
    bg-[#4f8dc9]
    text-[#0a1b33]
    px-4 py-2
    rounded-full
  "
            >
              <Download size={16} />
              View & Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
