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
    <section className="py-24 bg-gradient-surface" id="work">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <Badge variant="secondary" className="mb-4">
              Selected Work
            </Badge>
          </div>
          <h2 className="font-display text-fluid-4xl font-bold mb-6">
            Crafting Digital Experiences
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered design systems to fluid motion interfaces, 
            each project flows with purpose and precision.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 glass-surface">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className={`group overflow-hidden border-0 shadow-surface ripple-hover cursor-pointer glass-surface ${
                    index === 0 ? 'md:col-span-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video bg-gradient-hero">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ocean-deep/20 group-hover:bg-ocean-deep/10 transition-colors duration-300"></div>
                    
                    {/* Hover Actions */}
                    <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {project.demoUrl && (
                        <Button size="sm" className="glass-surface" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="secondary" size="sm" className="glass-surface" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="glass-surface">
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
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
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="ripple-hover">
            View All Projects
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}