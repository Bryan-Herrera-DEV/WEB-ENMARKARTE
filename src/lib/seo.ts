import type { Metadata } from "next";

import { images } from "@/lib/assets";
import { siteConfig } from "@/lib/site";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({ title: tt, description, path }: SeoOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const absoluteUrl = `${siteConfig.url}${canonical}`;

  const title = tt + ` | Enmarcaciones Enmarkarte`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl,
      siteName: siteConfig.name,
      title,
      description,
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
      title,
      description,
      images: [images.hero],
    },
  };
}
