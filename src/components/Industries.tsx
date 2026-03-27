"use client";

import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import { useInView } from "@/lib/useInView";

const industryIcons = [
  // Hospital
  <svg key="hospital" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  // University
  <svg key="university" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
  // Government
  <svg key="government" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>,
];

const gradients = [
  "from-rose-500 to-pink-600",
  "from-primary-500 to-primary-600",
  "from-emerald-500 to-teal-600",
];

export default function Industries() {
  const { t } = useI18n();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const industries = [
    { ...t.industries.hospitals, href: "/hospitals/" },
    { ...t.industries.universities, href: "/universities/" },
    { ...t.industries.government, href: "#contact" },
  ];

  return (
    <section id="industries" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-primary-50/30 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            {t.industries.label}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            {t.industries.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500"
          >
            {t.industries.subtitle}
          </motion.p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[i]} text-white flex items-center justify-center shadow-lg mb-6`}>
                  {industryIcons[i]}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                  {industry.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {industry.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={industry.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 group/link"
                >
                  {industry.cta}
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
