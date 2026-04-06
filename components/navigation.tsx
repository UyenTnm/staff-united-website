"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "The Standard", href: "/the-standard" },
    { label: "Team", href: "/team" },
    { label: "Insights", href: "/insights" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0b1b33] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/staff-logo.webp"
              alt="STAFF United"
              width={140}
              height={32}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition ${
                  isActive(item.href)
                    ? "text-white border-b border-white pb-1"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* <ThemeToggle /> */}
            <Link
              href="/request-support"
              className={`
    px-5 py-2
    text-sm font-medium
    rounded
    border
    transition-all duration-200
    ${
      isActive("/request-support")
        ? "bg-[#4f8fcb] text-white border-[#0b1b33] shadow-md"
        : "bg-[#4f8fcb] text-white border-transparent shadow-sm hover:bg-[#3f7bb5] hover:shadow-md hover:-translate-y-[1px] active:translate-y-0"
    }
  `}
            >
              Request Support
            </Link>

            <Link
              href="/join"
              className={`
  px-5 py-2 text-sm font-medium rounded border transition-all duration-300
  ${
    isActive("/join")
      ? "bg-[#eaf2fb] text-[#0b1b33] border-[#4f8fcb] shadow-md"
      : "bg-white text-[#0b1b33] border-transparent hover:bg-[#f2f4f7] hover:-translate-y-[1px]"
  }
`}
            >
              Join the Team
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 relative w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute left-0 top-2 h-0.5 w-full bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 top-3.5" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3.5 h-0.5 w-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-5 h-0.5 w-full bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 top-3.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-4 space-y-4 border-t border-white/10">
            {/* Nav Links */}
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              {/* Request Support */}
              <Link
                href="/request-support"
                onClick={() => setIsOpen(false)}
                className={`
  px-5 py-2 text-sm font-medium rounded
  transition-all duration-200
  ${
    isActive("/request-support")
      ? "bg-[#4f8fcb] text-white shadow-[0_6px_0_#2f5f8f] translate-y-[2px]"
      : "bg-[#4f8fcb] text-white shadow-[0_6px_0_#2f5f8f] hover:translate-y-[2px] hover:shadow-[0_4px_0_#2f5f8f] active:translate-y-[4px] active:shadow-[0_2px_0_#2f5f8f]"
  }
`}
              >
                Request Support
                {/* subtle shine effect */}
                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
              </Link>

              {/* Join the Team */}
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className={`
  px-5 py-2 text-sm font-medium rounded
  transition-all duration-200
  ${
    isActive("/join")
      ? "bg-white text-[#0b1b33] shadow-[0_5px_0_#cbd5e1] translate-y-[2px]"
      : "bg-white text-[#0b1b33] shadow-[0_5px_0_#cbd5e1] hover:translate-y-[2px] hover:shadow-[0_3px_0_#cbd5e1] active:translate-y-[4px] active:shadow-[0_1px_0_#cbd5e1]"
  }
`}
              >
                Join the Team
                {/* 🔥 underline chạy nhẹ */}
                {isActive("/join") && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4f8fcb] animate-slide" />
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
