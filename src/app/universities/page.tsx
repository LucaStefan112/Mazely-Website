"use client";

import { I18nProvider } from "@/lib/i18n/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

const benefits = [
  {
    title: "Seamless Student Orientation",
    description: "New students navigate campus confidently from day one. Eliminate orientation week confusion and help every student find classrooms, labs, libraries, and services without relying on peer guides.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  },
  {
    title: "Open Days & Campus Tours",
    description: "Prospective students and families explore campus independently with photo-guided directions. Create a professional first impression that showcases your facilities at their best.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Multi-Building Campus Routing",
    description: "Guide students and visitors across interconnected campus buildings, between outdoor walkways and indoor corridors. Handle complex layouts that span multiple structures and floors.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Reduce Administrative Burden",
    description: "Front desk staff, security offices, and department receptionists handle fewer 'Where is Room X?' inquiries. Redirect administrative time toward higher-value student services.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Conference & Event Support",
    description: "Academic conferences, graduation ceremonies, athletic events, and guest lectures — help attendees navigate to the right venue, session room, and amenity without confusion.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Support International Students",
    description: "Multi-language navigation helps international students navigate campus in their preferred language. Visual photo-based directions transcend language barriers entirely.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const useCases = [
  "New student orientation — navigate to enrollment offices, dorm buildings, and campus services",
  "Class schedules — find classrooms across buildings when schedules change each semester",
  "Campus open days — self-guided tours for prospective students and families",
  "Academic conferences — attendees find session rooms, keynote halls, and networking areas",
  "Library & study spaces — navigate to specific floors, reading rooms, and booking desks",
  "Administrative services — guide students to financial aid, registrar, career services, and counseling",
];

export default function UniversitiesPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/80 via-white to-accent-50/60" />
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-primary-200/30 to-accent-200/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                For Universities &amp; Education
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.08]"
              >
                Welcome Every Student{" "}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  to Campus, Not a Maze.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed"
              >
                Indoor wayfinding built for the complexity of university campuses. Help students, visitors, and event attendees navigate multi-building environments with confidence — no app download or hardware required.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a href="/#contact" className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full hover:from-primary-600 hover:to-primary-700 shadow-xl shadow-primary-500/25 transition-all hover:-translate-y-0.5 text-center">
                  Request a Demo
                </a>
                <a href="/#deployment" className="px-8 py-4 text-base font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 border border-primary-100 rounded-full transition-all hover:-translate-y-0.5 text-center">
                  See Deployment Process
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                The Campus Wayfinding Challenge
              </h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                University campuses are inherently complex — buildings with inconsistent layouts, classes in unfamiliar halls, offices scattered across departments. Every semester brings new schedules, new buildings, and thousands of visitors who have never been on campus before.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { stat: "40%", label: "of new students report difficulty navigating campus in their first week" },
                { stat: "1000s", label: "of direction requests handled by front desk and security staff each semester" },
                { stat: "15 min", label: "average time lost per wayfinding failure during class transitions" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                How Mazely Transforms Campus Navigation
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center shadow-lg mb-5">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
                Common Use Cases in Higher Education
              </h2>
              <div className="space-y-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16 px-6 sm:px-12 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden relative">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "24px 24px" }} />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Start a Free Pilot on Your Campus
                </h2>
                <p className="mt-4 text-lg text-primary-100 max-w-xl mx-auto">
                  We&apos;ll deploy Mazely in one campus building at no cost. Full onboarding support and a 30-day analytics report included.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-full hover:bg-primary-50 shadow-xl transition-all hover:-translate-y-0.5">
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
