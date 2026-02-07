import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200",
        className
      )}
    >
      {children}
    </span>
  );
}
