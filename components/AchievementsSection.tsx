"use client";

import { profile } from "@/data/profile";
import { Award, Zap } from "lucide-react";

export function AchievementsSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Achievements & Recognition
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {profile.achievements.map((achievement, idx) => (
          <div
            key={idx}
            className="group rounded-xl border border-zinc-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm-pro transition-all duration-500 hover:shadow-md-pro hover:border-orange-300 hover:-translate-y-1 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900 dark:hover:border-orange-700 overflow-hidden relative"
          >
            {/* Hover reveal background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/5 transition-all duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200 group-hover:bg-orange-300 transition duration-300 dark:bg-orange-900 dark:group-hover:bg-orange-800">
                  <Award size={20} className="text-orange-700 dark:text-orange-200 transition" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-white transition">
                  {achievement}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {profile.certifications && profile.certifications.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {profile.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:shadow-md hover:from-green-100 hover:to-emerald-100 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-800 dark:text-zinc-200 dark:hover:from-zinc-700 dark:hover:to-zinc-700"
              >
                <Zap size={16} className="text-green-600 dark:text-green-400" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
