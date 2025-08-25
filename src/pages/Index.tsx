import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  // Initialize dark theme by default
  useEffect(() => {
    const root = window.document.documentElement;
    if (!localStorage.getItem("theme")) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Alex Johnson. Built with React, TypeScript & Tailwind CSS.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;