"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MaterialIcon } from "@/components/ui/material-icon";
import { Logo } from "@/components/ui/logo";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 flex w-full max-w-full items-center justify-between bg-white/90 px-6 py-4 backdrop-blur-md dark:bg-stone-900/90 md:px-8">
      <div className="flex items-center gap-4">
        <Link href="/" aria-label="Ir al inicio" onClick={() => setIsMenuOpen(false)}>
          <Logo className="h-8 w-auto" priority />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-x-12">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:opacity-70 transition-opacity duration-300",
                isActive
                  ? "text-red-700 dark:text-red-500 border-b border-red-700 font-bold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="hidden text-red-700 dark:text-red-500 font-label text-xs uppercase tracking-widest font-bold sm:block">
        Since 1973
      </div>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-red-700 hover:text-red-700 dark:border-stone-700 dark:text-stone-200 md:hidden"
        aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <MaterialIcon name={isMenuOpen ? "close" : "menu"} className="text-2xl" />
      </button>

      <div
        id="mobile-navigation"
        className={cn(
          "absolute left-0 top-full w-full border-t border-stone-200 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-md transition-all dark:border-stone-800 dark:bg-stone-900/95 md:hidden",
          isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "border-b border-stone-200 pb-3 text-sm font-bold uppercase tracking-widest transition-colors dark:border-stone-800",
                  isActive ? "text-red-700 dark:text-red-500" : "text-stone-700 hover:text-red-700 dark:text-stone-200",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
