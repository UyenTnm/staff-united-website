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
                className={`text-sm font-medium transition ${
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
    text-white
    bg-[#4f8fcb]
    shadow-sm
    transition-all duration-200
    hover:bg-[#3f7bb5]
    hover:shadow-md
    hover:-translate-y-[1px]
    active:translate-y-0
  `}
            >
              Request Support
            </Link>

            <Link
              href="/join"
              className={`px-5 py-2 text-sm font-medium rounded transition ${
                isActive("/join")
                  ? "bg-[#4f8fcb] text-white"
                  : "bg-white text-[#0b1b33] hover:bg-[#f2f4f7]"
              }`}
            >
              Join the Team
            </Link>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="h-0.5 w-full bg-white" />
              <span className="h-0.5 w-full bg-white" />
              <span className="h-0.5 w-full bg-white" />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium ${
                  isActive(item.href) ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/request-support"
              onClick={() => setIsOpen(false)}
              className="block text-white mt-2"
            >
              Request Support
            </Link>

            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="block text-white"
            >
              Join the Team
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
