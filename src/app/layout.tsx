import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Serif } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { images } from "@/lib/assets";
import { siteConfig } from "@/lib/site";

import "material-symbols/outlined.css";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  display: "swap",
  variable: "--font-body",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-headline",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Enmarkarte – De Chávez Santamaría | Enmarcado Profesional",
    template: "%s | Enmarkarte",
  },
  description: siteConfig.description,
  keywords: [
    "enmarcado profesional",
    "restauración de obras",
    "taller de marcos",
    "conservación de arte",
    "Ciudad de México",
    "Enmarkarte",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "Enmarkarte – De Chávez Santamaría | Enmarcado Profesional",
    description: siteConfig.description,
    images: [
      {
        url: images.hero,
        width: 1200,
        height: 630,
        alt: "Enmarkarte - enmarcado profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enmarkarte – De Chávez Santamaría | Enmarcado Profesional",
    description: siteConfig.description,
    images: [images.hero],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9f9f9",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  name: siteConfig.name,
  description: siteConfig.description,
  foundingDate: "1973",
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle de la Artesanía 45",
    addressLocality: "Ciudad de México",
    addressRegion: "CDMX",
    addressCountry: "MX",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="light">
      <body className={`${manrope.variable} ${notoSerif.variable} min-h-screen bg-surface text-on-surface antialiased`}>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
