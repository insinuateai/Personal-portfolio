"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "./CountUp";

const researchItems = [
  {
    title: "Topological Obstruction Theory for Multi-Agent Coordination",
    description:
      "Proving that cyclic dependencies in multi-agent systems create topological obstructions to consistent coordination.",
    link: "https://arxiv.org",
    type: "paper" as const,
  },
  {
    title: "Formally Verified Theorems",
    description: "Lean 4 theorems covering coordination, cohomology, and proof verification.",
    count: 2400,
    type: "metric" as const,
  },
  {
    title: "Founding New Fields",
    description:
      "Perspective Geometry and Information Cohomology — mathematical frameworks for AI coordination and reasoning.",
    type: "field" as const,
  },
];

function PaperIcon() {
  return (
    <svg
      className="w-6 h-6 text-teal"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

function MetricIcon() {
  return (
    <svg
      className="w-6 h-6 text-teal"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
      />
    </svg>
  );
}

function FieldIcon() {
  return (
    <svg
      className="w-6 h-6 text-teal"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

const icons = { paper: PaperIcon, metric: MetricIcon, field: FieldIcon };

export default function Research() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="research"
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
          Research
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchItems.map((item, index) => {
            const Icon = icons[item.type];
            return (
              <motion.div
                key={item.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="mb-4">
                  <Icon />
                </div>

                <h3 className="text-lg font-[family-name:var(--font-outfit)] font-semibold text-white mb-2">
                  {item.title}
                </h3>

                {item.count && (
                  <p className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-teal mb-3">
                    <CountUp end={item.count} suffix="+" />
                  </p>
                )}

                <p className="text-sm text-gray font-[family-name:var(--font-dm-sans)] leading-relaxed">
                  {item.description}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-teal text-sm hover:underline font-[family-name:var(--font-dm-sans)]"
                  >
                    Read paper
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
