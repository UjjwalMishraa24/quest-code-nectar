import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BookOpen, Cpu, Terminal } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Terminal size={20} className="text-primary" />
            <span className="text-xs font-mono text-primary tracking-wider uppercase">// about_me.tsx</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8 neon-glow" />

          <div className="glass-heavy p-6 md:p-8 rounded-2xl mb-8">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I'm a Computer Science undergraduate at <span className="text-foreground font-semibold">USICT, GGSIPU</span> who
              enjoys building clean, functional software and learning how systems work under the hood.
              From web apps to embedded systems and AI assistants, I love exploring how technology can solve real-world problems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Currently diving deeper into <span className="text-foreground font-semibold">full-stack development</span> and
              <span className="text-foreground font-semibold"> data structures & algorithms</span>, while constantly seeking
              opportunities to grow through hackathons, open source, and collaborative projects.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10 w-fit">
              <span className="text-primary font-mono text-sm font-semibold">$ neofetch</span>
              <span className="text-muted-foreground font-mono text-sm">→ I USE ARCH BTW 🐧</span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mt-4">
              I'm a proud <span className="text-foreground font-semibold">Linux enthusiast</span> — Arch Linux is my daily driver. 
              I live in the terminal with <span className="text-foreground font-semibold">Neovim + Tmux</span>, and I believe 
              the command line is where the real magic happens.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Code2, title: "Builder", desc: "Love turning ideas into working products" },
              { icon: BookOpen, title: "Learner", desc: "Always exploring new tech and concepts" },
              { icon: Cpu, title: "Problem Solver", desc: "Enjoy algorithmic thinking and debugging" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-xl glass hover:border-glow transition-all group cursor-default"
              >
                <Icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="font-semibold text-foreground mb-1 font-display text-sm tracking-wider">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
