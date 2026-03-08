import { notFound } from "next/navigation";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";

const projectImageFallback: Record<string, string> = {
  "optimized-rag-enterprise-knowledge": "/projects/rag-system.svg",
  "ai-job-analyzer": "/projects/ai-job-analyzer.svg",
  "topic-modeling-text-mining": "/projects/topic-modeling.svg",
  "automatic-door-access-face-recognition": "/projects/face-access.svg",
};

export function generateStaticParams() {
  return profile.projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = profile.projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) notFound();
  const imageSrc = project.image || projectImageFallback[resolvedParams.slug];

  const { github, demo, writeup } = project.links;

  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mb-8">
          <Link href="/" className="text-sm text-zinc-600 hover:underline dark:text-zinc-300">
            ← Back
          </Link>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft dark:border-zinc-800 dark:bg-zinc-950">
          {imageSrc ? (
            <div className="mb-6 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
              <img src={imageSrc} alt={project.name} className="h-64 w-full object-cover" />
            </div>
          ) : null}

          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">{project.name}</h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">{project.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-soft no-underline hover:shadow dark:border-zinc-800 dark:bg-zinc-950"
                >
                  GitHub
                </a>
              ) : null}
              {demo ? (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white shadow-soft no-underline hover:opacity-90 dark:bg-white dark:text-zinc-900"
                >
                  Live Demo
                </a>
              ) : null}
              {writeup ? (
                <a
                  href={writeup}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-soft no-underline hover:shadow dark:border-zinc-800 dark:bg-zinc-950"
                >
                  Case Study
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Tech stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/30">
            <h3 className="text-base font-semibold">Next steps</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Want this page to look even stronger? Add: architecture diagram, metrics (accuracy/latency), screenshots, and links.
              Update <span className="font-mono">data/profile.ts</span> to include your GitHub/demo URLs.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
