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
    default: "Mazely — Indoor Wayfinding Infrastructure for Institutions",
    template: "%s | Mazely",
  },
  description:
    "Enterprise indoor navigation platform for hospitals, universities, and public institutions. Reduce visitor confusion, improve satisfaction, and gain actionable analytics — no app download or hardware required.",
  keywords: [
    "indoor navigation",
    "hospital wayfinding",
    "university campus navigation",
    "enterprise indoor maps",
    "institutional wayfinding",
    "QR navigation",
    "building navigation platform",
    "accessibility compliance",
    "visitor experience",
    "indoor wayfinding",
    "patient navigation",
    "campus wayfinding",
    "digital signage",
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
    title: "Mazely — Indoor Wayfinding for Hospitals & Universities",
    description:
      "Purpose-built indoor navigation for institutions. No app download, no hardware — visitors scan a QR code and follow photo-guided directions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mazely — Indoor Wayfinding Infrastructure for Institutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazely — Indoor Wayfinding for Institutions",
    description:
      "Enterprise indoor navigation for hospitals, universities, and public buildings. No app, no hardware — visitors scan and navigate.",
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
                "Enterprise indoor wayfinding platform for hospitals, universities, and public institutions. Reduce visitor confusion and gain actionable navigation analytics.",
              url: "https://mazely.app",
              image: "https://mazely.app/logo_transparent.png",
              author: {
                "@type": "Organization",
                name: "Mazely",
                url: "https://mazely.app",
                email: "enterprise@mazely.app",
                logo: "https://mazely.app/icon_transparent.png",
                sameAs: [
                  "https://www.linkedin.com/company/mazely-app",
                ],
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free pilot program for qualifying institutions",
              },
              featureList: [
                "Photo-guided step-by-step navigation",
                "QR code scanning — no app download required",
                "Multi-floor and multi-building support",
                "Intelligent pathfinding algorithms",
                "Multi-language support",
                "Real-time usage analytics dashboard",
                "Interactive floor plan designer",
                "Enterprise administration tools",
                "Privacy by design — no visitor data collected",
                "Role-based access control",
              ],
              audience: {
                "@type": "Audience",
                audienceType: "Hospitals, Universities, Government Buildings, Public Institutions",
              },
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
              description: "Enterprise indoor wayfinding platform for institutions",
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
                    text: "Mazely is an enterprise indoor wayfinding platform designed for hospitals, universities, and public institutions. Visitors scan a QR code and receive step-by-step photo-guided directions on their smartphone — no app download or hardware required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Mazely work without GPS or Bluetooth?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mazely uses a mapped network of rooms, corridors, and checkpoints with real photographs to calculate optimal routes. Visitors scan a QR code, select their destination, and follow visual directions. No GPS, Bluetooth, or special hardware needed.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Mazely require visitors to download an app?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Mazely is entirely web-based. Visitors scan a QR code with their smartphone camera and navigate directly in their browser. No app download, no account creation, no registration required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Mazely suitable for hospitals and healthcare facilities?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Mazely is purpose-built for complex institutional facilities including hospitals. It helps reduce missed appointments, improve patient satisfaction scores, support accessibility compliance, and free clinical staff from giving directions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does deployment take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Typical deployment takes 2-4 weeks from discovery to go-live. This includes facility mapping, photo capture, QR code placement, and staff training. No hardware installation or network changes are required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Mazely collect visitor personal data?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Mazely is designed with privacy at its foundation. Navigation sessions are completely anonymous — no personal data is collected, no accounts are required, and no tracking cookies are used. All facility data belongs to your institution.",
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
