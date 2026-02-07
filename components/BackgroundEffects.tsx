import { ReactNode } from 'react';

interface BackgroundEffectsProps {
  variant?: 'blue-purple' | 'purple-pink' | 'blue-pink' | 'multi' | 'gradient';
  opacity?: 'light' | 'medium' | 'heavy';
}

export function BackgroundEffects({ variant = 'blue-purple', opacity = 'medium' }: BackgroundEffectsProps) {
  const opacityMap = {
    light: { primary: 'opacity-10', secondary: 'opacity-5', dark: 'dark:opacity-5' },
    medium: { primary: 'opacity-20', secondary: 'opacity-15', dark: 'dark:opacity-10' },
    heavy: { primary: 'opacity-30', secondary: 'opacity-25', dark: 'dark:opacity-15' },
  };

  const op = opacityMap[opacity];

  const variants = {
    'blue-purple': (
      <>
        <div className={`absolute -top-40 right-0 h-96 w-96 bg-blue-200 ${op.primary} blur-3xl dark:bg-blue-900 dark:opacity-10 rounded-full animate-pulse`} />
        <div className={`absolute bottom-0 left-0 h-96 w-96 bg-purple-200 ${op.primary} blur-3xl dark:bg-purple-900 dark:opacity-10 rounded-full animate-pulse`} />
      </>
    ),
    'purple-pink': (
      <>
        <div className={`absolute -top-40 right-0 h-96 w-96 bg-purple-200 ${op.primary} blur-3xl dark:bg-purple-900 dark:opacity-10 rounded-full animate-pulse`} />
        <div className={`absolute bottom-0 left-0 h-96 w-96 bg-pink-200 ${op.primary} blur-3xl dark:bg-pink-900 dark:opacity-10 rounded-full animate-pulse`} />
      </>
    ),
    'blue-pink': (
      <>
        <div className={`absolute -top-40 right-0 h-96 w-96 bg-blue-200 ${op.primary} blur-3xl dark:bg-blue-900 dark:opacity-10 rounded-full animate-pulse`} />
        <div className={`absolute bottom-0 left-0 h-96 w-96 bg-pink-200 ${op.primary} blur-3xl dark:bg-pink-900 dark:opacity-10 rounded-full animate-pulse`} />
      </>
    ),
    multi: (
      <>
        <div className={`absolute -top-40 right-0 h-96 w-96 bg-blue-200 ${op.primary} blur-3xl dark:bg-blue-900 dark:opacity-10 rounded-full animate-pulse`} />
        <div className={`absolute bottom-0 left-0 h-96 w-96 bg-purple-200 ${op.primary} blur-3xl dark:bg-purple-900 dark:opacity-10 rounded-full animate-pulse`} />
        <div className={`absolute top-1/2 left-1/2 h-80 w-80 bg-pink-200 ${op.secondary} blur-3xl dark:bg-pink-900 ${op.dark} rounded-full animate-pulse`} />
      </>
    ),
    gradient: (
      <>
        <div className={`absolute -top-40 right-1/4 h-96 w-96 bg-gradient-to-br from-blue-200 to-purple-200 ${op.primary} blur-3xl dark:from-blue-900 dark:to-purple-900 dark:opacity-10 rounded-full animate-pulse`} />
        <div className={`absolute bottom-0 left-1/4 h-96 w-96 bg-gradient-to-tr from-purple-200 to-pink-200 ${op.primary} blur-3xl dark:from-purple-900 dark:to-pink-900 dark:opacity-10 rounded-full animate-pulse`} />
      </>
    ),
  };

  return <>{variants[variant]}</>;
}
