import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, TrendingUp, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Innovation First",
    description: "Cutting-edge technology solutions"
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "Strategic insights that matter"
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our mission"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid development cycles"
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Our Agency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking digital agency specializing in software development 
            and marketing innovation. Our team of experts combines technical excellence 
            with creative strategy to deliver solutions that drive real business growth.
          </p>
        </motion.div>

        {/* Glowing divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-full max-w-md mx-auto mb-16 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-neon-blue/50 transition-all group"
            >
              <feature.icon className="w-12 h-12 text-neon-blue mb-4 group-hover:text-neon-violet transition-colors" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;