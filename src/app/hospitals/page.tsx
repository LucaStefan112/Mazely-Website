"use client";

import { I18nProvider } from "@/lib/i18n/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

const benefits = [
  {
    title: "Reduce Missed Appointments",
    description: "Patients who navigate confidently arrive on time. Mazely eliminates the confusion that causes late arrivals, reducing appointment backlogs and improving throughput across departments.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Improve Patient Satisfaction Scores",
    description: "Wayfinding is the first experience patients have at your facility. Eliminating navigation frustration directly improves HCAHPS scores and overall patient experience ratings.",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Free Clinical Staff from Directions",
    description: "Nurses, reception staff, and security personnel spend thousands of hours annually giving directions. Redirect that time to patient care and core responsibilities.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Support Accessibility Compliance",
    description: "Photo-based visual navigation supports visitors with cognitive disabilities, language barriers, and limited literacy. Accessible routing options account for mobility requirements.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Adapt Instantly to Changes",
    description: "When departments move, construction reroutes traffic, or new wings open — update digital directions in minutes. No reprinting signs, no outdated maps confusing patients.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Gain Actionable Analytics",
    description: "Understand visitor flow patterns, peak navigation times, most-searched departments, and common pain points. Use data to optimize signage, staffing, and facility layout.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const useCases = [
  "Emergency department — guide families to waiting areas and patient rooms",
  "Outpatient clinics — help patients find specific consultation rooms across floors",
  "Diagnostic centers — direct patients to radiology, lab, and imaging departments",
  "Multi-building campuses — navigate between hospital buildings, parking, and satellite clinics",
  "Visitor wayfinding — guide family members to patient wards, cafeterias, and amenities",
  "Staff onboarding — help new employees learn facility layout during orientation",
];

export default function HospitalsPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-50/80 via-white to-primary-50/60" />
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-rose-200/30 to-primary-200/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-sm font-medium mb-6"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                For Hospitals &amp; Healthcare
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.08]"
              >
                Patients Find Their Way.{" "}
                <span className="bg-gradient-to-r from-rose-500 to-primary-500 bg-clip-text text-transparent">
                  Staff Focus on Care.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed"
              >
                Indoor wayfinding built for the complexity of healthcare facilities. Reduce missed appointments, improve patient satisfaction, and free clinical staff from giving directions — with zero hardware and zero app downloads.
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
                The Wayfinding Challenge in Healthcare
              </h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Hospitals are among the most complex indoor environments. Patients arrive anxious, often unfamiliar with the facility, and need to navigate across departments, floors, and buildings — often under time pressure.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { stat: "30%", label: "of first-time hospital visitors struggle to find their destination" },
                { stat: "2.3x", label: "average direction requests per patient visit" },
                { stat: "1000s", label: "of staff hours spent annually giving wayfinding assistance" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-rose-500 to-primary-500 bg-clip-text text-transparent">
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
                How Mazely Transforms Hospital Wayfinding
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-primary-500 text-white flex items-center justify-center shadow-lg mb-5">
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
                Common Use Cases in Healthcare
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
                  Start a Free Pilot at Your Hospital
                </h2>
                <p className="mt-4 text-lg text-primary-100 max-w-xl mx-auto">
                  We&apos;ll deploy Mazely in one building or floor at no cost. Full onboarding support and a 30-day analytics report included.
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
