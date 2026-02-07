import { techIcons } from "@/data/profile";
import * as Icons from "lucide-react";

interface TechIconProps {
  tech: string;
  size?: number;
}

export function TechIcon({ tech, size = 16 }: TechIconProps) {
  const iconName = techIcons[tech];
  
  if (!iconName) {
    return (
      <span title={tech} className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
        {tech.charAt(0)}
      </span>
    );
  }

  const IconComponent = (Icons as Record<string, any>)[iconName];
  
  if (!IconComponent) {
    return (
      <span title={tech} className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
        {tech.charAt(0)}
      </span>
    );
  }

  return (
    <span title={tech} className="inline-flex items-center justify-center">
      <IconComponent size={size} className="text-zinc-600 dark:text-zinc-400" />
    </span>
  );
}
