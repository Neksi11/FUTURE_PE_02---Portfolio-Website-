import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles, Code2, Palette } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Add GSAP animations here when GSAP is properly loaded
    const elements = hero.querySelectorAll('.tide-enter');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-tide-rise');
      }, index * 100);
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center hero-waves overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ocean depths with flowing currents" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl current-flow"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-primary/10 blur-2xl current-flow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-ocean-coral/20 blur-xl current-flow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 tide-enter">
            <Badge variant="secondary" className="glass-surface">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Design
            </Badge>
            <Badge variant="secondary" className="glass-surface">
              <Code2 className="w-3 h-3 mr-1" />
              React + GSAP
            </Badge>
            <Badge variant="secondary" className="glass-surface">
              <Palette className="w-3 h-3 mr-1" />
              Ocean Theme
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-fluid-6xl font-bold mb-6 tide-enter">
            <span className="block text-ocean-deep">Design Systems</span>
            <span className="block bg-gradient-tide bg-clip-text text-transparent">
              That Flow Like Tides
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-fluid-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed tide-enter">
            AI-powered UX engineering with fluid GSAP animations, 
            comprehensive design systems, and seamless React component libraries 
            that adapt like ocean currents.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 tide-enter">
            <Button 
              size="lg" 
              className="ripple-hover shadow-reef px-8 py-6 text-lg"
              asChild
            >
              <a href="#work">
                Explore My Work
                <ArrowDown className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="glass-surface px-8 py-6 text-lg ripple-hover"
              asChild
            >
              <a href="#contact">Start a Project</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto tide-enter">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 tide-enter">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}