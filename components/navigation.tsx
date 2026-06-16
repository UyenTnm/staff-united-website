"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme/ThemeToggle";
import { ChevronDown } from "lucide-react";
import BrochureModal from "./brochure/BrochureModal";

export default function Navigation() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/vi") ? "vi" : "en";
  const pathnameWithoutLocale = pathname.replace(/^\/(en|vi)/, "") || "/";

  const router = useRouter();

  // const activeService = pathname.split("/")[2];
  const activeService = pathname.replace(/^\/(en|vi)/, "").split("/")[2];

  const [brochureOpen, setBrochureOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|vi)/, "");

    router.push(`/${newLocale}${pathWithoutLocale || ""}`);
  };

  const navItems = [
    // { label: "HOME", href: "/" },
    { label: "OUR STORY", href: "/about-us" },
    { label: "SERVICES", href: "/services" },
    { label: "TEAM", href: "/team" },
    { label: "CAREERS", href: "/careers" },
    { label: "INSIGHT", href: "/insights" },
    { label: "JOIN TEAM", href: "/join" },
    { label: "BROCHURE", href: "#" },
  ];
  const serviceItems = [
    {
      label: "All Services",
      href: "/services",
    },
    {
      label: "Strategic Operations",
      href: "/services/strategic-operations",
    },
    {
      label: "Targeted Sales",
      href: "/services/targeted-sales",
    },
    {
      label: "Accounting & Legal",
      href: "/services/accounting-legal",
    },
    {
      label: "Focused Marketing",
      href: "/services/focused-marketing",
    },
    {
      label: "Future Expansion",
      href: "/services/future-expansion",
    },
  ];

  // const isActive = (href: string) => {
  //   if (href === "/") return pathname === "/";
  //   return pathname.startsWith(href);
  // };
  const isActive = (href: string) => {
    if (href === "/") {
      return pathnameWithoutLocale === "/";
    }

    return pathnameWithoutLocale.startsWith(href);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  useEffect(() => {
    const close = () => setIsOpen(false);

    window.addEventListener("close-menu", close);

    return () => window.removeEventListener("close-menu", close);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] isolate">
      <div className="w-full mx-auto h-[56px] sm:h-[64px] lg:h-[72px] flex items-center justify-between px-4 sm:px-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] pointer-events-auto">
        {/* LOGO */}
        <Link href="/">
          <Image src="/staff-logo.webp" alt="logo" width={120} height={30} />
        </Link>

        {/* CENTER PILL */}
        <div
          className="
          hidden xl:flex items-center gap-2
          bg-[#0d0d0d]/80
          border border-white/10
          rounded-full px-3 py-2
          shadow-[0_-9px_22px_rgba(0,0,0,0.32)]
        "
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            // SERVICES DROPDOWN
            if (item.label === "SERVICES") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesHover(true)}
                  onMouseLeave={() => setServicesHover(false)}
                >
                  {" "}
                  <Link
                    href="/services"
                    className={`
    flex items-center gap-1
    px-4 py-2
    text-sm
    rounded-full
    transition-all duration-300

    ${active ? "bg-[#4f8dc9] text-[#0a1b33]" : "text-white/70 hover:text-white"}
  `}
                  >
                    <span>SERVICES</span>

                    <ChevronDown
                      size={12}
                      className={`
  opacity-60
  transition-transform duration-300
  shrink-0
  ${servicesHover ? "rotate-180" : ""}
`}
                    />
                  </Link>
                  {/* Dropdown */}
                  <div
                    className={`
    text-white/70
    absolute
    top-full mt-3
    left-1/2
    -translate-x-1/4 ml-6

    transition-all duration-300

    ${servicesHover ? "opacity-100 visible" : "opacity-0 invisible"}

    bg-[#0d0d0d]
    border border-white/10
    rounded-2xl
    p-3
    min-w-[240px]
  `}
                  >
                    <Link
                      href="/services/strategic-operations"
                      onClick={() => setServicesHover(false)}
                      className={`block px-4 py-2 hover:text-[#4f8dc9] ${activeService === "strategic-operations" ? "bg-[#4f8dc9]/20 text-[#4f8dc9]" : "hover:text-[#4f8dc9]"}`}
                    >
                      Strategic Operations
                    </Link>

                    <Link
                      href="/services/targeted-sales"
                      onClick={() => setServicesHover(false)}
                      className={`block px-4 py-2 hover:text-[#4f8dc9] ${activeService === "targeted-sales" ? "bg-[#4f8dc9]/20 text-[#4f8dc9]" : "hover:text-[#4f8dc9]"}`}
                    >
                      Targeted Sales
                    </Link>

                    <Link
                      href="/services/accounting-legal"
                      className={`block px-4 py-2 hover:text-[#4f8dc9] ${activeService === "accounting-legal" ? "bg-[#4f8dc9]/20 text-[#4f8dc9]" : "hover:text-[#4f8dc9]"}`}
                    >
                      Accounting & Legal
                    </Link>

                    <Link
                      href="/services/focused-marketing"
                      onClick={() => setServicesHover(false)}
                      className={`block px-4 py-2 hover:text-[#4f8dc9] ${activeService === "focused-marketing" ? "bg-[#4f8dc9]/20 text-[#4f8dc9]" : "hover:text-[#4f8dc9]"}`}
                    >
                      Focused Marketing
                    </Link>

                    <Link
                      href="/services/future-expansion"
                      onClick={() => setServicesHover(false)}
                      className={`block px-4 py-2 hover:text-[#4f8dc9] ${activeService === "future-expansion" ? "bg-[#4f8dc9]/20 text-[#4f8dc9]" : "hover:text-[#4f8dc9]"}`}
                    >
                      Future Expansion
                    </Link>
                  </div>
                </div>
              );
            }
            if (item.label === "BROCHURE") {
              return (
                <button
                  key="brochure"
                  onClick={() => setBrochureOpen(true)}
                  className="
        group relative
        px-4 py-2
        text-sm
        rounded-full
        overflow-hidden
      "
                >
                  {/* GLASS BASE */}
                  <span
                    className="
          absolute inset-0
          rounded-full
          bg-white/5 backdrop-blur-md
          opacity-0
          group-hover:opacity-100
          transition duration-300
        "
                  />

                  {/* LIQUID 1 */}
                  <span
                    className="
          absolute top-1/2 left-1/2
          w-[20px] h-[20px]
          rounded-full
          -translate-x-1/2 -translate-y-1/2

          bg-white/20

          scale-0
          group-hover:scale-[14]

          transition-transform
          duration-500
          ease-[cubic-bezier(0.33,1,0.68,1)]

          will-change-transform
        "
                  />

                  {/* LIQUID 2 */}
                  <span
                    className="
          absolute top-1/2 left-1/2
          w-[20px] h-[20px]
          rounded-full
          -translate-x-1/2 -translate-y-1/2

          bg-white/10

          scale-0
          group-hover:scale-[18]

          transition-transform
          duration-800
          ease-[cubic-bezier(0.33,1,0.68,1)]

          will-change-transform
        "
                  />

                  {/* TEXT */}
                  <span
                    className="
          relative z-10
          text-white/70
          group-hover:text-white
          transition-colors duration-300
        "
                  >
                    BROCHURE
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm rounded-full overflow-hidden"
              >
                {/* ACTIVE */}
                {active && (
                  <span className="absolute inset-0 bg-[#4f8dc9] rounded-full z-0" />
                )}

                {/* GLASS BASE (nhẹ hơn) */}
                <span
                  className="
      absolute inset-0
      rounded-full

      bg-white/5 backdrop-blur-md

      opacity-0
      group-hover:opacity-100

      transition duration-300
    "
                />

                {/* LIQUID SPREAD */}
                {/* LAYER 1 */}
                <span
                  className="
    absolute top-1/2 left-1/2
    w-[20px] h-[20px]
    rounded-full
    -translate-x-1/2 -translate-y-1/2
    group-hover:duration-700

    bg-white/20

    scale-0
    group-hover:scale-[14]

    transition-transform
    duration-500

    ease-[cubic-bezier(0.33,1,0.68,1)]

    will-change-transform
  "
                />

                {/* LAYER 2 */}
                <span
                  className="
    absolute top-1/2 left-1/2
    w-[20px] h-[20px]
    rounded-full
    -translate-x-1/2 -translate-y-1/2
group-hover:duration-700
    bg-white/10

    scale-0
    group-hover:scale-[18]

    transition-transform
    duration-800

    ease-[cubic-bezier(0.33,1,0.68,1)]

    will-change-transform
  "
                />

                {/* TEXT */}
                <span
                  className={`
      relative z-10
      transition-colors duration-300

      ${active ? "text-[#0a1b33]" : "text-white/70 group-hover:text-white"}
    `}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        {/* CTA GROUP */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="hidden xl:flex items-center rounded-full bg-black/40 border border-white/10 overflow-hidden">
            <button
              onClick={() => switchLanguage("en")}
              className={`px-3 py-2 text-sm transition ${
                locale === "en"
                  ? "bg-[#4f8dc9] text-[#0a1b33]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => switchLanguage("vi")}
              className={`px-3 py-2 text-sm transition ${
                locale === "vi"
                  ? "bg-[#4f8dc9] text-[#0a1b33]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              VI
            </button>
          </div>

          {/* <ThemeToggle /> */}

          {/* REQUEST SUPPORT (primary) */}
          <Link
            href="/request-support"
            className="
    group relative overflow-hidden
    hidden xl:flex items-center gap-2

    px-5 py-2 rounded-full
    font-medium

    bg-[#4f8dc9] text-[#0a1b33]

    transition-all duration-700
    hover:shadow-[0_0_20px_rgba(79,141,201,0.6)]
    hover:bg-[#103663]
    hover:text-white
  "
          >
            {/* TEXT */}
            <span className="relative z-10 flex items-center gap-2">
              Request Support
              <span
                className="
      rotate-[-45deg]
      transition-transform duration-300
      group-hover:rotate-0 group-hover:translate-x-1
    "
              >
                →
              </span>
            </span>

            {/* SHINE EFFECT */}
            <span
              className="
    absolute inset-0
    bg-gradient-to-r from-white/0 via-white/20 to-white/0
    translate-x-[-120%]
    group-hover:translate-x-[120%]
    transition-transform duration-700
  "
            />
          </Link>
        </div>

        {isOpen && (
          <div className="fixed top-[56px] sm:top-[64px] left-0 w-full bg-black backdrop-blur-xl z-[9998] flex flex-col items-center gap-6 py-10">
            {navItems.map((item) => {
              if (item.label === "SERVICES") {
                return (
                  <div
                    key={item.href}
                    className="flex flex-col items-center gap-3"
                  >
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="
    flex items-center justify-center gap-1
    text-white text-lg
  "
                    >
                      <span>SERVICES</span>

                      <ChevronDown
                        size={12}
                        strokeWidth={1.8}
                        className={`
      opacity-70
      transition-transform duration-300
      ${servicesOpen ? "rotate-180" : ""}
    `}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="mt-3 flex flex-col items-center gap-3">
                        {serviceItems.map((service) => {
                          const slug = service.href.split("/")[2];

                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setServicesOpen(false);
                                setIsOpen(false);
                              }}
                              className={`
        block px-4 py-2 rounded-lg transition-all

        ${
          activeService === slug
            ? "bg-[#4f8dc9]/20 text-[#4f8dc9]"
            : "text-white/70 hover:text-[#4f8dc9]"
        }
      `}
                            >
                              {service.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.label === "BROCHURE") {
                return (
                  <button
                    key="brochure"
                    onClick={() => {
                      setBrochureOpen(true);
                      setIsOpen(false);
                    }}
                    className="
        text-white text-lg
        transition-colors duration-300
        hover:text-[#4f8dc9]
      "
                  >
                    BROCHURE
                  </button>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 w-full px-6 mt-4">
              {/* Request Support */}
              <Link
                href="/request-support"
                onClick={() => setIsOpen(false)}
                className="
      w-full
      text-center

      bg-[#4f8dc9]
      text-white

      px-6 py-3
      rounded-full

      font-medium
      transition-all duration-300
    "
              >
                Request Support
              </Link>

              {/* Download Brochure Tạm ẩn mobile */}
              {/* <button
                onClick={() => {
                  setBrochureOpen(true);
                  setIsOpen(false);
                }}
                className="
      w-full
      text-center

      border-2 border-[#4f8dc9]/60
      bg-transparent

      text-white

      px-6 py-3
      rounded-full

      font-medium

      transition-all duration-300
      hover:bg-[#4f8dc9]/10
      hover:border-[#4f8dc9]
    "
              >
                Download Brochure
              </button> */}
            </div>
          </div>
        )}

        <button
          onClick={() => {
            if (!isOpen) {
              window.dispatchEvent(new Event("close-chat"));
            }
            setIsOpen(!isOpen);
          }}
          className="xl:hidden w-10 h-10 flex items-center justify-center relative"
        >
          {/* LINE 1 */}
          <span
            className={`
      absolute w-6 h-[2px] bg-[#4f8dc9]
      transition-all duration-300 ease-in-out

      ${isOpen ? "rotate-45 top-1/2" : "-translate-y-2"}
    `}
          />

          {/* LINE 2 */}
          <span
            className={`
      absolute w-6 h-[2px] bg-[#4f8dc9]
      transition-all duration-300 ease-in-out

      ${isOpen ? "opacity-0" : ""}
    `}
          />

          {/* LINE 3 */}
          <span
            className={`
      absolute w-6 h-[2px] bg-[#4f8dc9]
      transition-all duration-300 ease-in-out

      ${isOpen ? "-rotate-45 top-1/2" : "translate-y-2"}
    `}
          />
        </button>
      </div>

      <BrochureModal
        open={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />
    </nav>
  );
}
