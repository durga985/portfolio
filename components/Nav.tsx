import Link from "next/link";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { Code2 } from "lucide-react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/40 bg-white/75 backdrop-blur-md transition-all duration-300 dark:border-zinc-800/40 dark:bg-zinc-950/75">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="no-underline group">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg group-hover:shadow-xl transition">
              <Code2 size={20} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
                {profile.name}
              </p>
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">Developer</p>
            </div>
          </div>
        </Link>

        {/* Center nav links - hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm font-medium text-zinc-600 no-underline transition-colors hover:text-zinc-900 hover:bg-zinc-100 rounded-lg dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={`mailto:${profile.email}`}
            className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-zinc-900 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
