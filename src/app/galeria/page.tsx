import type { Metadata } from "next";

import { ArtGallerySection } from "@/components/sections/galeria/art-gallery-section";
import { galleryArtworks, getArtworkByImageName, getCategoryFromSearchParam } from "@/lib/gallery-data";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type SearchParams = Record<string, string | string[] | undefined>;
type PageProps = {
  searchParams?: Promise<SearchParams>;
};

function getSingleParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}

async function resolveSearchParams(searchParams?: Promise<SearchParams>) {
  return (await searchParams) ?? {};
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await resolveSearchParams(searchParams);
  const imageName = getSingleParam(params.img);
  const selectedArtwork = getArtworkByImageName(imageName);

  if (!selectedArtwork) {
    return buildPageMetadata({
      title: "Galeria",
      description:
        "Explora una seleccion visual del trabajo de Enmarkarte con filtro por categoria y vista individual SEO para cada obra.",
      path: "/galeria",
    });
  }

  const canonicalPath = `/galeria?img=${encodeURIComponent(selectedArtwork.imageName)}`;
  const absoluteCanonical = `${siteConfig.url}${canonicalPath}`;
  const absoluteImage = `${siteConfig.url}${selectedArtwork.imageSrc}`;

  return {
    title: selectedArtwork.seoTitle,
    description: selectedArtwork.seoDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: absoluteCanonical,
      title: selectedArtwork.seoTitle,
      description: selectedArtwork.seoDescription,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 1200,
          alt: selectedArtwork.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: selectedArtwork.seoTitle,
      description: selectedArtwork.seoDescription,
      images: [absoluteImage],
    },
  };
}

export default async function GaleriaPage({ searchParams }: PageProps) {
  const params = await resolveSearchParams(searchParams);
  const selectedCategory = getCategoryFromSearchParam(getSingleParam(params.cat));
  const selectedArtwork = getArtworkByImageName(getSingleParam(params.img));

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: selectedArtwork ? selectedArtwork.seoTitle : "Galeria de obras Enmarkarte",
    description: selectedArtwork
      ? selectedArtwork.seoDescription
      : "Galeria de obras con miniaturas, filtros por tecnica y vistas individuales optimizadas para SEO.",
    url: selectedArtwork
      ? `${siteConfig.url}/galeria?img=${encodeURIComponent(selectedArtwork.imageName)}`
      : `${siteConfig.url}/galeria`,
    mainEntity: selectedArtwork
      ? {
          "@type": "VisualArtwork",
          name: selectedArtwork.nombre,
          image: `${siteConfig.url}${selectedArtwork.imageSrc}`,
          description: selectedArtwork.seoDescription,
          artMedium: selectedArtwork.tecnicas.join(", "),
          artist: {
            "@type": "Person",
            name: selectedArtwork.autor || "No especificado",
          },
        }
      : galleryArtworks.slice(0, 8).map((artwork) => ({
          "@type": "VisualArtwork",
          name: artwork.nombre,
          image: `${siteConfig.url}${artwork.imageSrc}`,
          description: artwork.seoDescription,
        })),
  };

  return (
    <main className="pt-20">
      <ArtGallerySection artworks={galleryArtworks} selectedCategory={selectedCategory} selectedArtwork={selectedArtwork} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema),
        }}
      />
    </main>
  );
}
