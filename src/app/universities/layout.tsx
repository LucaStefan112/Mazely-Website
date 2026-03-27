import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor Wayfinding for Universities & Campuses — Mazely",
  description:
    "Help students, visitors, and event attendees navigate multi-building university campuses with confidence. Enterprise indoor navigation — no app download, no hardware.",
  keywords: [
    "university campus navigation",
    "campus wayfinding",
    "university indoor navigation",
    "student orientation navigation",
    "campus open day wayfinding",
    "multi-building campus routing",
    "university visitor experience",
    "higher education wayfinding",
    "campus QR navigation",
    "academic conference navigation",
  ],
  openGraph: {
    title: "Mazely for Universities — Campus Wayfinding That Works",
    description:
      "Students and visitors scan a QR code and follow photo-guided directions across campus. No app, no hardware — confident navigation from day one.",
    url: "https://mazely.app/universities/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mazely — Indoor Wayfinding for Universities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazely for Universities — Campus Wayfinding",
    description:
      "Welcome every student to campus, not a maze. Photo-guided indoor navigation across multi-building environments.",
  },
  alternates: {
    canonical: "https://mazely.app/universities/",
  },
};

export default function UniversitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
