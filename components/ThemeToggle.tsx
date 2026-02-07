"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm shadow-soft transition hover:shadow dark:border-zinc-800 dark:bg-zinc-950",
        className
      )}
      aria-label="Toggle theme"
      type="button"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
