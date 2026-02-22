import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send, Terminal } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Terminal size={20} className="text-primary" />
            <span className="text-xs font-mono text-primary tracking-wider uppercase">// establish_connection()</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto neon-glow" />

          <p className="text-muted-foreground mb-10 text-lg">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
            Feel free to reach out!
          </p>

          <a
            href="mailto:Ujjwalmishraa24@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all neon-glow mb-10 font-display text-sm tracking-wider uppercase"
          >
            <Send size={18} />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-5 mt-4">
            {[
              { icon: Mail, href: "mailto:Ujjwalmishraa24@gmail.com", label: "Email" },
              { icon: Github, href: "https://github.com/UjjwalMishraa24", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-mishra-7b65aa323/", label: "LinkedIn" },
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
      </div>
    </section>
  );
};

export default ContactSection;
