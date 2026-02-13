"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-[#0b1b33] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/staff-logo.png"
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
    px-5 py-2
    text-sm font-medium
    rounded
    border
    transition-all duration-300
    ${
      isActive("/join")
        ? "bg-[#4f8fcb] text-white border-[#0b1b33] shadow-lg scale-[1.03] ring-2 ring-[#0b1b33]/40"
        : "bg-white text-[#0b1b33] border-transparent hover:bg-[#f2f4f7] hover:shadow-sm hover:-translate-y-[1px]"
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
                className={`block w-full text-center px-4 py-3 rounded font-medium border transition-all ${
                  isActive("/request-support")
                    ? "bg-[#4f8fcb] text-white border-[#0b1b33] shadow-md"
                    : "bg-[#4f8fcb] text-white border-transparent hover:bg-[#3f7bb5]"
                }`}
              >
                Request Support
              </Link>

              {/* Join the Team */}
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-center px-4 py-3 rounded font-medium border transition-all ${
                  isActive("/join")
                    ? "bg-white text-[#0b1b33] border-[#0b1b33] shadow-md"
                    : "bg-white text-[#0b1b33] border-transparent hover:bg-[#f2f4f7]"
                }`}
              >
                Join the Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
