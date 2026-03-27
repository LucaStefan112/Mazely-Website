"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import { Locale } from "@/lib/i18n/translations";
import Image from "next/image";

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#admin", label: t.nav.admin },
    { href: "#contact", label: t.nav.contact },
  ];

  const locales: { code: Locale; label: string; flag: string }[] = [
    { code: "en", label: t.language.en, flag: "GB" },
    { code: "ro", label: t.language.ro, flag: "RO" },
    { code: "fr", label: t.language.fr, flag: "FR" },
    { code: "de", label: t.language.de, flag: "DE" },
  ];

  const flagEmoji = (code: string) => {
    return code
      .toUpperCase()
      .split("")
      .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
      .join("");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-primary-500/5 border-b border-primary-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/icon_transparent.png"
              alt="Mazely"
              width={36}
              height={36}
              className="transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Mazely
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50/50 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                onBlur={() => setTimeout(() => setLangOpen(false), 150)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50/50 transition-all"
                aria-label={t.language.select}
              >
                <span className="text-base">
                  {flagEmoji(
                    locales.find((l) => l.code === locale)?.flag || "GB"
                  )}
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1 w-44 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {locales.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLocale(l.code);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all ${
                          locale === l.code
                            ? "bg-primary-50 text-primary-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-base">{flagEmoji(l.flag)}</span>
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://app.mazely.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              {t.nav.goToApp}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex gap-2 px-4 pb-3">
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLocale(l.code);
                        setMobileOpen(false);
                      }}
                      className={`flex-1 py-2 text-center rounded-lg text-sm transition-all ${
                        locale === l.code
                          ? "bg-primary-100 text-primary-700 font-medium"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {flagEmoji(l.flag)}
                    </button>
                  ))}
                </div>
                <a
                  href="https://app.mazely.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                >
                  {t.nav.goToApp}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
