import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Terminal, Cpu, Zap } from "lucide-react";

const projects = [
  {
    title: "J.A.R.V.I.S.",
    description: "A personal AI Assistant built with Python — featuring NASA API integration for meteorological data, music control, chess player, video player, and voice-controlled automation.",
    tech: ["Python", "NASA API", "AI/ML", "Automation"],
    github: "https://github.com/UjjwalMishraa24/JARVIS",
    live: null,
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio showcasing projects, skills, and experience with smooth animations and sci-fi aesthetics.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/UjjwalMishraa24",
    live: "#",
    featured: false,
  },
  {
    title: "Morse Code Interpreter",
    description: "Arduino-based hardware project that converts text input into Morse code signals using LEDs and a buzzer.",
    tech: ["Arduino", "C++", "Embedded Systems"],
    github: "https://github.com/UjjwalMishraa24",
    live: null,
    featured: false,
  },
  {
    title: "DSA Visualizer",
    description: "An interactive web app that visualizes common data structures and sorting algorithms step by step.",
    tech: ["JavaScript", "HTML", "CSS", "Algorithms"],
    github: "https://github.com/UjjwalMishraa24",
    live: "#",
    featured: false,
  },
  {
    title: "Tutor Connect",
    description: "A platform concept connecting students with tutors for personalized learning sessions. Currently in development.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com/UjjwalMishraa24",
    live: null,
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Terminal size={20} className="text-primary" />
            <span className="text-xs font-mono text-primary tracking-wider uppercase">// projects.map()</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10 neon-glow" />

          {/* Featured JARVIS project */}
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="group p-6 md:p-8 rounded-2xl glass-heavy border-glow mb-8 hover:neon-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <Cpu size={24} className="text-primary" />
                <span className="text-xs font-mono text-accent px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 uppercase tracking-wider">Featured</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          ))}

          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group p-6 rounded-xl glass hover:border-glow transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={16} className="text-primary" />
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors font-display tracking-wide">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-primary/5 border border-primary/10 text-primary font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
