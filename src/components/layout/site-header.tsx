import Link from "next/link";

import { MaterialIcon } from "@/components/ui/material-icon";
import { Logo } from "@/components/ui/logo";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <nav className="fixed top-0 z-50 flex w-full max-w-full items-center justify-between bg-white/90 px-6 py-4 backdrop-blur-md dark:bg-stone-900/90 md:px-8">
      <div className="flex items-center gap-4">
        <Link href="/" aria-label="Ir al inicio">
          <Logo className="h-8 w-auto" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-x-12">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-stone-600 transition-opacity duration-300 hover:text-stone-900 hover:opacity-70 dark:text-stone-400 dark:hover:text-stone-50"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="hidden text-red-700 dark:text-red-500 font-label text-xs uppercase tracking-widest font-bold sm:block">
        Since 1973
      </div>

      <details className="group md:hidden">
        <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-red-700 hover:text-red-700 dark:border-stone-700 dark:text-stone-200 [&::-webkit-details-marker]:hidden">
          <span className="sr-only">Abrir menu</span>
          <MaterialIcon name="menu" className="text-2xl group-open:hidden" />
          <MaterialIcon name="close" className="hidden text-2xl group-open:inline-block" />
        </summary>

        <div className="absolute left-0 top-full w-full border-t border-stone-200 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-md dark:border-stone-800 dark:bg-stone-900/95">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className="border-b border-stone-200 pb-3 text-sm font-bold uppercase tracking-widest text-stone-700 transition-colors hover:text-red-700 dark:border-stone-800 dark:text-stone-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </details>
    </nav>
  );
}
