import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Digital Agency</h3>
            <p className="text-muted-foreground mb-4">
              Transforming ideas into digital excellence through innovative software and marketing solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-neon-blue/20 hover:text-neon-blue transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-neon-blue/20 hover:text-neon-blue transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-neon-blue/20 hover:text-neon-blue transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-neon-blue/20 hover:text-neon-blue transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;