import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiAmazon, SiDocker, SiPostgresql, SiMongodb, SiFigma, SiNextdotjs, SiVite } from "react-icons/si";

const techStack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiAmazon, name: "AWS", color: "#FF9900" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build exceptional solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                y: -10,
              }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-neon-blue/50 transition-all cursor-pointer group"
            >
              <tech.icon 
                className="w-12 h-12 transition-colors" 
                style={{ color: tech.color }}
              />
              <span className="text-sm font-medium group-hover:text-neon-blue transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;