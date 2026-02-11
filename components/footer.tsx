import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1b33] text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <Image
            src="/staff-logo.png"
            alt="STAFF United"
            width={120}
            height={30}
            priority
          />
        </div>

        {/* Business Info */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/75 mb-5">
          <a
            href="mailto:info@staffunitedgroup.com"
            className="hover:text-white transition"
          >
            <span className="font-semibold text-white">Email:</span>{" "}
            info@staffunitedgroup.com
          </a>

          <a href="tel:+000000000" className="hover:text-white transition">
            <span className="font-semibold text-white">Phone:</span> TBD
          </a>

          <span>
            <span className="font-semibold text-white">Location:</span> Vietnam
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-white/60 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.6c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 4v7.7h-4V8z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="text-white/60 hover:text-white transition"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 15a5 5 0 110-10 5 5 0 010 10zm6.5-10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="text-white/60 hover:text-white transition"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.5H15c-1.2 0-1.6.7-1.6 1.5V12H17l-.5 3h-3.1v7A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-4" />

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-2">
          <p>© {year} STAFF United. All rights reserved.</p>
          <p className="text-white/70 font-medium">
            All Females. All Business.
          </p>
        </div>
      </div>
    </footer>
  );
}
