import Image from "next/image";
import Link from "next/link";

import { galleryConfig, type GalleryArtwork } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";

type ArtGallerySectionProps = {
  artworks: GalleryArtwork[];
  selectedCategory: string;
  selectedArtwork?: GalleryArtwork;
};

function buildGalleryHref(category: string, imageName?: string) {
  const params = new URLSearchParams();

  if (category !== "todas") {
    params.set("cat", category);
  }

  if (imageName) {
    params.set("img", imageName);
  }

  const query = params.toString();
  return query ? `/galeria?${query}` : "/galeria";
}

function formatCategoryLabel(category: string) {
  if (category === "todas") return "Todas";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export function ArtGallerySection({ artworks, selectedCategory, selectedArtwork }: ArtGallerySectionProps) {
  const visibleArtworks =
    selectedCategory === "todas"
      ? artworks
      : artworks.filter((artwork) => artwork.tecnicas.some((tecnica) => tecnica.toLowerCase() === selectedCategory.toLowerCase()));

  const categories = ["todas", ...galleryConfig.tecnicas];
  const closeModalHref = buildGalleryHref(selectedCategory);

  return (
    <section className="relative bg-surface-container-lowest px-6 pb-20 pt-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 font-label text-xs uppercase tracking-[0.3em] text-primary">Coleccion Enmarkarte</p>
          <h1 className="font-headline text-4xl leading-tight text-on-surface md:text-5xl">Galeria de obras con vista SEO</h1>
          <p className="mt-4 text-sm text-on-surface/75 md:text-base">
            Selecciona una categoria para filtrar.
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
                  <p className="truncate text-sm font-semibold text-on-surface">{artwork.nombre}</p>
                </div>
              </Link>
            ))}
          </div>
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

              <p className="mb-3 pr-8 text-xs uppercase tracking-[0.2em] text-white/70">Obra seleccionada</p>
              <h2 className="font-headline text-2xl leading-tight">{selectedArtwork.nombre}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85">{selectedArtwork.seoDescription}</p>

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
            </aside>
          </div>
        </div>
      ) : null}
    </section>
  );
}
