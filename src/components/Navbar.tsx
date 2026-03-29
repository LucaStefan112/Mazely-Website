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
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { href: "/#features", label: t.nav.features },
    { href: "/#how-it-works", label: t.nav.howItWorks },
    { href: "/#deployment", label: t.nav.deployment },
    { href: "/#security", label: t.nav.security },
    { href: "/#contact", label: t.nav.contact },
  ];

  const solutionLinks = [
    { href: "/universities/", label: t.nav.universities, icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" },
    { href: "/hospitals/", label: t.nav.hospitals, icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  ];

  const locales: { code: Locale; label: string; flag: string }[] = [
    { code: "en", label: t.language.en, flag: "GB" },
    { code: "ro", label: t.language.ro, flag: "RO" },
    { code: "fr", label: t.language.fr, flag: "FR" },
    { code: "de", label: t.language.de, flag: "DE" },
  ];

  const flagEmoji = (code: string) =>
    code.toUpperCase().split("").map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join("");

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
          <a href="/" className="flex items-center gap-2.5 group">
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
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onBlur={() => setTimeout(() => setSolutionsOpen(false), 150)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50/50 transition-all"
              >
                {t.nav.solutions}
                <svg className={`w-3.5 h-3.5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-56 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {solutionLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all"
                      >
                        <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                        </svg>
                        <span className="font-medium">{link.label}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
                  {flagEmoji(locales.find((l) => l.code === locale)?.flag || "GB")}
                </span>
                <svg className={`w-3.5 h-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                        onClick={() => { setLocale(l.code); setLangOpen(false); }}
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
              className="px-5 py-2.5 text-sm font-semibold text-primary-600 border border-primary-200 bg-primary-50/50 hover:bg-primary-100 rounded-full transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              {t.nav.goToApp}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              {t.nav.requestDemo}
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
              {/* Solutions section */}
              <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {t.nav.solutions}
              </div>
              {solutionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-gray-100 my-2" />

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
                      onClick={() => { setLocale(l.code); setMobileOpen(false); }}
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
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-primary-600 border border-primary-200 bg-primary-50/50 rounded-full mb-2"
                >
                  {t.nav.goToApp}
                </a>
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                >
                  {t.nav.requestDemo}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
