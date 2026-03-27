import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor Wayfinding for Hospitals & Healthcare — Mazely",
  description:
    "Reduce missed appointments, improve patient satisfaction scores, and free clinical staff from giving directions. Enterprise indoor navigation for hospitals — no app download, no hardware.",
  keywords: [
    "hospital wayfinding",
    "patient navigation",
    "hospital indoor navigation",
    "healthcare wayfinding solution",
    "reduce missed appointments",
    "HCAHPS improvement",
    "hospital visitor experience",
    "medical campus navigation",
    "ADA compliance wayfinding",
    "QR code hospital navigation",
  ],
  openGraph: {
    title: "Mazely for Hospitals — Indoor Wayfinding That Improves Patient Experience",
    description:
      "Patients scan a QR code and follow photo-guided directions to any department. No app, no hardware — just confident navigation across your hospital campus.",
    url: "https://mazely.app/hospitals/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mazely — Indoor Wayfinding for Hospitals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazely for Hospitals — Indoor Wayfinding",
    description:
      "Reduce missed appointments and improve patient satisfaction with photo-guided indoor navigation. No app download required.",
  },
  alternates: {
    canonical: "https://mazely.app/hospitals/",
  },
};

export default function HospitalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
