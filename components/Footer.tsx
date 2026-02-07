import { Container } from "@/components/Container";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", href: `https://www.linkedin.com/in/${profile.linkedin}`, icon: Linkedin, external: true },
  ];

  return (
    <footer className="border-t border-zinc-200/40 bg-gradient-to-b from-transparent to-zinc-50 dark:border-zinc-800/40 dark:to-zinc-900/20">
      <Container className="py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                {profile.name.split(" ")[0]}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Software Developer & AI Enthusiast
              </p>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xs">
              Building innovative solutions with Python, AWS, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
              Let's Connect
            </h4>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Reach out for opportunities or collaboration
              </p>
              <div className="flex gap-3">
                {footerLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-blue-950 dark:hover:text-blue-400 dark:hover:border-blue-700"
                      title={link.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Designed & built with <span className="text-blue-600 dark:text-blue-400">Next.js</span>, <span className="text-blue-600 dark:text-blue-400">React</span> & <span className="text-blue-600 dark:text-blue-400">TypeScript</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
