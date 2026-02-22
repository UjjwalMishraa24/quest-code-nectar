import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-mono text-primary mb-4 tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
            <span className="text-foreground">Your </span>
            <span className="text-gradient">Name</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2 font-medium">
            B.Tech CSE Student · Developer · Problem Solver
          </p>

          <p className="text-base text-muted-foreground/70 max-w-lg mx-auto mb-10 italic">
            "Turning curiosity into code and ideas into reality."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              Download Resume
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-5">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-muted-foreground animate-float" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
