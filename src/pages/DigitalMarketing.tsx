import { motion } from "framer-motion";
import { Search, Target, TrendingUp, Users, BarChart3, Lightbulb, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on search engines with strategic SEO"
  },
  {
    icon: Target,
    title: "SEM & PPC",
    description: "Targeted advertising campaigns that convert"
  },
  {
    icon: Lightbulb,
    title: "Branding",
    description: "Build a memorable brand identity"
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms"
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    description: "Compelling content that drives results"
  }
];

const approach = [
  { icon: BarChart3, title: "Data-Driven", description: "Analytics-backed strategies for measurable results" },
  { icon: Lightbulb, title: "Creative", description: "Innovative campaigns that stand out" },
  { icon: TrendingUp, title: "Consistent", description: "Sustained growth through ongoing optimization" }
];

const caseStudies = [
  {
    title: "E-Commerce Growth",
    metric: "300% ROI",
    description: "Boosted online sales through targeted PPC and SEO strategy",
    tags: ["SEO", "PPC", "E-Commerce"]
  },
  {
    title: "Brand Awareness",
    metric: "2M+ Reach",
    description: "Built social media presence from scratch for a tech startup",
    tags: ["Social Media", "Content", "Branding"]
  },
  {
    title: "Lead Generation",
    metric: "5x Increase",
    description: "Optimized conversion funnels and landing pages",
    tags: ["SEM", "Conversion", "Analytics"]
  }
];

const DigitalMarketing = () => {
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
            { label: "Digital Marketing" }
          ]} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Amplify Your Brand with{" "}
              <span className="text-gradient">Data-Driven Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We help your business grow with precision targeting and creative strategies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="text-gradient">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-neon-violet/50 transition-all group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-neon-violet" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data + Creativity + Consistency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-neon-cyan/50 transition-all group text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              Case <span className="text-gradient">Studies</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-neon-violet/50 transition-all group overflow-hidden">
                  <CardHeader>
                    <div className="text-4xl font-bold text-gradient mb-2">
                      {study.metric}
                    </div>
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription>{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-neon-violet/10 text-neon-violet border border-neon-violet/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to <span className="text-gradient">Boost Your Online Presence</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a marketing strategy that drives real results
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Boost Your Online Presence
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

export default DigitalMarketing;
