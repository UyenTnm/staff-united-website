"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: Props) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -30 };
      case "right":
        return { opacity: 0, x: 30 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  return (
    <motion.section
      className={className}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
        type: "tween",
      }}
      viewport={{ once: true, amount: 0.15, margin: "-50px" }}
    >
      {children}
    </motion.section>
  );
}
