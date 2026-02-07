import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:from-blue-700 hover:to-blue-800 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950',
    secondary:
      'bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700',
    ghost:
      'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
    gradient:
      'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white shadow-lg hover:shadow-xl hover:from-purple-700 hover:via-pink-700 hover:to-red-700 focus-visible:ring-purple-500',
    outline:
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950',
  };

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
