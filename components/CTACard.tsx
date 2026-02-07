import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CTACardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'primary' | 'secondary' | 'gradient';
  className?: string;
}

export function CTACard({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  variant = 'primary',
  className = '',
}: CTACardProps) {
  const baseStyles =
    'group relative overflow-hidden rounded-2xl border p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1';

  const variantStyles = {
    primary:
      'border-zinc-200 bg-gradient-to-br from-white to-zinc-50 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950',
    secondary:
      'border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 dark:border-blue-900 dark:from-blue-950 dark:to-blue-900',
    gradient:
      'border-purple-200 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:border-purple-900 dark:from-purple-950 dark:via-pink-950 dark:to-red-950',
  };

  const buttonStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    secondary:
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950',
    gradient: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700',
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {icon && <div className="mb-3 text-3xl">{icon}</div>}
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">{description}</p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href={buttonHref}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5',
              buttonStyles[variant]
            )}
          >
            {buttonText}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
