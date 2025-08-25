import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-picture.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Alex Johnson - DevOps Engineer"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6 animate-fade-in delay-200">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Alex <span className="gradient-text">Johnson</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-2">
              DevOps Engineer | Cloud & Automation Specialist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable infrastructure and automating 
              deployment pipelines. 2.5+ years of experience in cloud technologies, 
              container orchestration, and CI/CD automation.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8 animate-fade-in delay-400">
            <Button variant="outline" size="icon" className="btn-outline-glow">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon" className="btn-outline-glow">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="btn-outline-glow">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-3"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline-glow text-lg px-8 py-3"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => scrollToSection("about")}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}