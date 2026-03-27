"use client";

import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import { useInView } from "@/lib/useInView";

export default function CTA() {
  const { t } = useI18n();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-[2.5rem] blur-2xl" />

          <div className="relative text-center py-16 sm:py-20 px-6 sm:px-12 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Floating blobs */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
            />
            <motion.div
              animate={{ scale: [1, 0.8, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
                {t.cta.title}
              </h2>
              <p className="mt-4 text-lg text-primary-100 max-w-xl mx-auto">
                {t.cta.subtitle}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-full hover:bg-primary-50 shadow-xl shadow-primary-900/20 transition-all hover:-translate-y-0.5 group"
              >
                {t.cta.button}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
