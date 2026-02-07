import Link from "next/link";
import { Badge } from "@/components/Badge";
import { TechIcon } from "@/components/TechIcon";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function ProjectCard({
  slug,
  name,
  tagline,
  stack,
  className,
}: {
  slug: string;
  name: string;
  tagline: string;
  stack: readonly string[];
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        "group block rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-sm-pro no-underline transition-all duration-500 hover:-translate-y-2 hover:shadow-lg-pro hover:border-zinc-300 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900 dark:hover:border-zinc-700 overflow-hidden relative",
        className
      )}
    >
      {/* Hover background reveal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition duration-300">{name}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition">{tagline}</p>
          </div>
          <div className="flex-shrink-0 rounded-full bg-zinc-200 p-2 group-hover:bg-blue-500 transition duration-300 dark:bg-zinc-800 dark:group-hover:bg-blue-600">
            <ArrowRight size={18} className="text-zinc-600 group-hover:text-white dark:text-zinc-400 transition" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 opacity-100 group-hover:opacity-100 transition duration-300">
          {stack.slice(0, 6).map((s) => (
            <div
              key={s}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:shadow-md group-hover:border-blue-300 group-hover:bg-blue-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:group-hover:border-blue-700 dark:group-hover:bg-blue-900/20"
            >
              <TechIcon tech={s} size={14} />
              <span>{s}</span>
            </div>
          ))}
          {stack.length > 6 ? (
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              +{stack.length - 6}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
