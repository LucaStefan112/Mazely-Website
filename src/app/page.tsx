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
        <Deployment />
        <AdminShowcase />
        <Security />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
