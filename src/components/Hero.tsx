"use client";

import { motion, useReducedMotion } from "framer-motion";
import TypedIdentity from "./TypedIdentity";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6"
    >
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-[family-name:var(--font-outfit)] font-light tracking-tight text-white"
        >
          Kian
        </motion.h1>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6"
        >
          <TypedIdentity />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
        onClick={() =>
          document.getElementById("thesis")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-xs text-gray font-[family-name:var(--font-dm-sans)] uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          className="w-px bg-teal origin-top"
          initial={{ height: 24 }}
          whileHover={{ height: 48 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </section>
  );
}
