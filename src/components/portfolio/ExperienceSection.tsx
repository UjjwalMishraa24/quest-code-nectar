import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "IEEE PR Team Coordinator",
    org: "IEEE Student Branch, USICT",
    period: "2024 – Present",
    description: "Leading the public relations team, managing event promotions, social media presence, and outreach campaigns.",
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
    description: "Pursuing a bachelor's degree with focus on software development, algorithms, and systems.",
  },
];

const TimelineItem = ({ item, index, isInView }: { item: typeof experiences[0]; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative pl-8 pb-8 last:pb-0 group"
  >
    <div className="absolute left-0 top-1 w-px h-full bg-border group-last:hidden" />
    <div className="absolute left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
    <div className="glass p-5 rounded-xl hover:border-primary/30 transition-colors">
      <div className="flex items-center gap-2 mb-1">
        <item.icon size={16} className="text-primary" />
        <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
      </div>
      <h3 className="font-semibold text-foreground">{item.title}</h3>
      <p className="text-sm text-primary/80 mb-2">{item.org}</p>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <h3 className="text-lg font-semibold text-foreground mb-6">Positions of Responsibility</h3>
          <div className="mb-10">
            {experiences.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} isInView={isInView} />
            ))}
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-6">Education</h3>
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
