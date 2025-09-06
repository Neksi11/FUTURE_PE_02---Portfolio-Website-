import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Layers, Zap, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Powered UX",
    description: "Intelligent design systems that adapt and learn",
    details: "Transform your design process with AI-driven component generation, automated theming, and smart layout optimization that evolves with user behavior.",
    features: [
      "Automated component generation",
      "Intelligent theme adaptation", 
      "User behavior analysis",
      "A/B testing integration",
      "Performance optimization",
      "Accessibility compliance"
    ]
  },
  {
    icon: Layers,
    title: "Frontend Systems",
    description: "Scalable component libraries and design systems",
    details: "Build cohesive, maintainable frontend architectures with comprehensive design systems, reusable components, and seamless developer experience.",
    features: [
      "Component library architecture",
      "Design token management",
      "Multi-brand support",
      "Documentation automation",
      "Testing strategies",
      "CI/CD integration"
    ]
  },
  {
    icon: Zap,
    title: "Motion & GSAP",
    description: "Fluid animations that enhance user experience",
    details: "Create captivating, performant animations using GSAP that guide users through your interface with smooth, purposeful motion design.",
    features: [
      "Micro-interaction design",
      "Page transition systems",
      "Scroll-triggered animations",
      "Performance optimization",
      "Accessibility considerations",
      "Cross-browser compatibility"
    ]
  }
];

const packages = [
  {
    name: "Starter",
    description: "Perfect for small projects and MVPs",
    price: "From $5,000",
    duration: "2-4 weeks",
    features: [
      "Basic component library",
      "Essential design tokens",
      "Mobile-responsive design",
      "Basic animations",
      "Documentation",
      "2 rounds of revisions"
    ],
    popular: false
  },
  {
    name: "Growth",
    description: "Comprehensive solution for growing businesses",
    price: "From $15,000",
    duration: "6-10 weeks",
    features: [
      "Advanced component system",
      "AI-powered theming",
      "Complex animations",
      "Multi-platform support",
      "Integration support",
      "4 rounds of revisions",
      "3 months support"
    ],
    popular: true
  },
  {
    name: "Enterprise", 
    description: "Full-scale systems for complex organizations",
    price: "From $35,000",
    duration: "12-16 weeks",
    features: [
      "Complete design system",
      "AI automation integration",
      "Custom tooling",
      "Team training",
      "Legacy system migration",
      "Unlimited revisions",
      "12 months support"
    ],
    popular: false
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            What I Do
          </Badge>
          <h2 className="font-display text-fluid-4xl font-bold mb-6">
            Services That Flow
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
            Like ocean currents shaping coastlines, I craft digital experiences 
            that adapt, evolve, and inspire through intelligent design systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={service.title} className="group border-0 shadow-surface ripple-hover glass-surface">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-tide flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{service.details}</p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="features" className="border-none">
                    <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">
                      Key Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Packages */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="font-display text-fluid-3xl font-bold mb-4">
              Project Packages
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Flexible engagement models designed to meet your project needs and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.name} 
                className={`relative border-0 shadow-surface ripple-hover ${
                  pkg.popular ? 'ring-2 ring-primary/20 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-tide">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="mb-4">{pkg.description}</CardDescription>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ripple-hover ${
                      pkg.popular ? 'shadow-reef' : ''
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="font-display text-2xl font-semibold">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground">
              Let's discuss how we can bring your vision to life with the power of AI, 
              beautiful design systems, and fluid animations.
            </p>
            <Button size="lg" className="ripple-hover shadow-reef" asChild>
              <a href="#contact">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}