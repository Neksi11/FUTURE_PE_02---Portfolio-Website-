import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MessageCircle, Calendar, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: ""
    });
    setIsLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-32 bg-background" id="contact">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Let's Connect</span>
          </div>
          <h2 className="font-display text-fluid-5xl font-semibold mb-8 leading-tight">
            Start Your Project
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Ready to create something extraordinary? Let's collaborate on bringing 
            your vision to life with precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-dramatic glass-minimal">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-display font-semibold">
                  <MessageCircle className="w-5 h-5 mr-3 text-primary" />
                  Project Inquiry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-medium tracking-wide">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Doe"
                        className="glass-minimal h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-medium tracking-wide">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@company.com"
                        className="glass-minimal h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium">
                        Project Type
                      </label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                        <SelectTrigger className="glass-surface">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="design-system">Design System</SelectItem>
                          <SelectItem value="ai-integration">AI Integration</SelectItem>
                          <SelectItem value="motion-design">Motion Design</SelectItem>
                          <SelectItem value="full-website">Full Website</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">
                        Project Budget
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger className="glass-surface">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-35k">$15,000 - $35,000</SelectItem>
                          <SelectItem value="35k-plus">$35,000+</SelectItem>
                          <SelectItem value="discuss">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">
                      Timeline
                    </label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                      <SelectTrigger className="glass-surface">
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      rows={5}
                      className="glass-surface"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isLoading}
                    className="w-full ripple-hover shadow-reef"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Availability */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="border-0 shadow-surface glass-surface">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a 
                    href="mailto:hello@portfolio.com"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    hello@portfolio.com
                  </a>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-3" />
                    Available Globally (EST)
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-3" />
                    Response within 24 hours
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild className="w-full ripple-hover">
                    <a href="mailto:hello@portfolio.com">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule a Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Current Availability */}
            <Card className="border-0 shadow-surface glass-surface">
              <CardHeader>
                <CardTitle>Current Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Next Opening</span>
                  <span className="text-sm font-medium">January 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Booking Window</span>
                  <span className="text-sm font-medium">2-4 weeks ahead</span>
                </div>
                
                <div className="pt-4 border-t border-border text-sm text-muted-foreground">
                  Currently accepting new projects for Q1 2025. 
                  Book early to secure your spot!
                </div>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card className="border-0 shadow-surface glass-surface">
              <CardHeader>
                <CardTitle>Quick Questions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-medium mb-1">How long do projects take?</p>
                  <p className="text-muted-foreground">2-16 weeks depending on scope and complexity.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Do you work with agencies?</p>
                  <p className="text-muted-foreground">Yes! I partner with agencies and teams regularly.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Minimum project size?</p>
                  <p className="text-muted-foreground">$5,000 for focused component work.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}