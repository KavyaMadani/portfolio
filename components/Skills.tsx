"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "HTML", level: 95 },
    ],
  },
  {
    category: "Technologies & Tools",
    items: [
      { name: "GitHub", level: 85 },
      { name: "Supabase", level: 75 },
      { name: "FlutterFlow", level: 70 },
      { name: "HackerRank", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Arsenal</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, x: catIdx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2 }}
              className="bg-card/40 backdrop-blur-lg border border-border p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-8 text-foreground pb-4 border-b border-border/50">
                {category.category}
              </h3>
              <div className="flex flex-col gap-6">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * skillIdx }}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + skillIdx * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
