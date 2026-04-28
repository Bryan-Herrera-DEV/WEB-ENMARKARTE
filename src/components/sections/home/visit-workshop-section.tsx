import Image from "next/image";
import Link from "next/link";

import { MaterialIcon } from "@/components/ui/material-icon";
import { images } from "@/lib/assets";
import { siteConfig } from "@/lib/site";

export function VisitWorkshopSection() {
  return (
    <section className="py-32 px-8 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="aspect-video relative mb-8 ghost-border">
              <Image
                src={images.gallery}
                alt="Wide angle shot of a minimalist art gallery with clean white walls and perfectly spaced framed artworks"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover grayscale opacity-50"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-12">
            <div>
              <h2 className="font-headline text-5xl mb-6">Visite nuestro taller</h2>
              <p className="font-body text-on-surface-variant mb-8">
                Permítanos asesorarle personalmente en la elección del marco ideal para su obra.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MaterialIcon name="location_on" className="text-primary" />
                <p className="font-body text-sm">{siteConfig.address}</p>
              </div>
              <div className="flex items-start gap-4">
                <MaterialIcon name="call" className="text-primary" />
                <p className="font-body text-sm">{siteConfig.phone}</p>
              </div>
              <div className="flex items-start gap-4">
                <MaterialIcon name="mail" className="text-primary" />
                <p className="font-body text-sm">{siteConfig.email}</p>
              </div>
            </div>

            <Link
              href="/contacto"
              className="frame-stroke px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-on-surface hover:text-surface transition-all duration-300 text-center"
            >
              Agendar Cita
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
