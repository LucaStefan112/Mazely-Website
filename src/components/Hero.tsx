"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "@/lib/i18n/context";

export default function Hero() {
  const { t } = useI18n();
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowScroll(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/80 via-white to-accent-50/60" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-primary-200/40 to-primary-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 0.9, 1.1, 1], x: [0, -40, 20, 0], y: [0, 30, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[0%] w-[600px] h-[600px] bg-gradient-to-bl from-accent-200/30 to-primary-200/20 rounded-full blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0074d9 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            {t.hero.badge}
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-gray-900"
            >
              {t.hero.title1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent"
            >
              {t.hero.titleHighlight}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/#contact"
              className="group px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full hover:from-primary-600 hover:to-primary-700 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              {t.hero.cta}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/#how-it-works"
              className="px-8 py-4 text-base font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 border border-primary-100 rounded-full transition-all hover:-translate-y-0.5"
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>

          {/* Enterprise Sales Funnel Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400"
          >
            {t.cta.steps.map((step, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="font-medium text-gray-500">{step}</span>
                {i < t.cta.steps.length - 1 && (
                  <svg className="w-4 h-4 text-gray-300 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Institution type cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", label: "Government", sub: "Public buildings" },
            { icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222", label: "Universities", sub: "Campus navigation" },
            { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Hospitals", sub: "Healthcare facilities" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-400">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <AnimatePresence>
          {showScroll && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
                  <motion.div
                    animate={{ opacity: [1, 0], y: [0, 12] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-2 bg-gray-400 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
