"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaThreads } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const targetDate = new Date("2026-03-25");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-[#0b1b33] via-[#1c3f6e] to-[#4f8fcb] bg-[length:200%_200%] animate-gradient">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-xl p-16 text-center max-w-xl"
      >
        {/* <h1 className="text-4xl font-semibold text-[#0b1b33]">
          Insights Coming Soon
        </h1> */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-[#0b1b33]"
        >
          Insights Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-[#0b1b33]/70"
        >
          We're preparing articles and insights focused on operational
          excellence, execution standards and scalable support systems.
        </motion.p>

        {/* COUNTDOWN */}
        <motion.div className="flex justify-center gap-10 mt-10 text-[#0b1b33]">
          <motion.div>
            <div className="text-3xl font-semibold">{timeLeft.days}</div>
            <div className="text-sm">Days</div>
          </motion.div>

          <motion.div>
            <div className="text-3xl font-semibold">{timeLeft.hours}</div>
            <div className="text-sm">Hours</div>
          </motion.div>

          <motion.div>
            <div className="text-3xl font-semibold">{timeLeft.minutes}</div>
            <div className="text-sm">Minutes</div>
          </motion.div>
        </motion.div>

        {/* SOCIAL CHANNELS */}

        <div className="mt-12">
          <p className="text-[#0b1b33]/60 text-sm mb-4">Follow Staff United</p>

          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/staffunitedgroup"
              target="_blank"
              className="p-3 rounded-full bg-[#0b1b33]/5 hover:bg-[#1877F2] hover:text-white transition"
            >
              <Facebook size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/staffunitedgroup/"
              target="_blank"
              className="p-3 rounded-full bg-[#0b1b33]/5 hover:bg-[#1877F2] hover:text-white transition"
            >
              <Instagram size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.threads.com/@staffunitedgroup"
              target="_blank"
              className="p-3 rounded-full bg-[#0b1b33]/5 hover:bg-[#1877F2] hover:text-white transition"
            >
              <FaThreads size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/company/staff-united-group/posts/?feedView=all"
              target="_blank"
              className="p-3 rounded-full bg-[#0b1b33]/5 hover:bg-[#1877F2] hover:text-white transition"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block bg-[#4f8fcb] text-white px-6 py-3 rounded-lg hover:bg-[#3a7bb5]"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
