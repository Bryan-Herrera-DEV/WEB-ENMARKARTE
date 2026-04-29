import type { MetadataRoute } from "next";

import { galleryArtworks } from "@/lib/gallery-data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/nosotros", "/servicios", "/galeria", "/contacto"] as const;
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
    images:
      route === "/galeria"
        ? galleryArtworks.map((artwork) => `${siteConfig.url}${artwork.imageSrc}`)
        : undefined,
  }));

  const artworkEntries: MetadataRoute.Sitemap = galleryArtworks.map((artwork) => ({
    url: `${siteConfig.url}/galeria?img=${encodeURIComponent(artwork.imageName)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
    images: [`${siteConfig.url}${artwork.imageSrc}`],
  }));

  return [...staticEntries, ...artworkEntries];
}
