import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  icon: ReactNode;
  isActive?: boolean;
  className?: string;
}

export function TimelineItem({
  title,
  subtitle,
  description,
  date,
  icon,
  isActive = false,
  className = '',
}: TimelineItemProps) {
  return (
    <div className={cn('relative pl-8 pb-8 last:pb-0', className)}>
      {/* Timeline line */}
      <div className="absolute left-0 top-6 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Timeline dot */}
      <div
        className={cn(
          'absolute left-0 top-4 w-6 h-6 rounded-full border-2 bg-white dark:bg-zinc-950 transition-all duration-300',
          isActive
            ? 'border-blue-600 shadow-lg shadow-blue-600/50'
            : 'border-zinc-300 dark:border-zinc-700 group-hover:border-blue-500'
        )}
      >
        <div className="absolute inset-1 rounded-full flex items-center justify-center text-sm">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="group rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-md-pro transition-all duration-300 hover:shadow-lg-pro hover:-translate-y-1 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
            </div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap px-3 py-1 bg-blue-50 dark:bg-blue-950 rounded-full">
              {date}
            </span>
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
