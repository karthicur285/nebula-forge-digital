import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import yaLogo from "../assets/images/ya_white.png";


const desktopMenuItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/about" },
  // Services will be rendered as a dropdown
  { name: "Contact", href: "/contact" },
];

// mobile shows a flat list including service routes
const mobileMenuItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "#about" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Analytics & Automation", href: "/analytics-automation" },
  { name: "Software Development", href: "/software-development" },
  { name: "UI / UX Design", href: "/ui-ux-design" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "#blog" },
  { name: "Portfolio", href: "#projects" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // If this is an app route, navigate to it
    if (href.startsWith("/")) {
      // navigate in-app by changing location (BrowserRouter will handle it)
      window.location.href = href;
      return;
    }

    // Otherwise treat as an in-page anchor selector and scroll
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-16 glass-card backdrop-blur-xl border-b border-border/50"
          : "h-20 bg-background/60 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between relative">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="text-2xl font-bold text-gradient cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ><img src={yaLogo} // 👈 replace with your logo path
        alt="Yaglob Logo"
        className="h-8 w-auto"         // adjust height/width as needed
      />

        </motion.a>

  {/* Desktop Menu (centered) */}
  <div className="hidden md:flex items-center gap-8 justify-center w-full max-w-lg absolute left-1/2 transform -translate-x-1/2">
          {desktopMenuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 text-lg font-large group"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--neon-blue))] via-[hsl(var(--neon-violet))] to-[hsl(var(--neon-cyan))] group-hover:w-full transition-all duration-300 glow-blue" />
            </motion.a>
          ))}

          {/* Services dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className="relative flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors duration-300 text-lg font-large group"
                whileHover={{ scale: 1.03 }}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4 opacity-80" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--neon-blue))] via-[hsl(var(--neon-violet))] to-[hsl(var(--neon-cyan))] group-hover:w-full transition-all duration-300 glow-blue" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Marketing</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <a
                      href="/digital-marketing"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("/digital-marketing");
                      }}
                    >
                      Digital Marketing
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/analytics-automation"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("/analytics-automation");
                      }}
                    >
                      Analytics & Automation
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Software</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <a
                      href="/software-development"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("/software-development");
                      }}
                    >
                      Software Development
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/ui-ux-design"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("/ui-ux-design");
                      }}
                    >
                      UI / UX Design
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary hover:bg-primary/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] sm:w-[320px] bg-card/95 backdrop-blur-xl border-border/50"
          >
            <SheetHeader>
              <SheetTitle className="text-gradient text-left">
                <img src={yaLogo} // 👈 replace with your logo path
                alt="Yaglob Logo"
                className="h-8 w-auto mb-4"/>    
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
              {mobileMenuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-300 text-lg font-medium hover:translate-x-2 transform transition-transform"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};
