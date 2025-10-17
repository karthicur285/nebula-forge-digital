import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart",
    content: "Their team delivered an exceptional product that exceeded our expectations. The attention to detail and technical expertise is unmatched.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Director, GrowthCo",
    content: "Working with them transformed our digital presence. Our conversion rates increased by 200% within the first quarter.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "Founder, InnovateLab",
    content: "Professional, responsive, and incredibly talented. They turned our vision into reality with their innovative solutions.",
    rating: 5
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-violet/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-card border-neon-blue/30">
              <CardContent className="p-8 md:p-12">
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-neon-blue text-neon-blue" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="text-center">
                  <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-neon-blue/50 hover:bg-neon-blue/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-neon-blue/50 hover:bg-neon-blue/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-neon-blue w-8"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;