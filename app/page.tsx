"use client";

import { profile } from "@/data/profile";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { ProjectFilters } from "@/components/ProjectFilters";
import { SkillsVisualization } from "@/components/SkillsVisualization";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StatCard } from "@/components/StatCard";
import { ServiceCard } from "@/components/ServiceCard";
import { CTACard } from "@/components/CTACard";
import { Button } from "@/components/Button";
import { TimelineItem } from "@/components/TimelineItem";
import { Sparkles, Code, Zap, BookOpen, Brain, Cpu, Rocket, TrendingUp, ArrowRight, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const fullTypedName = "Durga Phani Teja Pasupuleti";
  const [showWelcome, setShowWelcome] = useState(true);
  const [typedName, setTypedName] = useState("");
  const [isHeroInView, setIsHeroInView] = useState(true);
  const heroSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowWelcome(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const heroEl = heroSectionRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.55 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHeroInView) return;

    setTypedName("");
    let index = 0;
    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedName(fullTypedName.slice(0, index));
      if (index >= fullTypedName.length) {
        window.clearInterval(typingTimer);
      }
    }, 90);

    return () => window.clearInterval(typingTimer);
  }, [fullTypedName, isHeroInView]);

  return (
    <main className="relative overflow-hidden bg-white dark:bg-zinc-950">
      {showWelcome && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm">
          <div className="mx-4 max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900/90 p-8 text-center shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Welcome</p>
            <h1 className="mt-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl animate-pulse">
              {profile.name}
            </h1>
            <p className="mt-3 text-sm text-zinc-300">Loading your interactive portfolio pages...</p>
            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              className="mt-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Enter
            </button>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-200 opacity-30 blur-3xl animate-pulse dark:bg-blue-900 dark:opacity-10" />
        <div className="absolute top-[30%] left-[10%] h-80 w-80 rounded-full bg-purple-200 opacity-25 blur-3xl animate-pulse dark:bg-purple-900 dark:opacity-10" />
        <div className="absolute top-[60%] right-[15%] h-80 w-80 rounded-full bg-pink-200 opacity-20 blur-3xl animate-pulse dark:bg-pink-900 dark:opacity-5" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-200 opacity-30 blur-3xl animate-pulse dark:bg-purple-900 dark:opacity-10" />
      </div>

      {/* Hero with Gradient Background */}
      <section ref={heroSectionRef} className="pt-4 pb-16 sm:pt-8 sm:pb-24 md:pt-10 md:pb-28">
        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            {/* Left side - Main content */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                <Badge className="animate-bounce-in">{profile.location}</Badge>
                <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 animate-bounce-in">{profile.headline}</Badge>
              </div>

              <div className="animate-fade-in-up">
                <h1 className="pb-2 text-6xl sm:text-7xl font-sans font-bold tracking-tight leading-[1.15] bg-gradient-to-r from-zinc-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-text-gradient">
                  {typedName}
                  <span className="ml-1 inline-block animate-pulse">|</span>
                </h1>
              </div>

              <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {profile.summary}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Button href="#projects" size="lg" variant="primary" icon={<Sparkles size={20} />}>
                  View Projects
                </Button>
                <Button href={`mailto:${profile.email}`} size="lg" variant="secondary" icon={<Zap size={20} />}>
                  Get in Touch
                </Button>
              </div>


            </div>

            {/* Right side - Profile Photo */}
            <div className="flex justify-center items-center animate-slide-up">
              <div className="relative w-80 h-80">
                {/* Decorative glow background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 dark:opacity-10 animate-pulse" />
                
                {/* Photo container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl dark:border-zinc-800">
                  <img
                    src="/profile.jpg"
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Accent dots */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-lg opacity-50" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-lg opacity-30" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="pt-2 pb-5 sm:pt-3 sm:pb-7">
        <div>
          <Container>
            <ScrollReveal animation="fadeInUp" delay={0}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard
                  icon={<TrendingUp size={20} />}
                  label="Years of Experience"
                  value="3+"
                  description="Professional development"
                />
                <StatCard
                  icon={<Code size={20} />}
                  label="Projects Completed"
                  value="4+"
                  description="Full-stack applications"
                />
                <StatCard
                  icon={<Rocket size={20} />}
                  label="Products Shipped"
                  value="4+"
                  description="Production systems"
                />
              </div>
            </ScrollReveal>
          </Container>
        </div>
      </section>

      {/* Skills Section with New Visualization */}
      <section className="pt-2 pb-5 sm:pt-3 sm:pb-7">
        <div>
          <ScrollReveal animation="fadeInUp">
            <Section id="skills" title="Technical Skills" subtitle="Languages, frameworks, and tools I use daily.">
              <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-lg dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
                <SkillsVisualization />
              </div>
            </Section>
          </ScrollReveal>
        </div>
      </section>

      {/* Services / Expertise Section */}
      <section className="pt-2 pb-5 sm:pt-3 sm:pb-7">
        <div>
          <ScrollReveal animation="fadeInUp" delay={50}>
            <Section id="expertise" title="Core Expertise" subtitle="What I specialize in and can deliver.">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  icon={<Brain size={24} />}
                  title="Machine Learning & AI"
                  description="Advanced ML systems with Deep Learning, NLP, LLMs, and prompt engineering."
                  features={["PyTorch, TensorFlow", "NLP & LLMs", "Prompt Engineering", "scikit-learn, pandas, numpy"]}
                />
                <ServiceCard
                  icon={<Cpu size={24} />}
                  title="Cloud & DevOps"
                  description="Scalable infrastructure on Azure, AWS, Google Cloud with containerization and automation."
                  features={["Azure, AWS, GCP", "Docker, Jenkins", "Terraform, Git", "Infrastructure as Code"]}
                />
                <ServiceCard
                  icon={<Code size={24} />}
                  title="Data & Databases"
                  description="Data management and visualization with SQL, NoSQL, and enterprise tools."
                  features={["SQL, ORACLE, MongoDB", "Power BI", "Data Analytics"]}
                />
              </div>
            </Section>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <section className="pt-2 pb-5 sm:pt-3 sm:pb-7">
        <div>
          <ScrollReveal animation="fadeInUp" delay={100}>
            <Section id="projects" title="Featured Projects" subtitle="Selected work. Click a project to see details.">
              <ProjectFilters />
            </Section>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section className="pt-2 pb-5 sm:pt-3 sm:pb-7">
        <div>
          <ScrollReveal animation="fadeInUp" delay={200}>
            <Section id="experience" title="Professional Experience" subtitle="Industry roles and impact.">
              <div className="space-y-4">
                {profile.experience.map((job) => (
                  <div key={job.company} className="group rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-md-pro transition-all duration-500 hover:shadow-lg-pro hover:border-blue-300 hover:-translate-y-1 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 dark:hover:border-blue-700 overflow-hidden relative">
                    {/* Hover reveal */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{job.title}</h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-300">{job.company} • {job.where}</p>
                        </div>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap">{job.when}</p>
                      </div>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </ScrollReveal>
        </div>
      </section>

      {/* Education */}
      <section className="pt-2 pb-5 sm:pt-3 sm:pb-7">
        <div>
          <ScrollReveal animation="fadeInUp" delay={300}>
            <Section id="education" title="Education" subtitle="Academic background and relevant coursework.">
              <div className="grid gap-4">
                {profile.education.map((ed) => (
                  <div key={ed.school} className="group rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-md-pro transition-all duration-500 hover:shadow-lg-pro hover:-translate-y-1 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 overflow-hidden relative">
                    {/* Hover reveal */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">{ed.degree}</h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-300">{ed.school} • {ed.where}</p>
                        </div>
                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400 whitespace-nowrap">{ed.when}</p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {ed.coursework.map((c) => (
                          <Badge key={c} className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">{c}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="pt-2 pb-5 sm:pt-3 sm:pb-7">
        <div>
          <ScrollReveal animation="fadeInUp" delay={400}>
            <Section id="achievements" title="Achievements & Recognition" subtitle="Notable accomplishments and credentials.">
              <AchievementsSection />
            </Section>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Work Together */}
      <section className="pt-2 pb-5 sm:pt-3 sm:pb-7">
        <div>
          <ScrollReveal animation="fadeInUp" delay={500}>
            <Section title="Ready to Collaborate?" subtitle="Let's discuss your next project or opportunity.">
              <div className="grid gap-6 lg:grid-cols-2">
                <CTACard
                  icon="🚀"
                  title="Start a Project"
                  description="Let's discuss how I can contribute to your next project or team."
                  buttonText="Get In Touch"
                  buttonHref={`mailto:${profile.email}`}
                  variant="primary"
                />
                <CTACard
                  icon="💼"
                  title="Career Opportunities"
                  description="Open to full-time positions, internships, or contract work in AI/DevOps."
                  buttonText="View LinkedIn"
                  buttonHref={`https://www.linkedin.com/in/${profile.linkedin}`}
                  variant="gradient"
                />
              </div>
            </Section>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-6 sm:py-8">
        <div>
          <ScrollReveal animation="fadeInUp" delay={550}>
            <Section id="contact" title="Let's Connect" subtitle="Multiple ways to get in touch with me.">
              <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden relative">
                {/* Animated background */}
                <div className="absolute -top-40 right-0 h-80 w-80 bg-blue-400/10 blur-3xl rounded-full pointer-events-none animate-pulse" />
                <div className="absolute -bottom-20 left-0 h-60 w-60 bg-purple-400/10 blur-3xl rounded-full pointer-events-none animate-pulse" />
                
                <div className="relative z-10 grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="text-blue-600 dark:text-blue-400" size={28} />
                      <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">Let's Work Together</h3>
                    </div>
                    <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      I'm actively looking for full-time roles, internships, or freelance projects. Whether you're interested in collaboration, have questions about my work, or just want to chat—reach out! I'm excited to explore new opportunities and tackle challenging problems.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href={`mailto:${profile.email}?subject=Let's%20Connect`} size="lg" variant="primary" icon={<Zap size={20} />}>
                        Send Email
                      </Button>
                      <Button href={`https://www.linkedin.com/in/${profile.linkedin}`} size="lg" variant="secondary" external icon={<Linkedin size={20} />}>
                        LinkedIn Profile
                      </Button>
                      <Button href={`https://github.com`} size="lg" variant="ghost" external icon={<Github size={20} />}>
                        GitHub
                      </Button>
                    </div>
                  </div>

                  {/* Contact info card */}
                  <div className="rounded-2xl border border-white/30 bg-white/50 dark:bg-zinc-800/50 p-6 shadow-lg backdrop-blur-xl">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-700 dark:text-zinc-300 mb-6">Quick Contact</h4>
                    <div className="space-y-5 text-sm">
                      <div>
                        <dt className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-2">Email</dt>
                        <dd>
                          <a
                            href={`mailto:${profile.email}`}
                            className="font-semibold text-zinc-900 dark:text-white whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition"
                          >
                            {profile.email}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-2">Phone</dt>
                        <dd className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                          {profile.phone}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-2">Location</dt>
                        <dd className="font-semibold text-zinc-900 dark:text-white">{profile.location}</dd>
                      </div>
                      <div className="pt-4 border-t border-white/20 dark:border-zinc-700/50">
                        <dt className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-3">Response Time</dt>
                        <dd className="inline-block px-3 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
                          24-48 hours
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
