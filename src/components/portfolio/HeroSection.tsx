import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
      />

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Terminal tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-glow mb-6"
            >
              <Terminal size={14} className="text-primary" />
              <span className="text-xs font-mono text-primary tracking-wider">SYSTEM.INIT — WELCOME</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 font-display">
              <span className="text-foreground">UJJWAL</span>
              <br />
              <span className="text-gradient">MISHRA</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-2 font-medium">
              B.Tech CSE Student · Developer · Problem Solver
            </p>

            <p className="text-base text-muted-foreground/70 max-w-lg mb-8 font-mono text-sm">
              {">"} Turning curiosity into code and ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="group px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all neon-glow font-display text-sm tracking-wider uppercase"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-3 rounded-lg border border-primary/30 text-foreground font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all font-display text-sm tracking-wider uppercase"
              >
                Download Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                { icon: Github, href: "https://github.com/UjjwalMishraa24", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-mishra-7b65aa323/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:Ujjwalmishraa24@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:neon-glow transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile photo with sci-fi frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-accent/10"
            />

            {/* Photo container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 neon-glow">
              <img
                src={profilePhoto}
                alt="Ujjwal Mishra"
                className="w-full h-full object-cover"
              />
              {/* Overlay scan effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            </div>

            {/* Status badge */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full glass border-glow"
            >
              <span className="text-xs font-mono text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                ONLINE
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary/50 animate-float" size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
