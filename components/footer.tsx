import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaThreads } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0b1b33] text-white">
      <div className="max-w-4xl mx-auto px-4 py-5">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <Image
            src="/staff-logo.webp"
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
            <span className="font-semibold text-white">{t("email")}:</span>{" "}
            info@staffunitedgroup.com
          </a>

          <a href="tel:+84329426269" className="hover:text-white transition">
            <span className="font-semibold text-white">{t("phone")}:</span> +84
            32 942 6269
          </a>

          <span>
            <span className="font-semibold text-white">{t("location")}:</span>{" "}
            L17-11, 17th Floor, Vincom Center, 72 Lê Thánh Tôn Street, Sài Gòn
            Ward, Hồ Chí Minh City.
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-5">
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

        {/* Google Review */}
        {/* Google Reviews */}
        {/* Google Reviews */}
        <div className="flex justify-center mb-8">
          <a
            href="https://www.google.com/maps/place/STAFF+UNITED+COMPANY+LIMITED/@15.7295901,100.6036258,6z/data=!3m1!4b1!4m6!3m5!1s0x69843f99aa231b5b:0x8d8b77157a0423ee!8m2!3d15.7939252!4d105.9102332!16s%2Fg%2F11nb74df_k?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="
      flex items-center justify-center
      transition-all duration-300
      hover:scale-110
      hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]
    "
          >
            <Image
              src="/footer/Google-Review-Logo.webp"
              alt="Google Reviews"
              width={96}
              height={96}
              className="
    w-20 h-20 sm:w-24 sm:h-24
    object-contain
    transition-all duration-300
  "
              loading="lazy"
            />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-3 text-center md:text-left">
          <p>
            © {year} STAFF United. {t("rights")}.
          </p>
          <p className="text-white/80 font-medium tracking-wide">
            All Women. All Business.
          </p>
        </div>
      </div>
    </footer>
  );
}
