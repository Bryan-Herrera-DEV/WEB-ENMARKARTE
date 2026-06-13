import Link from "next/link";

import { MaterialIcon } from "@/components/ui/material-icon";
import { buildWhatsAppUrl } from "@/lib/site";

const floatingWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quiero informacion sobre marcos para cuadros Quito y enmarcado de cuadros en Quito.",
);

export function FloatingWhatsAppButton() {
  return (
    <Link
      href={floatingWhatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-transform hover:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MaterialIcon name="chat" className="text-xl" />
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
  );
}
