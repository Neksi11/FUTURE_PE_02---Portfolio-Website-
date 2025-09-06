import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";
import heroImage from "@/assets/hero-elegant.jpg";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Elegant fade-up animation for elements
    const elements = hero.querySelectorAll('.fade-up');
    elements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.animationDelay = `${index * 150}ms`;
        el.classList.add('animate-fade-up');
      }, 100);
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center hero-grid overflow-hidden"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant abstract composition" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-subtle"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-elegant-platinum/30 rotate-45 floating-element"></div>
        <div className="absolute bottom-1/3 right-16 w-16 h-16 bg-elegant-charcoal/10 rounded-full floating-element"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-elegant-ash/20 floating-element"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Premium Badge */}
          <div className="inline-flex items-center mb-8 fade-up">
            <div className="flex items-center space-x-2 px-4 py-2 glass-minimal rounded-full">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">Premium Digital Experiences</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-fluid-8xl font-semibold mb-8 fade-up leading-[0.85]">
            <span className="block">Design Systems</span>
            <span className="block italic text-elegant-ash">Elevated</span>
          </h1>

          {/* Sophisticated Subheadline */}
          <p className="text-fluid-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed fade-up font-light">
            Crafting intelligent design systems and premium user experiences 
            through meticulous attention to detail, advanced motion design, 
            and cutting-edge frontend architecture.
          </p>

          {/* Elegant CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-up">
            <Button 
              size="lg" 
              className="elegant-hover shadow-elegant px-10 py-6 text-lg font-medium tracking-wide rounded-xl"
              asChild
            >
              <a href="#work">
                View Selected Work
                <ArrowRight className="w-5 h-5 ml-3" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-minimal px-10 py-6 text-lg font-medium tracking-wide rounded-xl elegant-hover border-elegant-platinum/40"
              asChild
            >
              <a href="#contact">Let's Collaborate</a>
            </Button>
          </div>

          {/* Refined Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto fade-up">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-semibold mb-2 elegant-hover">50+</div>
              <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">Projects</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-semibold mb-2 elegant-hover">5+</div>
              <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">Years</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-semibold mb-2 elegant-hover">95%</div>
              <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-semibold mb-2 elegant-hover">24/7</div>
              <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-up">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-current to-transparent"></div>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}