import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MaterialIconProps = {
  name: string;
  className?: string;
};

const icons: Record<string, ReactNode> = {
  architecture: <path d="M4 20h16M6 20V9l6-5 6 5v11M9 20v-7h6v7" />,
  balance: <path d="M12 3v18M5 7h14M6 7l-3 6h6L6 7Zm12 0-3 6h6l-3-6ZM8 21h8" />,
  brush: <path d="M14 4l6 6-8 8H6v-6l8-8ZM4 20c2 0 2-2 2-4" />,
  call: <path d="M6.6 4.5 9 6.9 7.5 9c1.2 2.3 3.1 4.2 5.5 5.5l2.1-1.5 2.4 2.4-1.2 3c-.3.7-1 1.1-1.8 1A15.8 15.8 0 0 1 4.6 9.5c-.1-.8.3-1.5 1-1.8l3-1.2Z" />,
  chat: <path d="M5 5h14v10H8l-4 4V5Z" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  frame_person: <path d="M4 5h16v14H4V5Zm4 10c.8-2 2.1-3 4-3s3.2 1 4 3M9.5 9.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />,
  handyman: <path d="m14 7 3-3 3 3-3 3M4 20l8-8M5 5l4 4M3 7l4-4 4 4-4 4-4-4Z" />,
  history: <path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.6M4 4v4.6h4.6M12 8v5l3 2" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4" />,
  location_on: <path d="M12 21s7-5.4 7-11a7 7 0 0 0-14 0c0 5.6 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  mail: <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  public: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2-2.2 3-5.2 3-9s-1-6.8-3-9m0 18c-2-2.2-3-5.2-3-9s1-6.8 3-9M3 12h18" />,
};

export function MaterialIcon({ name, className }: MaterialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block h-[1em] w-[1em] shrink-0", className)}
      aria-hidden="true"
    >
      {icons[name] ?? icons.chat}
    </svg>
  );
}
