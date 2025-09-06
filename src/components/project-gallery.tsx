import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  tags: string[];
  category: string;
  year: string;
  role: string[];
  metrics?: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "ai-design-system",
    title: "AI Design System",
    description: "Intelligent component library with automated theming",
    summary: "Built a comprehensive design system with AI-powered theme generation, resulting in 60% faster design-to-development workflow.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "AI", "Figma"],
    category: "AI",
    year: "2024",
    role: ["UX Engineer", "AI Integration"],
    metrics: [
      { label: "Dev Speed", value: "+60%" },
      { label: "Components", value: "120+" }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "motion-portfolio",
    title: "GSAP Motion Portfolio", 
    description: "Fluid animations with ocean-inspired interactions",
    summary: "Created this very portfolio with sophisticated GSAP animations, achieving 98 Lighthouse performance while maintaining rich interactions.",
    image: "/placeholder.svg",
    tags: ["GSAP", "React", "Motion", "Performance"],
    category: "Motion",
    year: "2024",
    role: ["Frontend Developer", "Motion Designer"],
    metrics: [
      { label: "Performance", value: "98/100" },
      { label: "Animations", value: "25+" }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "enterprise-dashboard",
    title: "Enterprise Dashboard",
    description: "Data visualization platform with real-time updates",
    summary: "Designed and built a comprehensive analytics dashboard serving 10K+ daily users with real-time data visualization.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "D3.js", "WebSocket", "Enterprise"],
    category: "UX",
    year: "2023",
    role: ["Lead Frontend", "UX Designer"],
    metrics: [
      { label: "Daily Users", value: "10K+" },
      { label: "Load Time", value: "<2s" }
    ],
    demoUrl: "#"
  },
  {
    id: "component-library",
    title: "Scalable Component System",
    description: "Multi-brand design system with automatic theme generation",
    summary: "Architected a flexible component library supporting 5 brands with automated theming, reducing development time by 40%.",
    image: "/placeholder.svg",
    tags: ["React", "Storybook", "Design Tokens", "Multi-brand"],
    category: "Engineering",
    year: "2023",
    role: ["System Architect", "Frontend Lead"],
    metrics: [
      { label: "Brands Supported", value: "5" },
      { label: "Dev Time Saved", value: "40%" }
    ],
    githubUrl: "#"
  }
];

const categories = ["All", "AI", "UX", "Engineering", "Motion"];

export function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-32 bg-background" id="work">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Selected Work</span>
          </div>
          <h2 className="font-display text-fluid-6xl font-semibold mb-8 leading-tight">
            Featured Projects
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            A curated selection of design systems, user experiences, 
            and digital products that demonstrate precision and innovation.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-16">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-5 glass-minimal h-12">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium tracking-wide"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className={`group overflow-hidden border-0 shadow-elegant elegant-hover cursor-pointer glass-minimal ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gradient-subtle">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-elegant-black/10 group-hover:bg-elegant-black/5 transition-colors duration-500"></div>
                    
                    {/* Hover Actions */}
                    <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-500 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {project.demoUrl && (
                        <Button size="sm" className="glass-minimal backdrop-blur-md" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="secondary" size="sm" className="glass-minimal backdrop-blur-md" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="text-xs font-medium tracking-wider text-elegant-ash bg-elegant-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="space-y-6 p-8">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <CardTitle className="text-2xl font-display font-semibold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-base leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium tracking-wide text-muted-foreground border border-border px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-lg font-semibold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All CTA */}
        <div className="text-center mt-20">
          <Button variant="outline" size="lg" className="elegant-hover px-8 py-4 font-medium tracking-wide">
            View All Projects
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}