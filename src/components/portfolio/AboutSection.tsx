import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BookOpen, Cpu } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm a Computer Science undergraduate at <span className="text-foreground font-medium">USICT, GGSIPU</span> who 
            enjoys building clean, functional software and learning how systems work under the hood. 
            From web apps to embedded systems, I love exploring how technology can solve real-world problems.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Currently diving deeper into <span className="text-foreground font-medium">full-stack development</span> and 
            <span className="text-foreground font-medium"> data structures & algorithms</span>, while constantly seeking 
            opportunities to grow through hackathons, open source, and collaborative projects.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Code2, title: "Builder", desc: "Love turning ideas into working products" },
              { icon: BookOpen, title: "Learner", desc: "Always exploring new tech and concepts" },
              { icon: Cpu, title: "Problem Solver", desc: "Enjoy algorithmic thinking and debugging" },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 rounded-xl glass hover:border-primary/30 transition-colors group"
              >
                <Icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
