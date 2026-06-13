import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Serif } from "next/font/google";

import { FloatingWhatsAppButton } from "@/components/layout/floating-whatsapp-button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { images } from "@/lib/assets";
import { siteConfig } from "@/lib/site";

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
  applicationName: siteConfig.shortName,
  title: {
    default: "Enmarkarte – De Chávez Santamaría | Enmarcado Profesional",
    template: "%s | Enmarkarte",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Arte y enmarcado profesional",
  keywords: [
    "enmarcado profesional",
    "restauración de obras",
    "taller de marcos",
    "conservación de arte",
    "marqueria Quito",
    "enmarcar cuadros Quito",
    "marcos para cuadros Quito",
    "enmarcar cuadros cerca de mi Quito",
    "enmarcado de cuadros Quito",
    "Quito",
    "Ecuador",
    "Enmarkarte",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
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
  other: {
    "geo.region": "EC-P",
    "geo.placename": "Quito",
    "geo.position": `${siteConfig.latitude};${siteConfig.longitude}`,
    ICBM: `${siteConfig.latitude}, ${siteConfig.longitude}`,
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
  image: `${siteConfig.url}/logo.png`,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  hasMap: siteConfig.mapUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Venezuela 13-70",
    postalCode: "170130",
    addressLocality: "Quito",
    addressRegion: "Pichincha",
    addressCountry: "EC",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.latitude,
    longitude: siteConfig.longitude,
  },
  sameAs: siteConfig.socialLinks.map((item) => item.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="light">
      <body className={`${manrope.variable} ${notoSerif.variable} min-h-screen bg-surface text-on-surface antialiased`}>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <FloatingWhatsAppButton />
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
