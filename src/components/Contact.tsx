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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Info */}
          <div>
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
              className="mt-4 text-lg text-gray-500 max-w-lg"
            >
              {t.contact.subtitle}
            </motion.p>

            {/* Enterprise funnel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {t.cta.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100 text-primary-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{step}</span>
                </div>
              ))}
            </motion.div>

            {/* Email card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href={`mailto:${t.contact.email}`}
                className="group inline-flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/25">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">{t.contact.emailLabel}</div>
                  <div className="text-lg font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                    {t.contact.email}
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/mazely-app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300 ml-3"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#005885] text-white flex items-center justify-center shadow-lg shadow-[#0077B5]/25">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Follow us on</div>
                  <div className="text-lg font-bold text-[#0077B5] group-hover:text-[#005885] transition-colors">
                    LinkedIn
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right - Demo Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-primary-500/5">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.contact.demoTitle}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {t.contact.demoSubtitle}
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = data.get("name") || "";
                  const email = data.get("email") || "";
                  const org = data.get("org") || "";
                  const role = data.get("role") || "";
                  const message = data.get("message") || "";
                  const subject = `Demo Request from ${name}${org ? ` — ${org}` : ""}`;
                  const body = `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\nRole: ${role}\n\n${message}`;
                  window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm"
                    placeholder="john@hospital.org"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-org" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.formOrg}
                    </label>
                    <input
                      type="text"
                      id="contact-org"
                      name="org"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm"
                      placeholder="City Hospital"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-role" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.formRole}
                    </label>
                    <input
                      type="text"
                      id="contact-role"
                      name="role"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm"
                      placeholder="Facilities Director"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm resize-none"
                    placeholder="Tell us about your buildings, number of floors, and current wayfinding challenges..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5"
                >
                  {t.contact.formSubmit}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
