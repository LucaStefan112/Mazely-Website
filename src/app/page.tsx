"use client";

import { I18nProvider } from "@/lib/i18n/context";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import Deployment from "@/components/Deployment";
import AdminShowcase from "@/components/AdminShowcase";
import Security from "@/components/Security";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Industries />
        <HowItWorks />
        {/* Shared dark container for seamless background between sections */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
          <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <Deployment />
          <AdminShowcase />
        </div>
        <Security />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
