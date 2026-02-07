import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24 border-b border-zinc-100 dark:border-zinc-900", className)}>
      <Container>
        <div className="mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              {title.split(" ")[0]}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">{title}</h2>
          {subtitle ? <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
