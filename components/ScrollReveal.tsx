'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInDown' | 'slideInRight' | 'slideInLeft' | 'scaleIn';
  delay?: number;
  className?: string;
}

const animationClasses = {
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  slideInRight: 'animate-slide-in-right',
  slideInLeft: 'animate-slide-in-left',
  scaleIn: 'animate-scale-in',
};

export function ScrollReveal({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use setTimeout to trigger animation after delay
          if (delay > 0) {
            setTimeout(() => {
              element.classList.add(animationClasses[animation]);
            }, delay);
          } else {
            element.classList.add(animationClasses[animation]);
          }
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay]);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
    >
      {children}
    </div>
  );
}
