import Image from "next/image";

type PageHeroSectionProps = {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function PageHeroSection({ label, title, description, imageSrc, imageAlt }: PageHeroSectionProps) {
  return (
    <section className="relative min-h-[560px] flex items-center px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" className="object-cover brightness-[0.85]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="font-label text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">{label}</span>
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-[1.1] tracking-tighter mb-8">{title}</h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
