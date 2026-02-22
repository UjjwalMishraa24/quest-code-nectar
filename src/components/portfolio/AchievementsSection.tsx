import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, BookCheck, Terminal, Zap } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "Participated in multiple hackathons and coding competitions" },
  { icon: Medal, text: "IEEE PR Team Coordinator – student leadership role" },
  { icon: BookCheck, text: "Completed online courses in Web Development and DSA" },
  { icon: Trophy, text: "Event anchor at Synapse – college tech fest" },
  { icon: Zap, text: "Built a fully functional AI assistant (J.A.R.V.I.S.) with Python" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Terminal size={20} className="text-primary" />
            <span className="text-xs font-mono text-primary tracking-wider uppercase">// achievements.list()</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10 neon-glow" />

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl glass hover:border-glow transition-all"
              >
                <item.icon className="text-primary mt-0.5 shrink-0" size={20} />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
