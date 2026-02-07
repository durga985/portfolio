import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features = [],
  className = '',
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-md-pro transition-all duration-500 hover:shadow-lg-pro hover:-translate-y-2 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950',
        className
      )}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />

      {/* Border glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl border border-gradient-to-r from-blue-400 to-purple-400 blur-sm" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Title and description */}
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
