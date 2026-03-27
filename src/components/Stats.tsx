"use client";

import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import { useInView } from "@/lib/useInView";
import { useEffect, useState } from "react";

function AnimatedNumber({ target, inView, suffix = "" }: { target: number; inView: boolean; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function Stats() {
  const { t } = useI18n();
  const { ref, inView } = useInView({ threshold: 0.3 });

  const stats = [
    { value: 500, suffix: "+", label: t.stats.buildings },
    { value: 2500, suffix: "+", label: t.stats.floors },
    { value: 100000, suffix: "+", label: t.stats.navigations },
    { value: 4, suffix: "", label: t.stats.languages },
  ];

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-primary-50/20 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                <AnimatedNumber target={stat.value} inView={inView} />
                {stat.suffix}
              </div>
              <div className="mt-2 text-gray-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
