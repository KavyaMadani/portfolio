"use client";

import { motion } from "framer-motion";
import { Github as GitIcon, Star, GitCommit, GitPullRequest, GitMerge } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Github() {
  const stats = [
    { label: "Repositories", value: "34+", icon: GitIcon },
    { label: "Stars", value: "120+", icon: Star },
    { label: "Commits (2025)", value: "1.2k+", icon: GitCommit },
    { label: "Pull Requests", value: "45+", icon: GitPullRequest },
  ];

  const languages = [
    { name: "Python", percentage: 45, color: "bg-blue-500" },
    { name: "TypeScript", percentage: 30, color: "bg-blue-400" },
    { name: "C++", percentage: 15, color: "bg-purple-500" },
    { name: "Other", percentage: 10, color: "bg-gray-500" },
  ];

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
              Open Source
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">GitHub Activity</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="https://github.com/KavyaMadani" target="_blank" className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>
                Follow on GitHub
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card/40 backdrop-blur-sm border border-border p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">{stat.label}</h4>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Contribution Graph Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="sm:col-span-2 bg-card/40 backdrop-blur-sm border border-border p-6 rounded-2xl flex flex-col justify-center overflow-x-auto"
            >
              <h4 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                <GitMerge className="w-4 h-4" /> Recent Contributions
              </h4>
              <div className="flex gap-1 min-w-[600px] mb-2">
                {Array.from({ length: 52 }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1 flex-1">
                    {Array.from({ length: 7 }).map((_, dayIdx) => {
                      // Use deterministic values instead of Math.random() to prevent hydration mismatches
                      const level = (weekIdx * 7 + dayIdx) % 5;
                      const bgColors = [
                        "bg-muted/30",
                        "bg-primary/20",
                        "bg-primary/40",
                        "bg-primary/70",
                        "bg-primary",
                      ];
                      return (
                        <div
                          key={dayIdx}
                          className={`w-full aspect-square rounded-[2px] ${bgColors[level]} transition-colors hover:ring-2 hover:ring-ring`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/40 backdrop-blur-sm border border-border p-8 rounded-2xl h-full flex flex-col"
          >
            <h3 className="text-xl font-bold mb-6">Top Languages</h3>
            
            <div className="flex gap-1 h-3 rounded-full overflow-hidden mb-8">
              {languages.map((lang, idx) => (
                <div key={idx} style={{ width: `${lang.percentage}%` }} className={lang.color} />
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${lang.color}`} />
                    <span className="font-medium text-foreground">{lang.name}</span>
                  </div>
                  <span className="text-muted-foreground">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
