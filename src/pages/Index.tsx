import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <TechStack />
      <div id="projects">
        <Projects />
      </div>
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;