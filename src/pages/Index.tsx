import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/hero-section";
import { MovingTextBanner } from "@/components/moving-text-banner";
import { ProjectGallery } from "@/components/project-gallery";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <MovingTextBanner />
        <ProjectGallery />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Minimal Footer */}
      <footer className="bg-elegant-charcoal text-elegant-pearl py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-elegant-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-elegant-charcoal rounded-sm"></div>
                </div>
                <span className="font-display font-semibold text-xl tracking-tight">Portfolio</span>
              </div>
              <p className="text-elegant-silver max-w-md leading-relaxed font-light">
                Crafting sophisticated design systems and premium digital experiences 
                through meticulous attention to detail and cutting-edge technology.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold mb-4 text-lg">Connect</h3>
                <ul className="space-y-3 text-elegant-silver">
                  <li><a href="#" className="hover:text-elegant-white transition-colors duration-300 font-medium">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-elegant-white transition-colors duration-300 font-medium">GitHub</a></li>
                  <li><a href="#" className="hover:text-elegant-white transition-colors duration-300 font-medium">Twitter</a></li>
                  <li><a href="mailto:hello@portfolio.com" className="hover:text-elegant-white transition-colors duration-300 font-medium">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-elegant-graphite mt-16 pt-8 text-center text-elegant-silver">
            <p className="font-light">&copy; 2024 Portfolio. Designed with precision and care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
