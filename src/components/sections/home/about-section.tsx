import Image from "next/image";

import { images } from "@/lib/assets";

export function AboutSection() {
  return (
    <section className="py-32 px-8 md:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/5] frame-stroke p-6">
            <div className="w-full h-full bg-secondary-container relative overflow-hidden">
              <Image
                src={images.workshop}
                alt="Interior of a high-end framing workshop with antique tools and stacks of high-quality wood mouldings"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="font-label text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">
            El Legado del Maestro
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mb-10 leading-tight">Medio siglo de perfeccionamiento.</h2>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed mb-8">
            En Enmarkarte – De Chávez Santamaría nos especializamos en el enmarcado profesional de obras de arte,
            ofreciendo soluciones cuidadosas y de alta calidad para la conservación y presentación de cada pieza.
            Trabajamos con dedicación y respeto por el arte desde 1973.
          </p>
          <div className="h-px w-24 bg-primary mb-8" />
          <p className="font-serif italic text-on-surface">
            &quot;Un buen marco no solo protege; es la frontera donde el arte se encuentra con el espacio.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
