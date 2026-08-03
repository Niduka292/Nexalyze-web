import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vector9 Technologies — AI-Powered Software Solutions",
  description:
    "Vector9 Technologies builds AI-powered SaaS products and enterprise software solutions. Creators of SupplyPulse — real-time supplier risk intelligence for modern businesses.",
  keywords: [
    "Vector9 Technologies",
    "AI software",
    "SaaS",
    "SupplyPulse",
    "supplier risk management",
    "enterprise software",
  ],
  authors: [{ name: "Vector9 Technologies" }],
  openGraph: {
    title: "Vector9 Technologies — AI-Powered Software Solutions",
    description:
      "Building intelligent software that solves real business problems. Creators of SupplyPulse.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector9 Technologies",
    description: "AI-powered SaaS products and enterprise software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon placeholder — replace with actual asset */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}