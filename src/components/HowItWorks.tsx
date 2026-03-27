"use client";

import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import { useInView } from "@/lib/useInView";

const stepIcons = [
  // Map icon
  <svg key="map" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>,
  // Link icon
  <svg key="link" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.036a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.25 8.688" /></svg>,
  // Camera icon
  <svg key="camera" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>,
  // Share icon
  <svg key="share" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>,
];

export default function HowItWorks() {
  const { t } = useI18n();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const steps = [
    t.howItWorks.step1,
    t.howItWorks.step2,
    t.howItWorks.step3,
    t.howItWorks.step4,
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            {t.howItWorks.label}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            {t.howItWorks.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500"
          >
            {t.howItWorks.subtitle}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 sm:-translate-x-px hidden sm:block" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-12 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Step number circle on timeline */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white items-center justify-center text-lg font-bold shadow-lg shadow-primary-500/30 z-10">
                  {i + 1}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 1 ? "sm:text-right" : ""
                  }`}
                >
                  <div
                    className={`inline-flex sm:hidden w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white items-center justify-center text-sm font-bold shadow-lg shadow-primary-500/30 mb-4`}
                  >
                    {i + 1}
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300">
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        i % 2 === 1 ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                        {stepIcons[i]}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
