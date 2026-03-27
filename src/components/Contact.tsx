"use client";

import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import { useInView } from "@/lib/useInView";

export default function Contact() {
  const { t } = useI18n();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-primary-50/30 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            {t.contact.label}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500"
          >
            {t.contact.subtitle}
          </motion.p>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="mailto:app@mazely.app"
              className="group inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">
                  {t.contact.emailLabel}
                </div>
                <div className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                  {t.contact.email}
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
