import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio showcasing projects, skills, and experience with smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Morse Code Interpreter",
    description: "Arduino-based hardware project that converts text input into Morse code signals using LEDs and a buzzer.",
    tech: ["Arduino", "C++", "Embedded Systems"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "DSA Visualizer",
    description: "An interactive web app that visualizes common data structures and sorting algorithms step by step.",
    tech: ["JavaScript", "HTML", "CSS", "Algorithms"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Tutor Connect",
    description: "A platform concept connecting students with tutors for personalized learning sessions. Currently in development.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com",
    live: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-xl glass hover:border-primary/30 transition-all duration-300 hover:glow"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-mono"
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
