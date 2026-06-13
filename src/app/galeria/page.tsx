import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

import { ArtGallerySection } from "@/components/sections/galeria/art-gallery-section";
import {
  galleryArtworks,
  galleryProductOffer,
  getArtworkByImageName,
  getArtworkCanonicalPath,
  getArtworkProductName,
  getCategoryFromSearchParam,
  type GalleryArtwork,
} from "@/lib/gallery-data";
import { buildPageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

type SearchParams = Record<string, string | string[] | undefined>;
type PageProps = {
  searchParams?: Promise<SearchParams>;
};

function getSingleParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}

function formatCategoryLabel(category: string) {
  if (category === "todas") return "todos";
  return category;
}

function getCategoryCanonicalPath(category: string) {
  return category === "todas" ? "/galeria" : `/galeria?cat=${encodeURIComponent(category)}`;
}

function getArtworkAbsoluteUrl(artwork: GalleryArtwork) {
  return `${siteConfig.url}${getArtworkCanonicalPath(artwork)}`;
}

function getArtworkSeoDescription(artwork: GalleryArtwork) {
  return `${getArtworkProductName(artwork)} en Quito. Tecnica: ${artwork.tecnicas.join(", ")}. Autor: ${artwork.autor || "Enmarkarte"}. Dimensiones: ${artwork.dimensiones || "a confirmar"}. Marco: ${artwork.marco || "a confirmar"}. Compra o cotiza por WhatsApp.`;
}

function buildProductSchema(artwork: GalleryArtwork) {
  const artworkUrl = getArtworkAbsoluteUrl(artwork);
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    url: artworkUrl,
    priceCurrency: galleryProductOffer.priceCurrency,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "ArtGallery",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  if (typeof artwork.precio === "number") {
    offer.price = artwork.precio.toFixed(2);
  } else {
    offer.priceSpecification = {
      "@type": "PriceSpecification",
      priceCurrency: galleryProductOffer.priceCurrency,
      description: "Precio a consultar por WhatsApp en Quito",
    };
  }

  return {
    "@type": "Product",
    additionalType: "https://schema.org/VisualArtwork",
    name: getArtworkProductName(artwork),
    image: `${siteConfig.url}${artwork.imageSrc}`,
    description: getArtworkSeoDescription(artwork),
    sku: artwork.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName,
    },
    category: `Cuadros ${artwork.tecnicas.join(", ")} en Quito`,
    material: artwork.tecnicas.join(", "),
    url: artworkUrl,
    offers: offer,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Tecnica", value: artwork.tecnicas.join(", ") },
      { "@type": "PropertyValue", name: "Autor", value: artwork.autor || "Enmarkarte" },
      { "@type": "PropertyValue", name: "Dimensiones", value: artwork.dimensiones || "A confirmar" },
      { "@type": "PropertyValue", name: "Marco", value: artwork.marco || "A confirmar" },
    ],
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Comprar por WhatsApp",
      target: buildWhatsAppUrl(`Hola, quiero comprar o cotizar ${getArtworkProductName(artwork)} en Quito. Enlace: ${artworkUrl}`),
    },
  };
}

async function resolveSearchParams(searchParams?: Promise<SearchParams>) {
  return (await searchParams) ?? {};
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await resolveSearchParams(searchParams);
  const imageName = getSingleParam(params.img);
  const selectedCategory = getCategoryFromSearchParam(getSingleParam(params.cat));
  const selectedArtwork = getArtworkByImageName(imageName);

  if (!selectedArtwork) {
    const categoryLabel = formatCategoryLabel(selectedCategory);

    return buildPageMetadata({
      title: selectedCategory === "todas" ? "Galeria de cuadros en Quito" : `Cuadros ${categoryLabel} en Quito`,
      description:
        selectedCategory === "todas"
          ? "Explora cuadros en Quito de Enmarkarte con enlaces canonicos, compra por WhatsApp, marqueria y enmarcado de cuadros en Quito."
          : `Explora cuadros ${categoryLabel} en Quito con compra por WhatsApp, marcos para cuadros Quito y enmarcado de cuadros en Quito.`,
      path: getCategoryCanonicalPath(selectedCategory),
    });
  }

  const canonicalPath = getArtworkCanonicalPath(selectedArtwork);
  const absoluteCanonical = `${siteConfig.url}${canonicalPath}`;
  const absoluteImage = `${siteConfig.url}${selectedArtwork.imageSrc}`;
  const productTitle = `${getArtworkProductName(selectedArtwork)} en Quito | ${selectedArtwork.tecnicas.join(", ")}`;
  const productDescription = getArtworkSeoDescription(selectedArtwork);

  return {
    title: productTitle,
    description: productDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: absoluteCanonical,
      title: productTitle,
      description: productDescription,
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
      title: productTitle,
      description: productDescription,
      images: [absoluteImage],
    },
  };
}

export default async function GaleriaPage({ searchParams }: PageProps) {
  const params = await resolveSearchParams(searchParams);
  const rawImageName = getSingleParam(params.img);
  const rawCategory = getSingleParam(params.cat);
  const selectedCategory = getCategoryFromSearchParam(getSingleParam(params.cat));
  const selectedArtwork = getArtworkByImageName(rawImageName);
  const listedArtworks =
    selectedCategory === "todas"
      ? galleryArtworks
      : galleryArtworks.filter((artwork) => artwork.tecnicas.some((tecnica) => tecnica.toLowerCase() === selectedCategory.toLowerCase()));

  if (selectedArtwork && (rawCategory || rawImageName !== selectedArtwork.imageName)) {
    permanentRedirect(getArtworkCanonicalPath(selectedArtwork));
  }

  const pageUrl = selectedArtwork
    ? getArtworkAbsoluteUrl(selectedArtwork)
    : `${siteConfig.url}${getCategoryCanonicalPath(selectedCategory)}`;

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: selectedArtwork
      ? getArtworkProductName(selectedArtwork)
      : selectedCategory === "todas"
        ? "Galeria de cuadros en Quito"
        : `Cuadros ${formatCategoryLabel(selectedCategory)} en Quito`,
    description: selectedArtwork
      ? getArtworkSeoDescription(selectedArtwork)
      : "Galeria de cuadros en Quito con miniaturas, filtros por tecnica, productos con WhatsApp y enlaces internos canonicos.",
    url: pageUrl,
    mainEntity: selectedArtwork
      ? buildProductSchema(selectedArtwork)
      : {
          "@type": "ItemList",
          itemListElement: listedArtworks.map((artwork, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: getArtworkAbsoluteUrl(artwork),
            name: getArtworkProductName(artwork),
            item: buildProductSchema(artwork),
          })),
        },
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
