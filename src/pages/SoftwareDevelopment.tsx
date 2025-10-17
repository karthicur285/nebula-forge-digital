import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Puzzle, Search, Palette, Rocket, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: Code2,
    title: "Web Applications",
    description: "Modern, scalable web apps built with cutting-edge frameworks"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions for iOS and Android"
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Intelligent systems powered by machine learning and AI"
  },
  {
    icon: Puzzle,
    title: "API Integration",
    description: "Seamless third-party integrations and custom API development"
  }
];

const processSteps = [
  { icon: Search, title: "Research", description: "Deep dive into requirements and market analysis" },
  { icon: Palette, title: "Design", description: "User-centric wireframes and prototypes" },
  { icon: Code2, title: "Development", description: "Agile development with regular iterations" },
  { icon: Rocket, title: "Deployment", description: "Launch and continuous monitoring" }
];

const techStack = [
  "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "MongoDB"
];

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          {/* <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Software Development" }
          ]} /> */}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center" 
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building <span className="text-gradient">Scalable</span> and{" "}
              <span className="text-gradient">Intelligent</span> Software Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From web apps to AI-driven systems — we craft tailored digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-neon-blue/50 transition-all group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <capability.icon className="w-7 h-7 text-neon-blue" />
                    </div>
                    <CardTitle>{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-violet/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-violet flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tech Stack <span className="text-gradient">Highlights</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card px-6 py-3 hover:border-neon-cyan/50 transition-all cursor-default"
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your <span className="text-gradient">Next Product</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's turn your vision into reality with cutting-edge technology
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Let's Build Your Next Product
                <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
