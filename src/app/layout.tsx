import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mazely.app"),
  title: {
    default: "Mazely — Indoor Building Navigation | Find Your Way",
    template: "%s | Mazely",
  },
  description:
    "Map floors, connect rooms, and guide people through buildings with step-by-step visual navigation. The smart indoor wayfinding solution for any building.",
  keywords: [
    "indoor navigation",
    "building navigation",
    "wayfinding",
    "floor mapping",
    "indoor maps",
    "QR navigation",
    "smart building",
    "room finder",
    "indoor wayfinding",
    "building map",
    "floor plan navigation",
    "visual navigation",
    "step by step directions",
    "indoor positioning",
  ],
  authors: [{ name: "Mazely" }],
  creator: "Mazely",
  publisher: "Mazely",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ro_RO", "fr_FR", "de_DE"],
    url: "https://mazely.app",
    siteName: "Mazely",
    title: "Mazely — Find Your Way Inside Any Building",
    description:
      "Step-by-step visual navigation for any building. Map floors, connect rooms, and help people find their way indoors.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mazely — Indoor Building Navigation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazely — Indoor Building Navigation",
    description:
      "Map floors, connect rooms, and guide people with step-by-step visual directions. No GPS needed.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://mazely.app",
    languages: {
      en: "https://mazely.app",
      ro: "https://mazely.app?lang=ro",
      fr: "https://mazely.app?lang=fr",
      de: "https://mazely.app?lang=de",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Mazely",
              applicationCategory: "NavigationApplication",
              operatingSystem: "Web",
              description:
                "Indoor building navigation platform — map floors, connect rooms, and guide people with step-by-step visual directions.",
              url: "https://mazely.app",
              image: "https://mazely.app/logo_transparent.png",
              author: {
                "@type": "Organization",
                name: "Mazely",
                url: "https://mazely.app",
                email: "app@mazely.app",
                logo: "https://mazely.app/icon_transparent.png",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Visual step-by-step navigation",
                "QR code scanning",
                "Multi-floor support",
                "Smart pathfinding",
                "Multi-language support",
                "Usage analytics",
                "Interactive floor map designer",
                "Building management tools",
              ],
              inLanguage: ["en", "ro", "fr", "de"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mazely",
              url: "https://mazely.app",
              description: "Indoor building navigation platform",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://mazely.app?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Mazely?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mazely is an indoor building navigation platform that helps people find their way inside complex buildings using step-by-step visual directions with real photos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does indoor navigation work without GPS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mazely uses a mapped network of rooms, corridors, and checkpoints to calculate the best route. Building administrators map the space with photos, and visitors follow visual directions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What languages does Mazely support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mazely currently supports English, Romanian, French, and German, with more languages coming soon.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I set up Mazely for my building?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Map your floors using the interactive designer, connect rooms and corridors, add walkthrough images, then share QR codes or links for visitors to navigate.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
