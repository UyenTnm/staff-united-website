import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1b33] text-white">
      <div className="max-w-4xl mx-auto px-4 py-5">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <Image
            src="/staff-logo.png"
            alt="STAFF United"
            width={130}
            height={32}
            priority
          />
        </div>

        {/* Business Info */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3 md:gap-x-8 text-sm text-white/75 mb-8 text-center md:text-left">
          <a
            href="mailto:info@staffunitedgroup.com"
            className="hover:text-white transition"
          >
            <span className="font-semibold text-white">Email:</span>{" "}
            info@staffunitedgroup.com
          </a>

          <a href="tel:+000000000" className="hover:text-white transition">
            <span className="font-semibold text-white">Phone:</span> +84 32 942 6269
          </a>

          <span>
            <span className="font-semibold text-white">Location:</span> L17-11,
            17th Floor, Vincom Center, 72 Lê Thánh Tôn Street, Sài Gòn Ward, Ho
            Chi Minh City
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          {[
            {
              href: "https://www.linkedin.com/company/staff-united-group/",
              label: "LinkedIn",
            },
            {
              href: "https://www.instagram.com/staffunitedgroup/",
              label: "Instagram",
            },
            {
              href: "https://www.facebook.com/staffunitedgroup",
              label: "Facebook",
            },
            {
              href: "https://www.threads.com/@staffunitedgroup",
              label: "Threads",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition text-white/70 hover:text-white"
              aria-label={social.label}
            >
              {social.label === "LinkedIn" && <Linkedin size={18} />}
              {social.label === "Instagram" && <Instagram size={18} />}
              {social.label === "Facebook" && <Facebook size={18} />}
              {social.label === "Threads" && <FaThreads size={18} />}
            </a>
          ))}
        </div>

        {/* QR CONTACT */}
        {/* <div className="flex flex-col items-center text-center mb-10">
          <div className="bg-white p-3 rounded-lg shadow-md">
            <Image
              src="/qr-code.png"
              alt="Scan to contact STAFF United"
              width={110}
              height={110}
            />
          </div>

          <p className="text-sm text-white/70 mt-3">Scan to contact our team</p>

          <p className="text-xs text-white/50 mt-1">
            WhatsApp • Email • Location
          </p>
        </div> */}

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-3 text-center md:text-left">
          <p>© {year} STAFF United. All rights reserved.</p>
          <p className="text-white/80 font-medium tracking-wide">
            All Women. All Business.
          </p>
        </div>
      </div>
    </footer>
  );
}
