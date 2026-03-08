"use client";

import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { profile } from "@/data/profile";

type Message = {
  role: "user" | "bot";
  text: string;
};

type KnowledgeItem = {
  title: string;
  content: string;
};

const quickSections = [
  { label: "Intro", href: "/#" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
] as const;

function hasAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function toTokens(text: string) {
  return normalize(text).split(" ").filter((token) => token.length > 1);
}

function getSnippet(text: string, maxLen = 220) {
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen).trim()}...`;
}

function buildKnowledgeBase(): KnowledgeItem[] {
  const items: KnowledgeItem[] = [];

  items.push({
    title: "About",
    content: `${profile.name}. ${profile.headline}. ${profile.summary}`,
  });

  items.push({
    title: "Contact",
    content: `Email: ${profile.email}. Phone: ${profile.phone}. Location: ${profile.location}. LinkedIn: ${profile.linkedin}.`,
  });

  Object.entries(profile.skills).forEach(([group, values]) => {
    items.push({
      title: `Skills - ${group}`,
      content: `${group}: ${values.join(", ")}`,
    });
  });

  profile.education.forEach((entry) => {
    items.push({
      title: `Education - ${entry.degree}`,
      content: `${entry.degree} at ${entry.school}, ${entry.where}, ${entry.when}. Coursework: ${entry.coursework.join(", ")}.`,
    });
  });

  profile.experience.forEach((entry) => {
    items.push({
      title: `Experience - ${entry.company}`,
      content: `${entry.title} at ${entry.company}, ${entry.where}, ${entry.when}. ${entry.bullets.join(" ")}`,
    });
  });

  profile.projects.forEach((entry) => {
    items.push({
      title: `Project - ${entry.name}`,
      content: `${entry.name}. ${entry.tagline}. Tech: ${entry.stack.join(", ")}. ${entry.highlights.join(" ")}`,
    });
  });

  items.push({
    title: "Certifications",
    content: profile.certifications.join("; "),
  });

  items.push({
    title: "Achievements",
    content: profile.achievements.join("; "),
  });

  return items;
}

function buildAboutAnswer() {
  return `${profile.name} is a ${profile.headline}. ${profile.summary} He has strong hands-on experience in enterprise development, AI systems, cloud infrastructure, and automation.`;
}

function buildRecruiterSummaryAnswer() {
  return [
    `${profile.name} — ${profile.headline}`,
    `Location: ${profile.location}`,
    `Experience: 3+ years (including ${profile.experience[0]?.company})`,
    `Education: ${profile.education[0]?.degree} (${profile.education[0]?.when})`,
    `Core strengths: Python, AI/ML, Cloud, DevOps, and production-grade system reliability.`,
  ].join("\n");
}

function buildSkillsAnswer() {
  const ml = profile.skills["ML & AI"].slice(0, 6).join(", ");
  const cloud = profile.skills["Cloud & Data"].slice(0, 6).join(", ");
  const devops = profile.skills["DevOps & Tools"].slice(0, 6).join(", ");

  return `Top strengths from the portfolio:\n• ML & AI: ${ml}\n• Cloud & Data: ${cloud}\n• DevOps & Tools: ${devops}`;
}

function buildExperienceAnswer() {
  const latest = profile.experience[0];
  return `Durga has 3+ years of professional experience. Most recent role: ${latest.title} at ${latest.company} (${latest.when}, ${latest.where}). Core impact includes troubleshooting complex releases, improving reliability, and building efficient technical solutions.`;
}

function buildEducationAnswer() {
  const current = profile.education[0];
  const previous = profile.education[1];
  return `Education summary:\n• ${current.degree}, ${current.school} (${current.when})\n• ${previous.degree}, ${previous.school} (${previous.when})`;
}

function buildProjectsAnswer() {
  return profile.projects
    .map(
      (project) =>
        `${project.name}\nTech: ${project.stack.join(" · ")}\n• ${project.highlights.join("\n• ")}`
    )
    .join("\n\n");
}

function buildAchievementsAnswer() {
  return `Key achievements:\n• ${profile.achievements.join("\n• ")}`;
}

function buildCertificationsAnswer() {
  return `Certifications:\n• ${profile.certifications.join("\n• ")}`;
}

function buildWhyHireAnswer() {
  return [
    "Why Durga is a strong hire:",
    "• Proven enterprise experience with production systems and issue resolution.",
    "• Strong AI/ML project execution with measurable impact (accuracy and hallucination reduction).",
    "• Cloud + DevOps capability for deployment, automation, and reliability.",
    "• Good blend of academic depth (M.S. CS AI track) and industry delivery.",
  ].join("\n");
}

function buildRoleFitAnswer() {
  return "Based on this portfolio, Durga is a strong fit for Software Engineer, ML Engineer, AI Engineer, and Cloud/DevOps-leaning developer roles where Python, data systems, and production reliability are important.";
}

function buildProjectSpecificAnswer(query: string) {
  const q = normalize(query);
  const queryTokens = q.split(" ").filter((token) => token.length > 2);
  const match = profile.projects
    .map((project) => {
      const projectText = normalize(`${project.name} ${project.tagline} ${project.highlights.join(" ")}`);
      const overlap = queryTokens.reduce((count, token) => (projectText.includes(token) ? count + 1 : count), 0);
      return { project, overlap };
    })
    .sort((a, b) => b.overlap - a.overlap)[0];

  if (!match || match.overlap === 0) return null;

  return `${match.project.name}: ${match.project.tagline}\nTech: ${match.project.stack.join(" · ")}\n• ${match.project.highlights.join("\n• ")}`;
}

function isAllProjectsQuestion(query: string) {
  return (
    hasAny(query, ["each project", "all projects", "every project", "all the projects"]) ||
    (hasAny(query, ["what did he do", "what he did", "work done", "explain"]) && hasAny(query, ["project", "projects"]))
  );
}

function getBotReply(input: string, knowledgeBase: KnowledgeItem[]) {
  const queryTokens = toTokens(input);
  const queryNormalized = normalize(input);

  if (hasAny(queryNormalized, ["tell me about durga", "about durga", "who is durga", "introduce durga", "about him"])) {
    return buildAboutAnswer();
  }

  if (hasAny(queryNormalized, ["summarize", "summary", "quick overview", "profile overview", "resume summary"])) {
    return buildRecruiterSummaryAnswer();
  }

  if (hasAny(queryNormalized, ["why hire", "why should we hire", "fit for", "good fit", "suitable for", "strength as candidate"])) {
    return buildWhyHireAnswer();
  }

  if (hasAny(queryNormalized, ["tell me about durga", "about durga", "who is durga", "introduce durga", "about him", "who are you"])) {
    return buildAboutAnswer();
  }

  if (hasAny(queryNormalized, ["skills", "strength", "tech stack", "technologies", "what can he do"])) {
    return buildSkillsAnswer();
  }

  if (hasAny(queryNormalized, ["experience", "work history", "worked", "tcs", "intern"])) {
    return buildExperienceAnswer();
  }

  if (hasAny(queryNormalized, ["education", "degree", "university", "binghamton"])) {
    return buildEducationAnswer();
  }

  if (isAllProjectsQuestion(queryNormalized)) {
    return `Here is what Durga did in each project:\n\n${buildProjectsAnswer()}`;
  }

  if (hasAny(queryNormalized, ["project", "portfolio project", "featured project"])) {
    const specificProject = buildProjectSpecificAnswer(queryNormalized);
    if (specificProject && !hasAny(queryNormalized, ["all", "each", "every"])) return specificProject;
    return `Here are the featured projects from the portfolio:\n\n${buildProjectsAnswer()}`;
  }

  if (hasAny(queryNormalized, ["achievement", "award", "recognition"])) {
    return buildAchievementsAnswer();
  }

  if (hasAny(queryNormalized, ["certification", "certificate", "certifications"])) {
    return buildCertificationsAnswer();
  }

  if (hasAny(queryNormalized, ["role", "fit", "hire", "position", "job"])) {
    return buildRoleFitAnswer();
  }

  if (hasAny(queryNormalized, ["contact", "email", "phone", "reach", "linkedin"])) {
    return `You can contact Durga at ${profile.email} or ${profile.phone}. LinkedIn: https://www.linkedin.com/in/${profile.linkedin}`;
  }

  const ranked = knowledgeBase
    .map((item) => {
      const text = normalize(`${item.title} ${item.content}`);
      const textTokens = new Set(text.split(" "));

      let score = 0;
      queryTokens.forEach((token) => {
        if (textTokens.has(token)) score += 2;
        if (text.includes(token)) score += 1;
      });

      if (queryNormalized.length > 3 && text.includes(queryNormalized)) {
        score += 8;
      }

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (!ranked.length) {
    return "I can answer based on this portfolio data. Try questions like: 'Tell me about Durga', 'What did he do in each project?', 'Why is he a good fit for ML roles?', 'Summarize his experience', or 'How can I contact him?'";
  }

  const lines = ranked.map(({ item }) => `• ${item.title}: ${getSnippet(item.content)}`);
  return `Here’s what I found from this portfolio:\n${lines.join("\n")}`;
}

export function ChatbotWidget() {
  const knowledgeBase = useMemo(() => buildKnowledgeBase(), []);
  const initialBotMessage = useMemo<Message>(
    () => ({
      role: "bot",
      text: `Hi! I'm ${profile.name}'s portfolio assistant. Ask me about projects, skills, experience, education, or contact info.`,
    }),
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);

  useEffect(() => {
    setIsOpen(false);
    setInput("");
    setMessages([initialBotMessage]);
  }, [initialBotMessage]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;

    const userMessage: Message = { role: "user", text };
    const botMessage: Message = { role: "bot", text: getBotReply(text, knowledgeBase) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-[90]">
      {isOpen ? (
        <div className="w-[340px] rounded-2xl border border-zinc-700 bg-zinc-900/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Portfolio Assistant</p>
              <p className="text-xs text-zinc-400">Ask about Durga's profile</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          <div className="border-b border-zinc-800 px-3 py-2">
            <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Quick Navigate</p>
            <div className="flex flex-wrap gap-1.5">
              {quickSections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-200 no-underline hover:border-blue-600 hover:text-white"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, index) => (
              <div
                key={`${m.role}-${index}`}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] whitespace-pre-line rounded-2xl bg-blue-600 px-3 py-2 text-sm text-white"
                      : "max-w-[85%] whitespace-pre-line rounded-2xl bg-zinc-800 px-3 py-2 text-sm text-zinc-100"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-800 p-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask me something..."
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!canSend}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:opacity-90"
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
