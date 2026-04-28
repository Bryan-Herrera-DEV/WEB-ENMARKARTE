"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/logo";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md flex justify-between items-center px-8 py-4 max-w-full">
      <div className="flex items-center gap-4">
        <Link href="/" aria-label="Ir al inicio">
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

      <div className="text-red-700 dark:text-red-500 font-label text-xs uppercase tracking-widest font-bold">
        Since 1973
      </div>
    </nav>
  );
}
