import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo — Mazely Indoor Wayfinding",
  description:
    "Book a personalized demo of the Mazely indoor navigation platform. See how hospitals, universities, and public institutions use photo-guided wayfinding to improve visitor experience.",
  keywords: [
    "mazely demo",
    "indoor navigation demo",
    "wayfinding platform demo",
    "hospital navigation demo",
    "university wayfinding demo",
    "enterprise indoor maps demo",
  ],
  openGraph: {
    title: "Request a Demo — Mazely Indoor Wayfinding Platform",
    description:
      "See Mazely in action. Book a 20-minute demo and learn how indoor wayfinding can transform visitor experience at your institution.",
    url: "https://mazely.app/demo/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mazely — Request a Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Demo — Mazely Indoor Wayfinding",
    description:
      "Book a personalized walkthrough of the Mazely platform for your hospital, university, or public institution.",
  },
  alternates: {
    canonical: "https://mazely.app/demo/",
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
