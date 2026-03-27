"use client";

import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Liquid background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/80 via-white to-accent-50/60" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-primary-200/40 to-primary-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, -40, 20, 0],
            y: [0, 30, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[0%] w-[600px] h-[600px] bg-gradient-to-bl from-accent-200/30 to-primary-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 20, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-gradient-to-tr from-primary-100/40 to-accent-100/30 rounded-full blur-3xl"
        />

        {/* Grid pattern overlay */}
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
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
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
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
              href="#contact"
              className="group px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full hover:from-primary-600 hover:to-primary-700 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              {t.hero.cta}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 text-base font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 border border-primary-100 rounded-full transition-all hover:-translate-y-0.5"
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>
        </motion.div>

        {/* Floating illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 sm:mt-20 relative"
        >
          {/* Glass card mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl border border-white/80 shadow-2xl shadow-primary-900/10 p-6 sm:p-8">
              {/* Mock browser bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 ml-3 h-8 bg-gray-100 rounded-lg flex items-center px-3">
                  <span className="text-xs text-gray-400">mazely.app</span>
                </div>
              </div>
              {/* Mock content */}
              <div className="grid grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 space-y-3 hidden sm:block">
                  <div className="h-8 bg-primary-100/60 rounded-lg flex items-center px-3">
                    <Image src="/icon_transparent.png" alt="" width={20} height={20} />
                    <div className="ml-2 h-3 w-12 bg-primary-200/60 rounded" />
                  </div>
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 rounded-lg flex items-center px-3 ${
                        i === 1
                          ? "bg-primary-500/10 border border-primary-200/50"
                          : "bg-gray-50"
                      }`}
                    >
                      <div
                        className={`h-2.5 rounded ${
                          i === 1 ? "w-16 bg-primary-300/60" : `w-${12 + i * 2} bg-gray-200/80`
                        }`}
                        style={{ width: i === 1 ? "4rem" : `${3 + i * 0.5}rem` }}
                      />
                    </div>
                  ))}
                </div>
                {/* Main area */}
                <div className="col-span-4 sm:col-span-3 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-32 bg-gray-200/60 rounded" />
                    <div className="h-8 w-24 bg-primary-100/60 rounded-lg" />
                  </div>
                  {/* Mock floor map */}
                  <div className="relative h-48 sm:h-64 bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-xl border border-gray-100 overflow-hidden">
                    {/* Grid */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    {/* Nodes */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-[20%] left-[15%] w-16 h-12 bg-primary-100 border-2 border-primary-300 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-[10px] font-medium text-primary-700">Room A</span>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute top-[20%] right-[20%] w-16 h-12 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-[10px] font-medium text-green-700">Room B</span>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-[25%] left-[40%] w-16 h-12 bg-amber-100 border-2 border-amber-300 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-[10px] font-medium text-amber-700">Room C</span>
                    </motion.div>
                    {/* Connections */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="22%" y1="35%" x2="65%" y2="35%" stroke="#0074d9" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
                      <line x1="48%" y1="35%" x2="48%" y2="65%" stroke="#0074d9" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
                    </svg>
                    {/* Pulse dot on path */}
                    <motion.div
                      animate={{
                        left: ["22%", "48%", "48%"],
                        top: ["32%", "32%", "58%"],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-3 h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
