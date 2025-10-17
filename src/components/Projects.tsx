import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with AI recommendations",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    gradient: "from-neon-blue to-neon-violet"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics platform with real-time data visualization",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    gradient: "from-neon-violet to-neon-cyan"
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking with social features",
    tags: ["React Native", "Firebase", "Machine Learning"],
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    title: "Marketing Automation",
    description: "Automated campaign management and analytics",
    tags: ["Python", "AWS", "React", "API Integration"],
    gradient: "from-neon-blue to-neon-cyan"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our recent work and successful client collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full hover:border-neon-blue/50 transition-all group overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity`} />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-neon-blue/50 hover:bg-neon-blue/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:text-neon-violet"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;