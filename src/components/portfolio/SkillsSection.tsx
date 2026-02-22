import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Braces, Wrench, Brain, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Braces,
    skills: ["C / C++", "Python", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: ["React", "Next.js", "Node.js", "Bun", "Tailwind CSS", "Git & GitHub", "Linux", "Neovim", "Tmux"],
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: ["Data Structures & Algorithms", "OOP", "Web Development", "OS & Networking"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Terminal size={20} className="text-primary" />
            <span className="text-xs font-mono text-primary tracking-wider uppercase">// tech_stack.config</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10 neon-glow" />

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 rounded-xl glass-heavy hover:border-glow transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground text-lg font-display tracking-wider">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-primary/5 border border-primary/10 text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default font-mono text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
