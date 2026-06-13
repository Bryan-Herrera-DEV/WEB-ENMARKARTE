import Image from "next/image";
import Link from "next/link";

import {
  galleryConfig,
  getArtworkCanonicalPath,
  getArtworkPriceLabel,
  getArtworkProductName,
  type GalleryArtwork,
} from "@/lib/gallery-data";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type ArtGallerySectionProps = {
  artworks: GalleryArtwork[];
  selectedCategory: string;
  selectedArtwork?: GalleryArtwork;
};

function buildGalleryHref(category: string, imageName?: string) {
  if (imageName) {
    return `/galeria?img=${encodeURIComponent(imageName)}`;
  }

  const params = new URLSearchParams();

  if (category !== "todas") {
    params.set("cat", category);
  }

  const query = params.toString();
  return query ? `/galeria?${query}` : "/galeria";
}

function formatCategoryLabel(category: string) {
  if (category === "todas") return "Todas";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function getArtworkFullUrl(artwork: GalleryArtwork) {
  return `${siteConfig.url}${getArtworkCanonicalPath(artwork)}`;
}

function getArtworkDetailTitle(artwork: GalleryArtwork) {
  const productName = getArtworkProductName(artwork);
  const tecnica = artwork.tecnicas.join(", ");
  const autor = artwork.autor || "autor Enmarkarte";
  const dimensiones = artwork.dimensiones || "dimensiones a confirmar";
  const marco = artwork.marco || "sin marco especificado";

  return `${productName}: tecnica ${tecnica}, autor ${autor}, dimensiones ${dimensiones}, marco ${marco}`;
}

function getRelatedArtworks(artworks: GalleryArtwork[], selectedArtwork: GalleryArtwork) {
  const sameTechnique = artworks.filter(
    (artwork) =>
      artwork.id !== selectedArtwork.id && artwork.tecnicas.some((tecnica) => selectedArtwork.tecnicas.includes(tecnica)),
  );
  const fallback = artworks.filter((artwork) => artwork.id !== selectedArtwork.id && !sameTechnique.includes(artwork));

  return [...sameTechnique, ...fallback].slice(0, 6);
}

export function ArtGallerySection({ artworks, selectedCategory, selectedArtwork }: ArtGallerySectionProps) {
  const visibleArtworks =
    selectedCategory === "todas"
      ? artworks
      : artworks.filter((artwork) => artwork.tecnicas.some((tecnica) => tecnica.toLowerCase() === selectedCategory.toLowerCase()));

  const categories = ["todas", ...galleryConfig.tecnicas];
  const closeModalHref = buildGalleryHref(selectedCategory);
  const categoryLabel = formatCategoryLabel(selectedCategory);
  const galleryTitle = selectedCategory === "todas" ? "Galeria de cuadros en Quito" : `Cuadros ${categoryLabel} en Quito`;
  const relatedArtworks = selectedArtwork ? getRelatedArtworks(artworks, selectedArtwork) : [];
  const selectedBuyHref = selectedArtwork
    ? buildWhatsAppUrl(
        `Hola, quiero comprar o cotizar ${getArtworkProductName(selectedArtwork)} en Quito. Enlace: ${getArtworkFullUrl(selectedArtwork)}`,
      )
    : siteConfig.whatsappUrl;

  return (
    <section className="relative bg-surface-container-lowest px-6 pb-20 pt-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 font-label text-xs uppercase tracking-[0.3em] text-primary">Coleccion Enmarkarte</p>
          <h1 className="font-headline text-4xl leading-tight text-on-surface md:text-5xl">{galleryTitle}</h1>
          <p className="mt-4 text-sm text-on-surface/75 md:text-base">
            Selecciona una categoria para filtrar cuadros disponibles, ver detalles de producto y solicitar compra por WhatsApp.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-on-surface/70">
            Enmarkarte conecta cada cuadro con servicios de marqueria en Quito, enmarcar cuadros en Quito, marcos para cuadros Quito,
            enmarcar cuadros cerca de mi en Quito y enmarcado de cuadros en Quito.
          </p>
        </header>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory.toLowerCase() === category.toLowerCase();

            return (
              <Link
                key={category}
                href={buildGalleryHref(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "border-primary bg-primary text-on-primary"
                    : "border-outline/40 bg-white text-on-surface hover:border-primary hover:text-primary",
                )}
              >
                {formatCategoryLabel(category)}
              </Link>
            );
          })}
        </div>

        {visibleArtworks.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {visibleArtworks.map((artwork) => (
                <Link
                  key={artwork.id}
                  href={buildGalleryHref(selectedCategory, artwork.imageName)}
                  className="group block overflow-hidden border border-outline/30 bg-surface-container-low"
                >
                  <figure className="relative aspect-square">
                    <Image
                      src={artwork.imageSrc}
                      alt={artwork.alt}
                      fill
                      quality={80}
                      sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 48vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </figure>
                  <div className="border-t border-outline/20 px-3 py-2">
                    <h2 className="truncate text-sm font-semibold text-on-surface">{getArtworkProductName(artwork)}</h2>
                    <p className="mt-1 truncate text-xs text-on-surface/60">
                      {artwork.tecnicas.join(", ")} en Quito - {getArtworkPriceLabel(artwork)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <nav className="mt-12 border border-outline/30 bg-white p-5 hidden" aria-label="Enlaces directos a cuadros">
              <h2 className="font-headline text-2xl leading-tight text-on-surface">Enlaces completos a cuadros en Quito</h2>
              <p className="mt-2 text-sm leading-relaxed text-on-surface/70">
                Referencias internas para ver otros cuadros y distribuir autoridad SEO hacia cada producto de la galeria.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {visibleArtworks.map((artwork) => {
                  const artworkUrl = getArtworkFullUrl(artwork);

                  return (
                    <Link
                      key={`link-${artwork.id}`}
                      href={artworkUrl}
                      className="block border border-outline/20 bg-surface-container-low px-3 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
                    >
                      <span className="block font-semibold text-on-surface">{getArtworkProductName(artwork)}</span>
                      <span className="mt-1 block break-all text-xs text-on-surface/60">{artworkUrl}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </>
        ) : (
          <p className="border border-dashed border-outline/50 bg-white px-4 py-6 text-sm text-on-surface/80">
            No hay obras para esta categoria.
          </p>
        )}
      </div>

      {selectedArtwork ? (
        <div className="fixed inset-0 z-50 bg-black/70 p-4 md:p-6" role="dialog" aria-modal="true" aria-label={selectedArtwork.nombre}>
          <Link href={closeModalHref} aria-label="Cerrar popup" className="absolute inset-0" />

          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden border border-white/15 bg-[#101214] text-white md:flex-row">
            <div className="relative h-[44vh] bg-black md:h-full md:flex-1">
              <Image
                src={selectedArtwork.imageSrc}
                alt={selectedArtwork.alt}
                fill
                priority
                quality={90}
                sizes="(min-width: 768px) 68vw, 100vw"
                className="object-contain"
              />
            </div>

            <aside className="relative w-full overflow-y-auto border-t border-white/10 bg-[#171a1f] p-5 md:w-[360px] md:border-l md:border-t-0 md:p-7">
              <Link
                href={closeModalHref}
                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:text-white"
                aria-label="Cerrar popup"
              >
                ×
              </Link>

              <p className="mb-3 pr-8 text-xs uppercase tracking-[0.2em] text-white/70">Producto seleccionado</p>
              <h2 className="font-headline text-2xl leading-tight">{getArtworkDetailTitle(selectedArtwork)}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                {selectedArtwork.seoDescription} {getArtworkProductName(selectedArtwork)} disponible en Quito para compra o cotizacion por
                WhatsApp.
              </p>

              <div className="mt-6 border border-white/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Precio</p>
                <p className="mt-2 text-2xl font-bold text-white">{getArtworkPriceLabel(selectedArtwork)}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  Confirma disponibilidad, forma de pago y retiro o envio desde Quito.
                </p>
                <Link
                  href={selectedBuyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center bg-primary px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-primary transition-transform hover:scale-[0.98]"
                >
                  Comprar por WhatsApp
                </Link>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-white/60">Tecnica</dt>
                  <dd className="mt-1 text-white">{selectedArtwork.tecnicas.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-white/60">Autor</dt>
                  <dd className="mt-1 text-white">{selectedArtwork.autor || "No especificado"}</dd>
                </div>
                <div>
                  <dt className="text-white/60">Dimensiones</dt>
                  <dd className="mt-1 text-white">{selectedArtwork.dimensiones || "No especificadas"}</dd>
                </div>
                <div>
                  <dt className="text-white/60">Marco</dt>
                  <dd className="mt-1 text-white">{selectedArtwork.marco || "No especificado"}</dd>
                </div>
              </dl>

              {relatedArtworks.length > 0 ? (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="font-headline text-xl leading-tight text-white">Otros cuadros relacionados en Quito</h3>
                  <div className="mt-4 space-y-3">
                    {relatedArtworks.map((artwork) => {
                      const artworkUrl = getArtworkFullUrl(artwork);

                      return (
                        <Link
                          key={`related-${artwork.id}`}
                          href={artworkUrl}
                          className="block border border-white/10 bg-white/5 px-3 py-3 text-sm transition-colors hover:border-white/40"
                        >
                          <span className="block font-semibold text-white">{getArtworkProductName(artwork)}</span>
                          <span className="mt-1 block break-all text-xs text-white/55">{artworkUrl}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      ) : null}
    </section>
  );
}
