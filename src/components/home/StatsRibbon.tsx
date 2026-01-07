import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Beaker, Clock, Leaf, Award } from "lucide-react";

const stats = [
  { icon: Beaker, value: "300+", label: "Bio-Solutions" },
  { icon: Clock, value: "15+", label: "Years R&D" },
  { icon: Leaf, value: "100%", label: "Eco-Friendly" },
  { icon: Award, value: "ISO", label: "Global Standards" },
];

export const StatsRibbon = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-muted py-12 md:py-16">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                <stat.icon className="h-7 w-7 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
