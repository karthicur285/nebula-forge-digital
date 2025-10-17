import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Zap, Database, Brain, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline workflows and eliminate manual tasks"
  }
];

const tools = [
  { name: "Power BI", category: "Visualization" },
  { name: "Tableau", category: "Visualization" },
  { name: "Python", category: "Analysis" },
  { name: "Zapier", category: "Automation" },
  { name: "Airtable", category: "Automation" },
  { name: "Google Data Studio", category: "Reporting" }
];

const features = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Connect multiple data sources into unified dashboards"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Machine learning models for pattern recognition"
  },
  {
    icon: Settings,
    title: "Custom Workflows",
    description: "Automated processes tailored to your business"
  }
];

const AnalyticsAutomation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-violet/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Analytics & Automation" }
          ]} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Turning Data into <span className="text-gradient">Smart Decisions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We empower businesses with analytics dashboards and automated workflows
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-neon-violet/50 transition-all group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <capability.icon className="w-7 h-7 text-neon-violet" />
                    </div>
                    <CardTitle className="text-2xl">{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tools We <span className="text-gradient">Use</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="glass-card hover:border-neon-cyan/50 transition-all cursor-default group text-center p-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <p className="font-medium text-sm">{tool.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              What We <span className="text-gradient">Deliver</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-neon-violet/50 transition-all group text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Dashboard Mockup Section */}
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
              Interactive <span className="text-gradient">Dashboards</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-4 hover:border-neon-cyan/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Metric {item}</p>
                      <p className="text-xs text-muted-foreground">Real-time data</p>
                    </div>
                  </div>
                  <div className="h-20 bg-gradient-to-br from-neon-blue/10 to-neon-violet/10 rounded-lg flex items-end p-2 gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-neon-cyan to-neon-blue rounded-sm"
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-violet/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Automate & Optimize</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your data into actionable insights and streamline your workflows
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Automate & Optimize Your Workflow
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

export default AnalyticsAutomation;
