import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  description?: string;
  className?: string;
}

export function StatCard({
  icon,
  label,
  value,
  description,
  className = '',
}: StatCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-md-pro transition-all duration-500 hover:shadow-lg-pro hover:-translate-y-1 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950',
        className
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
          {icon}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
          {label}
        </h3>

        <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {value}
        </p>

        {description && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
