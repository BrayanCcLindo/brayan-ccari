"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.6, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-purple font-heading" ref={ref}>
      {suffix}
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Total Projects" },
  { value: 80, suffix: "+", label: "Responsive Apps" },
];

export function StatsSection() {
  return (
    <AnimatedSection className="grid grid-cols-3 gap-4 p-6 md:p-8 bg-white rounded-2xl border border-gray-600">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-600">
          <Counter value={s.value} suffix={s.suffix} />
          <p className="text-gray-200 text-xs md:text-sm text-center">{s.label}</p>
        </div>
      ))}
    </AnimatedSection>
  );
}
