import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Megaphone, Palette, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and mobile applications with AI integration",
    features: ["Web Applications", "Mobile Apps", "AI Integration", "Cloud Solutions"]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies that drive results",
    features: ["SEO Optimization", "PPC Campaigns", "Social Media", "Brand Strategy"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Automation",
    description: "Data-driven insights and workflow optimization",
    features: ["Analytics Setup", "Process Automation", "Performance Tracking", "Reporting"]
  }
];

const Services = () => {
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full hover:border-neon-blue/50 transition-all group overflow-hidden">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-neon-blue" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;