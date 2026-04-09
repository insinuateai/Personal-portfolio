"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function GraphAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [showCycle, setShowCycle] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setShowCycle((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, [hasStarted, prefersReducedMotion]);

  const teal = "#34d399";
  const red = "#f87171";
  const activeColor = showCycle ? red : teal;

  // Node positions for a simple graph
  const nodes = [
    { x: 100, y: 30 },  // root
    { x: 50, y: 90 },   // left child
    { x: 150, y: 90 },  // right child
    { x: 25, y: 150 },  // left-left
    { x: 75, y: 150 },  // left-right
  ];

  // Tree edges (always shown)
  const treeEdges = [
    [0, 1], [0, 2], [1, 3], [1, 4],
  ];

  // Cycle edge: connects node 4 back to node 0
  const cycleEdge = [4, 2];

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 200 180"
        className="w-48 h-36 md:w-56 md:h-44"
        aria-label="Graph transitioning from tree to cycled structure"
      >
        {/* Tree edges */}
        {treeEdges.map(([from, to], i) => (
          <motion.line
            key={`edge-${i}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke={activeColor}
            strokeWidth={1.5}
            strokeOpacity={0.6}
            animate={{ stroke: activeColor }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* Cycle edge */}
        <motion.line
          x1={nodes[cycleEdge[0]].x}
          y1={nodes[cycleEdge[0]].y}
          x2={nodes[cycleEdge[1]].x}
          y2={nodes[cycleEdge[1]].y}
          stroke={red}
          strokeWidth={1.5}
          strokeDasharray="4 3"
          animate={{
            strokeOpacity: showCycle ? 0.8 : 0,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={5}
            fill={activeColor}
            animate={{ fill: activeColor }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </svg>

      <motion.p
        className="text-sm font-[family-name:var(--font-jetbrains)] tracking-wide"
        animate={{ color: activeColor }}
        transition={{ duration: 0.5 }}
      >
        {showCycle ? "H\u00B9 \u2260 0" : "H\u00B9 = 0"}
      </motion.p>

      <p className="text-xs text-gray">
        {showCycle ? "Cycles detected \u2014 unstable" : "Acyclic \u2014 stable"}
      </p>
    </div>
  );
}
