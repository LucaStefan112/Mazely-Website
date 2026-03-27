"use client";

import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/icon_transparent.png" alt="Mazely" width={32} height={32} />
              <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Mazely
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-4">
              {t.footer.description}
            </p>
            <a
              href={`mailto:${t.contact.email}`}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              {t.contact.email}
            </a>

            {/* Social */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/mazely-app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary-50 text-gray-400 hover:text-primary-600 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t.footer.product}
            </h3>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.features}</a></li>
              <li><a href="/#how-it-works" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.howItWorks}</a></li>
              <li><a href="/#deployment" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.deployment}</a></li>
              <li><a href="/#admin" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.admin}</a></li>
              <li><a href="/#security" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.security}</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t.footer.solutions}
            </h3>
            <ul className="space-y-3">
              <li><a href="/hospitals/" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.hospitals}</a></li>
              <li><a href="/universities/" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.universities}</a></li>
              <li><a href="/#industries" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.government}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li><a href="/mazely-brochure.html" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-primary-600 transition-colors flex items-center gap-1.5">Brochure <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
              <li><a href="/mazely-pitch-deck.html" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-primary-600 transition-colors flex items-center gap-1.5">Pitch Deck <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
              <li><a href="/mazely-email-templates.html" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-primary-600 transition-colors flex items-center gap-1.5">Email Templates <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              <li><a href="/#contact" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.contact}</a></li>
              <li><a href="/#security" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.security}</a></li>
              <li><a href="/#security" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.footer.privacy}</a></li>
              <li><a href="/demo/" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{t.nav.requestDemo}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {year} Mazely. {t.footer.rights}
          </p>
          <p className="text-sm text-gray-400">
            {t.footer.madeWith}{" "}
            <span className="text-red-400" aria-label="love">&#9829;</span>{" "}
            for institutional wayfinding
          </p>
        </div>
      </div>
    </footer>
  );
}
