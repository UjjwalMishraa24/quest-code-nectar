import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, BookCheck } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "Participated in multiple hackathons and coding competitions" },
  { icon: Medal, text: "IEEE PR Team Coordinator – student leadership role" },
  { icon: BookCheck, text: "Completed online courses in Web Development and DSA" },
  { icon: Trophy, text: "Event anchor at Synapse – college tech fest" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl glass hover:border-primary/30 transition-colors"
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
