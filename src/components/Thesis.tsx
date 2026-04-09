"use client";

import { motion, useReducedMotion } from "framer-motion";
import GraphAnimation from "./GraphAnimation";

export default function Thesis() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="thesis"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-32"
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-light leading-relaxed text-white">
            &ldquo;When systems contain cycles, coordination fails.
            <br />
            <span className="text-gray">
              This is not opinion. It is mathematics.&rdquo;
            </span>
          </blockquote>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="flex-shrink-0"
        >
          <GraphAnimation />
        </motion.div>
      </div>
    </section>
  );
}
