"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const focusAreas = [
    "AI Products",
    "Machine Learning Experimentation",
    "Developer Tools",
    "Real-world Impact Projects",
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative border border-border bg-card/50 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-muted border-4 border-background shadow-2xl mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-6xl text-muted-foreground/30 font-bold uppercase">KM</span>
                {/* <img src="/avatar.jpg" alt="Kavya Madani" className="w-full h-full object-cover" /> */}
              </div>
              <h3 className="text-2xl font-bold mb-2">Kavya Madani</h3>
              <p className="text-primary font-medium tracking-wide">B.Tech - AI & ML</p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">2025-2029</span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-semibold">AI Developer</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block w-fit mb-4">
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">About Me</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Driven by <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Intelligence</span></h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kavya Madani is a B.Tech student in Artificial Intelligence and Machine Learning passionate about building AI-driven platforms, solving real-world problems, and participating in hackathons.
            </p>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-4 border-b border-border pb-2">Focus Areas</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
