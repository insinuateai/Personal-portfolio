"use client";

import { motion, useReducedMotion } from "framer-motion";
import { products, type Product } from "@/lib/constants";

function StatusBadge({ status }: { status: Product["status"] }) {
  const isLive = status === "live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-[family-name:var(--font-dm-sans)] uppercase tracking-wider ${
        isLive ? "text-teal" : "text-gray"
      }`}
    >
      {isLive && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
        </span>
      )}
      {isLive ? "Live" : "Coming Soon"}
    </span>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const isLink = product.status === "live";

  const content = (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 15 },
            }
      }
      className={`group relative p-6 md:p-8 rounded-2xl border transition-colors duration-300 ${
        isLink
          ? "border-white/5 hover:border-teal/30 cursor-pointer"
          : "border-white/5 cursor-default"
      } bg-white/[0.02] backdrop-blur-sm`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl md:text-2xl font-[family-name:var(--font-outfit)] font-semibold text-white">
            {product.name}
          </h3>
          <StatusBadge status={product.status} />
        </div>
        <p className="text-sm md:text-base text-gray font-[family-name:var(--font-dm-sans)]">
          {product.description}
        </p>

        {isLink && (
          <div className="mt-4 flex items-center gap-1 text-teal text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-[family-name:var(--font-dm-sans)]">Visit</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (isLink) {
    return (
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function Products() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="products"
      className="relative flex flex-col items-center px-6 py-32"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-light text-white mb-16"
        >
          Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
