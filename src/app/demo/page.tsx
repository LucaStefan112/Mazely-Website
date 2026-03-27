"use client";

import { I18nProvider } from "@/lib/i18n/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

export default function DemoPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/80 via-white to-accent-50/60" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left - Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
                    See Mazely{" "}
                    <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                      In Action
                    </span>
                  </h1>
                  <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                    Book a personalized demo and see how Mazely can transform indoor navigation at your institution. Our team will walk you through the platform using a sample layout relevant to your facility type.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-10 space-y-6"
                >
                  <h3 className="text-lg font-bold text-gray-900">What to expect:</h3>
                  {[
                    { title: "Live Platform Walkthrough", desc: "See the visitor navigation experience and admin dashboard in action" },
                    { title: "Facility-Specific Discussion", desc: "We'll discuss your building layout, visitor flows, and wayfinding challenges" },
                    { title: "Deployment Planning", desc: "Get a clear picture of timeline, requirements, and how the pilot program works" },
                    { title: "Q&A", desc: "Ask about security, privacy, integrations, pricing, or anything else" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100 text-primary-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 p-5 rounded-xl bg-primary-50 border border-primary-100"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-primary-700">
                      Demos typically take 20 minutes. We&apos;ll respect your time.
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-primary-500/5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Demo</h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Fill out the form and we&apos;ll schedule a personalized walkthrough at a time that works for you.
                  </p>

                  <form action="mailto:enterprise@mazely.app" method="GET" className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm" placeholder="John Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                      <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm" placeholder="john@hospital.org" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                        <input type="text" id="org" name="org" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm" placeholder="City Hospital" />
                      </div>
                      <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Institution Type</label>
                        <select id="type" name="type" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm bg-white">
                          <option value="">Select...</option>
                          <option value="hospital">Hospital / Healthcare</option>
                          <option value="university">University / Education</option>
                          <option value="government">Government / Public</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                      <input type="text" id="role" name="role" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm" placeholder="Facilities Director" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us about your facility</label>
                      <textarea id="message" name="body" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm resize-none" placeholder="Number of buildings, floors, daily visitors, current wayfinding challenges..." />
                    </div>
                    <button type="submit" className="w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5">
                      Request Demo
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
