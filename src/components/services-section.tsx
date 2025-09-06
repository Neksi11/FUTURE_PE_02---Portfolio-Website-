import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Layers, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Powered UX",
    description: "Intelligent design systems that adapt and learn",
    details: "Transform your design process with AI-driven component generation, automated theming, and smart layout optimization that evolves with user behavior.",
    capabilities: [
      "Automated component generation",
      "Intelligent theme adaptation", 
      "User behavior analysis",
      "Performance optimization"
    ]
  },
  {
    icon: Layers,
    title: "Frontend Systems",
    description: "Scalable component libraries and design systems",
    details: "Build cohesive, maintainable frontend architectures with comprehensive design systems, reusable components, and seamless developer experience.",
    capabilities: [
      "Component library architecture",
      "Design token management",
      "Multi-brand support",
      "Documentation automation"
    ]
  },
  {
    icon: Zap,
    title: "Motion & GSAP",
    description: "Fluid animations that enhance user experience",
    details: "Create captivating, performant animations using GSAP that guide users through your interface with smooth, purposeful motion design.",
    capabilities: [
      "Micro-interaction design",
      "Page transition systems",
      "Scroll-triggered animations",
      "Performance optimization"
    ]
  }
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-gradient-subtle" id="services">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Expertise</span>
          </div>
          <h2 className="font-display text-fluid-5xl font-semibold mb-8 leading-tight">
            What I Craft
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Specialized in creating sophisticated digital experiences through 
            intelligent design systems, advanced frontend architecture, and elegant motion design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {services.map((service, index) => (
            <Card key={service.title} className="group border-0 shadow-elegant elegant-hover glass-minimal h-full">
              <CardHeader className="text-center p-8">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-display font-semibold mb-4">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.details}</p>
                
                <div className="space-y-3">
                  {service.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground/80">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="font-display text-3xl font-semibold">
              Ready to Elevate Your Project?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Let's collaborate on creating something extraordinary that pushes 
              the boundaries of design and technology.
            </p>
            <Button size="lg" className="elegant-hover shadow-elegant px-8 py-4 font-medium tracking-wide" asChild>
              <a href="#contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
