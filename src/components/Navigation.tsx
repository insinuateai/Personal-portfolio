"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navSections } from "@/lib/constants";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);

      const sections = navSections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3"
          aria-label="Page navigation"
        >
          {navSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-3"
              aria-label={`Navigate to ${section.label}`}
              aria-current={activeSection === section.id ? "true" : undefined}
            >
              <span
                className={`text-xs font-[family-name:var(--font-dm-sans)] transition-opacity duration-200 ${
                  activeSection === section.id
                    ? "text-teal opacity-100"
                    : "text-gray opacity-0 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "w-3 h-3 bg-teal"
                    : "w-1.5 h-1.5 bg-gray group-hover:bg-white"
                }`}
              />
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
