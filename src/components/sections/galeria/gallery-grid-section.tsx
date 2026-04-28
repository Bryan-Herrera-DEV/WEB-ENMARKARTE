import Image from "next/image";

import { images } from "@/lib/assets";

const galleryItems = [
  {
    src: images.hero,
    alt: "Detalle de manos artesanas enmarcando una obra pictórica.",
  },
  {
    src: images.workshop,
    alt: "Vista interior del taller con molduras y herramientas especializadas.",
  },
  {
    src: images.gallery,
    alt: "Galería de arte minimalista con obras enmarcadas de forma uniforme.",
  },
  {
    src: images.workshop,
    alt: "Acabados de enmarcado con enfoque en preservación de piezas históricas.",
  },
  {
    src: images.hero,
    alt: "Control de detalle durante montaje de marcos con técnica tradicional.",
  },
  {
    src: images.gallery,
    alt: "Composición final de obras enmarcadas para exposición.",
  },
];

export function GalleryGridSection() {
  return (
    <section className="py-32 px-8 md:px-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="font-label text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Selección Curada
          </span>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">Obras, marcos y espacios en equilibrio.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {galleryItems.map((item, index) => (
            <figure key={`${item.alt}-${index}`} className="frame-stroke aspect-[4/3] relative overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
