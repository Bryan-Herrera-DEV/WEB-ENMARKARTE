import Image from "next/image";

import { cn } from "@/lib/utils";
import logoImage from "../../../public/logo.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src={logoImage}
      alt="Enmarkarte"
      priority={priority}
      placeholder="blur"
      className={cn("w-auto", className)}
    />
  );
}
