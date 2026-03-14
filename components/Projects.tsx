"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Agri AI",
    description: "An AI-powered agriculture platform that detects plant diseases from leaf images using machine learning and provides treatment suggestions.",
    image: "/placeholder-agri.jpg",
    tags: ["Python", "Machine Learning", "AI", "Computer Vision"],
    github: "https://github.com/harshjogel/leaf-light-advisor",
    live: null,
  },
  {
    title: "LostIt - Campus Lost & Found",
    description: "A platform where students can post lost or found items and connect with others to recover belongings.",
    image: "/placeholder-lostit.jpg",
    tags: ["Next.js", "React", "Supabase", "TailwindCSS"],
    github: null,
    live: "https://v0-finditback.vercel.app/",
  },
  {
    title: "Smart Link Hub",
    description: "Intelligent Link-in-Bio Platform built during JPD Hub Hackathon 2026. Features time-based, device-based, and location-based link routing.",
    image: "/placeholder-smartlink.jpg",
    tags: ["Next.js", "TypeScript", "Routing Optimization"],
    github: "https://github.com/25cs056-hardik/smart-link-hub",
    live: "https://smart-link-hub-peach.vercel.app",
  },
  {
    title: "CampusKart",
    description: "Multi-Service Student Platform that connects students with rickshaw drivers, restaurant owners, and hostel wardens.",
    image: "/placeholder-campuskart.jpg",
    tags: ["React", "Node.js", "Web App"],
    github: null,
    live: "https://playful-faloodeh-72f8f4.netlify.app",
  },
  {
    title: "Quick QR Class",
    description: "Software-based QR attendance system built for Smart India Hackathon, eliminating hardware requirements.",
    image: "/placeholder-qr.jpg",
    tags: ["Attendance System", "QR Code", "Mobile Ready"],
    github: "https://github.com/hardikparmar2117/quick-qr-class",
    live: "https://quick-qr-class.lovable.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative h-56 bg-gradient-to-br from-primary/10 to-purple-600/10 w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                {/* Fallback pattern instead of image */}
                <div className="text-4xl font-black text-muted-foreground/20 opacity-50 absolute rotate-[-10deg] scale-150 transition-transform duration-700 group-hover:scale-110 group-hover:text-primary/20">
                  {project.title.split(' ')[0]}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3 mb-6 min-h-[72px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="bg-primary/10 text-primary border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto border-t border-border/50 pt-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" /> Code
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors ml-auto"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
