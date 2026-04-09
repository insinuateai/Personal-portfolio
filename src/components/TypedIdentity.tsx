"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const identities = [
  "Founder.",
  "Mathematician.",
  "Builder.",
];

export default function TypedIdentity() {
  const prefersReducedMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState("");
  const [identityIndex, setIdentityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cursor blink
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Typing effect
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(identities.join(" "));
      return;
    }

    const current = identities[identityIndex];

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 80 + Math.random() * 40);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setIdentityIndex((prev) => (prev + 1) % identities.length);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, identityIndex, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <p className="text-lg md:text-xl text-gray font-[family-name:var(--font-dm-sans)]">
        Founder. Mathematician. Builder.
      </p>
    );
  }

  return (
    <p className="text-lg md:text-xl text-gray font-[family-name:var(--font-dm-sans)] h-8">
      <span>{displayText}</span>
      <motion.span
        className="inline-block w-[2px] h-5 ml-0.5 align-middle"
        style={{ backgroundColor: showCursor ? "#34d399" : "transparent" }}
        animate={{
          opacity: showCursor ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </p>
  );
}
