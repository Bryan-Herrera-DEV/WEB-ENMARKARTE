import Link from "next/link";

import { MaterialIcon } from "@/components/ui/material-icon";
import { Logo } from "@/components/ui/logo";
import { footerContactLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 w-full border-t border-stone-200 dark:border-stone-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 w-full max-w-full">
        <div className="flex flex-col gap-6">
          <Link href="/" aria-label="Ir al inicio">
            <Logo className="h-7 w-auto" />
          </Link>
          <p className="font-sans text-xs uppercase tracking-widest text-stone-500">De Chávez Santamaría. Since 1973.</p>
          <p className="font-sans text-xs uppercase tracking-widest text-stone-500 leading-loose">
            © 2026 Enmarkarte – De Chávez Santamaría. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label text-xs font-bold uppercase tracking-widest mb-4">Atención al Cliente</h4>
          {footerContactLinks.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="text-stone-500 font-sans text-xs uppercase tracking-widest hover:text-red-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label text-xs font-bold uppercase tracking-widest mb-4">Presencia Global</h4>
          <div className="flex items-center gap-2 text-stone-500">
            <MaterialIcon name="public" className="text-sm" />
            <span className="font-sans text-xs uppercase tracking-widest">Envíos internacionales disponibles</span>
          </div>
          <div className="mt-8 flex gap-4" aria-label="Redes sociales">
            <span className="text-stone-400 hover:text-primary cursor-pointer transition-colors">
              <MaterialIcon name="brand_awareness" />
            </span>
            <span className="text-stone-400 hover:text-primary cursor-pointer transition-colors">
              <MaterialIcon name="photo_camera" />
            </span>
            <span className="text-stone-400 hover:text-primary cursor-pointer transition-colors">
              <MaterialIcon name="share" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
