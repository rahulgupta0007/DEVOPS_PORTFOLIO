import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Microservices CI/CD Pipeline",
    description: "Implemented a fully automated CI/CD pipeline for a microservices architecture using Jenkins, Docker, and Kubernetes. Reduced deployment time by 75% and improved system reliability.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "AWS EKS", "Helm", "ArgoCD"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Designed and deployed scalable AWS infrastructure using Terraform. Managed multi-environment setups with automated provisioning and configuration management.",
    technologies: ["Terraform", "AWS", "Ansible", "CloudFormation", "GitLab CI"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Monitoring & Alerting System",
    description: "Built comprehensive monitoring solution using Prometheus, Grafana, and ELK stack. Implemented custom dashboards and alerting rules for proactive issue detection.",
    technologies: ["Prometheus", "Grafana", "ElasticSearch", "Kibana", "Docker", "AlertManager"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Container Orchestration Platform",
    description: "Migrated legacy applications to containerized environments using Docker and Kubernetes. Implemented auto-scaling, load balancing, and service mesh architecture.",
    technologies: ["Kubernetes", "Docker", "Istio", "NGINX", "AWS", "Helm"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Automated Security Scanning",
    description: "Integrated security scanning tools into CI/CD pipelines. Implemented vulnerability assessment, code analysis, and compliance checking with automated reporting.",
    technologies: ["SonarQube", "OWASP ZAP", "Trivy", "Jenkins", "Python", "Slack API"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my DevOps projects, demonstrating expertise in automation, 
              cloud infrastructure, and modern deployment practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`card-hover group relative overflow-hidden ${
                  project.featured 
                    ? 'md:col-span-2 bg-gradient-card border-primary/20' 
                    : 'bg-card border-border/50'
                } animate-fade-in delay-${index * 100}`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="btn-outline-glow group"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="btn-outline-glow group"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="btn-outline-glow">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}