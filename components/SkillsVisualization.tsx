"use client";

import { profile } from "@/data/profile";
import { TechIcon } from "./TechIcon";
import { useState } from "react";

const categoryColors: Record<string, string> = {
  "Languages": "text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30 hover:bg-orange-100/50 dark:hover:bg-orange-900/30",
  "ML & AI": "text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30 hover:bg-purple-100/50 dark:hover:bg-purple-900/30",
  "Cloud & Data": "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100/50 dark:hover:bg-blue-900/30",
  "DevOps & Tools": "text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30",
  "Web & Other": "text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100/50 dark:hover:bg-rose-900/30"
};

export function SkillsVisualization() {
  const [activeTab, setActiveTab] = useState("Languages");
  const categories = Object.keys(profile.skills);
  const activeSkills = profile.skills[activeTab as keyof typeof profile.skills];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-200 dark:border-zinc-800">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 ${
              activeTab === category
                ? `${categoryColors[category]}`
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            {category}
            {activeTab === category && (
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                category === "Languages" ? "from-orange-500 to-amber-500" :
                category === "ML & AI" ? "from-purple-500 to-pink-500" :
                category === "Cloud & Data" ? "from-blue-500 to-cyan-500" :
                category === "DevOps & Tools" ? "from-emerald-500 to-teal-500" :
                "from-rose-500 to-red-500"
              }`} />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in-up">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-6">
            {activeSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 transition-all hover:opacity-70 group cursor-default"
              >
                <div className={`text-2xl group-hover:scale-110 transition-transform ${
                  activeTab === "Languages" ? "text-orange-600 dark:text-orange-400" :
                  activeTab === "ML & AI" ? "text-purple-600 dark:text-purple-400" :
                  activeTab === "Cloud & Data" ? "text-blue-600 dark:text-blue-400" :
                  activeTab === "DevOps & Tools" ? "text-emerald-600 dark:text-emerald-400" :
                  "text-rose-600 dark:text-rose-400"
                }`}>
                  <TechIcon tech={skill} size={24} />
                </div>
                <span className={`text-sm font-medium ${
                  activeTab === "Languages" ? "text-orange-900 dark:text-orange-100" :
                  activeTab === "ML & AI" ? "text-purple-900 dark:text-purple-100" :
                  activeTab === "Cloud & Data" ? "text-blue-900 dark:text-blue-100" :
                  activeTab === "DevOps & Tools" ? "text-emerald-900 dark:text-emerald-100" :
                  "text-rose-900 dark:text-rose-100"
                }`}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
