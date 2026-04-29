import Link from "next/link";

import { MaterialIcon } from "@/components/ui/material-icon";
import { siteConfig } from "@/lib/site";

const contactItems = [
  {
    icon: "location_on",
    title: "Dirección",
    value: siteConfig.address,
    href: siteConfig.mapUrl,
  },
  {
    icon: "call",
    title: "Llamada",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: "chat",
    title: "WhatsApp",
    value: siteConfig.phone,
    href: siteConfig.whatsappUrl,
  },
  {
    icon: "mail",
    title: "Correo",
    value: siteConfig.email,
    href: siteConfig.emailHref,
  },
];

export function ContactDetailsSection() {
  return (
    <section className="py-32 px-8 md:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="font-label text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Atención Personalizada
          </span>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">Coordinemos una visita a su medida.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {contactItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="frame-stroke p-10 flex flex-col gap-6 hover:bg-surface transition-colors"
            >
              <MaterialIcon name={item.icon} className="text-4xl text-primary" />
              <h3 className="font-headline text-2xl">{item.title}</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.value}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
