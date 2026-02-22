import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Shield, Mic, Terminal, Wrench } from "lucide-react";

const experiences = [
  {
    icon: Shield,
    title: "Patent Administrator – IIC Atal Incubation Center",
    org: "USICT, GGSIPU",
    period: "2024 – Present",
    description: "Serving as Patent Administrator at the Institution's Innovation Council Atal Incubation Center, managing patent documentation and innovation workflows.",
  },
  {
    icon: Wrench,
    title: "Treasurer – IDEA Club",
    org: "USICT, GGSIPU",
    period: "2024 – Present",
    description: "Managing the technical inventory of the club including 3D printers, advanced IoT devices, and more. Handling finances and procurement for technical resources.",
  },
  {
    icon: Briefcase,
    title: "IEEE PR Team Coordinator",
    org: "IEEE Student Branch, USICT",
    period: "2024 – Present",
    description: "Leading the public relations team, managing event promotions, social media presence, and outreach campaigns.",
  },
  {
    icon: Mic,
    title: "Orator – Harita Environmental Club",
    org: "USICT, GGSIPU",
    period: "2024",
    description: "Served as an orator at Harita, the environmental awareness club, delivering speeches on sustainability and environmental consciousness.",
  },
  {
    icon: Award,
    title: "Event Anchor – Synapse Fest",
    org: "USICT, GGSIPU",
    period: "2024",
    description: "Hosted and anchored the college tech fest, engaging 500+ attendees across multiple events.",
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science & Engineering",
    org: "USICT, Guru Gobind Singh Indraprastha University",
    period: "2024 – 2028",
    description: "Pursuing a bachelor's degree with focus on software development, algorithms, and systems. Current CGPA: 8.5",
  },
];

const TimelineItem = ({ item, index, isInView }: { item: typeof experiences[0]; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-8 last:pb-0 group"
  >
    <div className="absolute left-0 top-1 w-px h-full bg-primary/20 group-last:hidden" />
    <div className="absolute left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background neon-glow" />
    <div className="glass-heavy p-5 rounded-xl hover:border-glow transition-all">
      <div className="flex items-center gap-2 mb-1">
        <item.icon size={16} className="text-primary" />
        <span className="text-xs font-mono text-primary/80">{item.period}</span>
      </div>
      <h3 className="font-semibold text-foreground font-display text-sm tracking-wide">{item.title}</h3>
      <p className="text-sm text-accent/80 mb-2">{item.org}</p>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Terminal size={20} className="text-primary" />
            <span className="text-xs font-mono text-primary tracking-wider uppercase">// experience.log</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10 neon-glow" />

          <h3 className="text-lg font-semibold text-foreground mb-6 font-display tracking-wider">Positions of Responsibility</h3>
          <div className="mb-10">
            {experiences.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} isInView={isInView} />
            ))}
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-6 font-display tracking-wider">Education</h3>
          <div>
            {education.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
