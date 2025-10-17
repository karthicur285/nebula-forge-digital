import { motion } from "framer-motion";
import { Palette, Users, Layout, TestTube, Figma, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const processSteps = [
  { 
    icon: Users, 
    title: "Research", 
    description: "User interviews, competitor analysis, and market research" 
  },
  { 
    icon: Layout, 
    title: "Wireframing", 
    description: "Low-fidelity sketches and information architecture" 
  },
  { 
    icon: Palette, 
    title: "Prototyping", 
    description: "Interactive high-fidelity mockups and design systems" 
  },
  { 
    icon: TestTube, 
    title: "Testing", 
    description: "User testing, iteration, and validation" 
  }
];

const tools = [
  "Figma", "Framer", "Adobe XD", "Sketch", "InVision", "Principle"
];

const portfolioItems = [
  {
    title: "SaaS Dashboard",
    description: "Analytics platform with complex data visualization",
    color: "from-neon-blue/20 to-neon-violet/20"
  },
  {
    title: "E-Commerce App",
    description: "Mobile shopping experience with seamless checkout",
    color: "from-neon-violet/20 to-neon-cyan/20"
  },
  {
    title: "Fintech Platform",
    description: "Banking interface with security and accessibility focus",
    color: "from-neon-cyan/20 to-neon-blue/20"
  }
];

const UIUXDesign = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "UI/UX Design" }
          ]} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Designs That <span className="text-gradient">Inspire</span> and{" "}
              <span className="text-gradient">Engage</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We craft interfaces that are beautiful, intuitive, and human-centered
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Research → Wireframing → Prototyping → Testing
            </p>
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
                <div className="glass-card p-6 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center text-sm font-bold">
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

      {/* Tools Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Design <span className="text-gradient">Tools</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card px-6 py-3 hover:border-neon-cyan/50 transition-all cursor-default group"
              >
                <span className="font-medium flex items-center gap-2">
                  <Figma className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                  {tool}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Carousel Section */}
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
              Featured <span className="text-gradient">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-neon-cyan/50 transition-all group overflow-hidden cursor-pointer">
                  <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <Sparkles className="w-12 h-12 text-neon-cyan opacity-50" />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Design Something <span className="text-gradient">Beautiful</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your ideas into stunning, user-friendly interfaces
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Let's Design Something Beautiful
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXDesign;
