import Image from "next/image";

const imageNames = Array.from(
  { length: 30 },
  (_, index) => `imgnuestrasobras${index + 1}.jpg`
);

const firstRowImages = imageNames.slice(0, 15);
const secondRowImages = imageNames.slice(15);

type WorksMarqueeRowProps = {
  images: string[];
  direction: "left" | "right";
};

function WorksMarqueeRow({ images, direction }: WorksMarqueeRowProps) {
  const repeatedImages = [...images, ...images];

  return (
    <div className="works-marquee" data-direction={direction}>
      <div className="works-marquee__track">
        {repeatedImages.map((imageName, index) => {
          const isDuplicate = index >= images.length;

          return (
            <div
              key={`${imageName}-${index}`}
              className="works-marquee__item"
              aria-hidden={isDuplicate}
            >
              <Image
                src={`/nuestras-obras/${imageName}`}
                alt={isDuplicate ? "" : `Obra enmarcada artesanal ${index + 1}`}
                width={720}
                height={902}
                sizes="(min-width: 1280px) 240px, (min-width: 768px) 180px, 140px"
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function WorksMarqueeSection() {
  return (
    <section
      className="bg-on-surface overflow-hidden py-20"
      aria-label="Muestra visual de nuestras obras"
    >
      <div className="mb-10 px-8 md:px-16">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Nuestras Obras
          </span>

          <h2 className="max-w-3xl font-headline text-4xl leading-tight text-surface md:text-5xl">
            Piezas enmarcadas con detalle artesanal.
          </h2>
        </div>
      </div>

      <div className="space-y-3">
        <WorksMarqueeRow images={firstRowImages} direction="left" />
        <WorksMarqueeRow images={secondRowImages} direction="right" />
      </div>
    </section>
  );
}