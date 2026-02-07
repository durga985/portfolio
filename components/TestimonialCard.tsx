interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-md-pro transition-all duration-500 hover:shadow-lg-pro hover:-translate-y-1 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

      {/* Quote mark decoration */}
      <div className="absolute top-4 right-4 text-6xl text-blue-200 dark:text-blue-900 opacity-20 group-hover:opacity-40 transition-opacity duration-300 font-serif">
        "
      </div>

      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 italic">
          "{quote}"
        </p>

        {/* Author info */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4">
          <p className="font-semibold text-zinc-900 dark:text-white">{author}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
