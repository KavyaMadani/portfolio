"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";

export function Hackathons() {
  const hackathons = [
    {
      title: "JPD Hub Hackathon 2026",
      event: "IIT Ropar Tech Fest",
      date: "2026",
      description: "Built Smart Link Hub. A platform with features like time-based, device-based, and location-based link routing.",
      badge: "Winner"
    },
    {
      title: "Smart India Hackathon",
      event: "SIH",
      date: "2025",
      description: "Built Quick QR Class attendance system, eliminating hardware requirement for schools and colleges.",
      badge: "Finalist"
    }
  ];

  return (
    <section id="hackathons" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Competitive Programming
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Hackathons</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {hackathons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mt-8 first:mt-0`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-lg text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform duration-500 group-hover:scale-125">
                <Trophy className="w-5 h-5" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-primary/5 hover:border-primary/50 relative">
                {/* Animated Badge */}
                <div className="absolute -top-4 -right-2 md:right-auto md:-left-2 z-20">
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold shadow-lg"
                  >
                    {item.badge}
                  </motion.div>
                </div>

                <div className="flex flex-col gap-2 relative z-10">
                  <div className="flex items-center text-primary mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time className="text-xs font-semibold tracking-wider uppercase">{item.date}</time>
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">{item.event}</h4>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
