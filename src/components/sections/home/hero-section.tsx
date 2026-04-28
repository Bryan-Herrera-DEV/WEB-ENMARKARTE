import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import portadaHero from "../../../../public/portada.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={portadaHero}
          alt="Close-up of artisan hands meticulously assembling a gold leaf frame on a classical painting in a sunlit studio"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover brightness-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] tracking-tighter mb-8">
          Cuidamos la forma en que el arte se presenta al mundo.
        </h1>

        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12">
          Enmarcado profesional y restauración desde 1973.
        </p>

        <div className="flex gap-4">
          <Link
            href="/servicios"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 font-bold uppercase tracking-widest text-sm hover:scale-95 transition-all duration-200"
          >
            Nuestros Servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
