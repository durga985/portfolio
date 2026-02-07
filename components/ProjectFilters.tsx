"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/Badge";
import { ProjectCard } from "@/components/ProjectCard";
import { TechIcon } from "@/components/TechIcon";
import { profile } from "@/data/profile";
import { X, Search } from "lucide-react";

type Project = (typeof profile.projects)[number];

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export function ProjectFilters() {
  const projects = profile.projects;
  const allTags = useMemo(() => uniq(projects.flatMap((p) => p.stack)).sort(), [projects]);
  const [active, setActive] = useState<"All" | string>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const base = projects.filter((p) => (active === "All" ? true : (p.stack as readonly string[]).includes(active)));
    const query = q.trim().toLowerCase();
    if (!query) return base;
    return base.filter((p) => (p.name + " " + p.tagline + " " + p.highlights.join(" ")).toLowerCase().includes(query));
  }, [projects, active, q]);

  return (
    <div className="space-y-6">
      {/* Filter controls */}
      <div className="rounded-xl border border-zinc-200 bg-gradient-to-r from-white to-zinc-50 p-4 shadow-md dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
        {/* Tech stack filter buttons */}
        <div className="mb-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">Filter by technology</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActive("All")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === "All"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "border border-zinc-300 bg-white text-zinc-700 shadow-sm hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              }`}
            >
              All Projects
            </button>
            {allTags.slice(0, 10).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${
                  active === t
                    ? "bg-blue-100 text-blue-700 ring-2 ring-blue-500 dark:bg-blue-900 dark:text-blue-100"
                    : "border border-zinc-300 bg-white text-zinc-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-blue-700"
                }`}
              >
                <TechIcon tech={t} size={14} />
                <span>{t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by project name, description, or technology…"
            className="w-full rounded-lg border border-zinc-300 bg-white pl-10 pr-4 py-2.5 text-sm shadow-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-blue-600 dark:focus:ring-blue-900"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-200"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Showing <span className="font-semibold text-zinc-900 dark:text-white">{filtered.length}</span> {filtered.length === 1 ? "project" : "projects"}
        </p>
        {active !== "All" && (
          <button
            onClick={() => setActive("All")}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* Projects grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.length > 0 ? (
          filtered.map((p: Project) => (
            <ProjectCard key={p.slug} slug={p.slug} name={p.name} tagline={p.tagline} stack={p.stack} />
          ))
        ) : (
          <div className="col-span-full rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              No projects found matching "{q}"{active !== "All" && ` for ${active}`}
            </p>
            <button
              onClick={() => {
                setQ("");
                setActive("All");
              }}
              className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
