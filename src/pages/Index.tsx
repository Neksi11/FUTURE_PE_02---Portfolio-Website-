import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectGallery } from "@/components/project-gallery";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectGallery />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-ocean-deep text-pearl py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-tide flex items-center justify-center">
                  <div className="w-4 h-4 rounded bg-pearl"></div>
                </div>
                <span className="font-display font-semibold text-lg">Portfolio</span>
              </div>
              <p className="text-pearl/80 max-w-md">
                Crafting AI-powered design systems and fluid motion experiences 
                that flow like ocean currents through digital landscapes.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-pearl/80">
                <li><a href="#work" className="hover:text-pearl transition-colors">Work</a></li>
                <li><a href="#about" className="hover:text-pearl transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-pearl transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-pearl transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-pearl/80">
                <li><a href="#" className="hover:text-pearl transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-pearl transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-pearl transition-colors">Twitter</a></li>
                <li><a href="mailto:hello@portfolio.com" className="hover:text-pearl transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-pearl/20 mt-12 pt-8 text-center text-pearl/60">
            <p>&copy; 2024 Portfolio. Crafted with AI and ocean inspiration.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
