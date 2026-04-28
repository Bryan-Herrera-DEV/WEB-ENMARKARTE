import { GalleryGridSection } from "@/components/sections/galeria/gallery-grid-section";
import { LegacySection } from "@/components/sections/home/legacy-section";
import { PageHeroSection } from "@/components/sections/shared/page-hero-section";
import { images } from "@/lib/assets";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Galería",
  description:
    "Explore una selección visual del trabajo de Enmarkarte en enmarcado, restauración y montaje de obras de arte.",
  path: "/galeria",
});

export default function GaleriaPage() {
  return (
    <main className="pt-20">
      <PageHeroSection
        label="Galería"
        title="La presentación final también es parte de la obra."
        description="Una muestra de composiciones, acabados y soluciones de montaje diseñadas para colecciones y espacios contemporáneos."
        imageSrc={images.gallery}
        imageAlt="Vista de galería minimalista con obras enmarcadas"
      />
      <GalleryGridSection />
      <LegacySection />
    </main>
  );
}
