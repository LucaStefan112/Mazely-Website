"use client";

import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/icon_transparent.png"
                alt="Mazely"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Mazely
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t.footer.product}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  {t.footer.howItWorks}
                </a>
              </li>
              <li>
                <a href="#admin" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  {t.footer.admin}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  {t.footer.contact}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t.footer.contact}
            </h3>
            <a
              href="mailto:app@mazely.app"
              className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
            >
              app@mazely.app
            </a>
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
            for indoor navigation
          </p>
        </div>
      </div>
    </footer>
  );
}
