"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const navItems = [
    { label: "Services", href: "/#services", id: "services" },
    { label: "The Standard", href: "/#standard", id: "standard" },
    { label: "Team", href: "/#team", id: "team" },
    { label: "Insights", href: "/#insights", id: "insights" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b1b33] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/#home" className="flex items-center">
            <Image
              src="/staff-logo.png"
              alt="STAFF United"
              width={140}
              height={32}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`
                  text-sm font-medium transition
                  ${
                    activeId === item.id
                      ? "text-white border-b border-white/80 pb-1"
                      : "text-white/80 hover:text-white"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/join"
              className="px-5 py-2 text-sm font-medium text-white border border-white/40 rounded hover:bg-white hover:text-[#0b1b33] transition"
            >
              Join the Team
            </Link>

            <Link
              href="/request-support"
              className="px-5 py-2 bg-white text-[#0b1b33] rounded text-sm font-medium border border-[#d1d5db] hover:bg-[#f2f4f7] transition"
            >
              Request Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
