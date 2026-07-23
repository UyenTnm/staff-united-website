"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function FallingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.4 + 0.15,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let raf: number;
    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(79, 141, 201, ${p.opacity})`;
        ctx!.fill();
        p.y += p.speed;
        if (p.y > height) {
          p.y = -5;
          p.x = Math.random() * width;
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    function handleResize() {
      width = canvas!.width = canvas!.offsetWidth;
      height = canvas!.height = canvas!.offsetHeight;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-60"
    />
  );
}

function GridHoverButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/academy/login"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group relative inline-flex items-center gap-2 rounded-full bg-[#4f8dc9]
        font-semibold text-[#0b1b33] transition-all duration-300 overflow-hidden
        hover:-translate-y-0.5 active:scale-[0.98]
        text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4
      "
    >
      {/* Đường quét sáng chạy qua khi hover */}
      <motion.span
        className="absolute inset-y-0 left-0 w-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
        }}
        initial={{ x: "-80px" }}
        animate={hovered ? { x: "260px" } : { x: "-80px" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />

      <span className="relative z-10 flex items-center gap-2">
        Enter&nbsp;the&nbsp;Academy →
      </span>
    </Link>
  );
}

export default function AcademyPage() {
  return (
    <main
      className="min-h-screen text-white overflow-hidden relative"
      style={{
        background:
          "linear-gradient(180deg, #0b1b33 0%, #0d2140 35%, #103663 60%, #0b1b33 100%)",
      }}
    >
      <FallingParticles />

      {/* Decorative rings - xoay chậm */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full border border-[#4a596e]/30 hidden sm:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-64 top-40 h-[600px] w-[600px] rounded-full border border-[#4a596e]/15 hidden sm:block"
      />

      <section
        className="
          relative z-10 mx-auto
          max-w-[92vw] 2xl:max-w-[1800px]
          px-5 sm:px-6 md:px-10
          pt-24 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-44 2xl:pt-48
          pb-16 sm:pb-20 md:pb-24
        "
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 uppercase font-medium text-[#4f8dc9] text-xs sm:text-sm md:text-base tracking-[0.2em]"
        >
          <span className="h-px w-8 bg-[#4f8dc9] shrink-0" />
          Staff United Sales Academy
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-bold leading-tight max-w-7xl text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          <span className="block">Every client relationship</span>
          <span className="block">starts with</span>
          <span className="block text-[#4f8dc9]">the right foundation.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-white leading-relaxed max-w-2xl text-sm sm:text-base md:text-lg"
        >
          A three-day certification program for every STAFF United Business
          Growth Representative — built to teach how we identify opportunities,
          understand clients, represent our 5-Core Support Ecosystem™
          accurately, and begin the right long-term relationships.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <GridHoverButton />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ transformOrigin: "left" }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 border-t border-[#4a596e]/40"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-8 sm:mt-10 md:mt-12 mx-auto max-w-xl sm:max-w-none grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-8 sm:gap-x-10 md:gap-x-16 items-start text-center"
        >
          <Stat number={3} label="Training days" />
          <Stat number={10} label="Core modules" />
          <Stat number="80%+" label="To certify" />
          <Stat number="30-Day" label="Follow-up review" />
        </motion.div>

        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 border-t border-[#4a596e]/40" />
      </section>
    </main>
  );
}

function Stat({ number, label }: { number: string | number; label: string }) {
  const isNumeric = typeof number === "number";
  const [display, setDisplay] = useState(isNumeric ? 0 : number);

  useEffect(() => {
    if (!isNumeric) return;
    const target = number as number;
    const duration = 900;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isNumeric, number]);

  return (
    <motion.div variants={fadeUp} className="flex flex-col items-center">
      <p className="font-bold text-white leading-none text-2xl sm:text-3xl md:text-4xl">
        {display}
      </p>
      <p className="mt-2 uppercase text-[#d5dadf]/50 font-mono leading-none text-[11px] sm:text-xs tracking-[0.15em] whitespace-nowrap">
        {label}
      </p>
    </motion.div>
  );
}
