import { Code, Cloud, Cog, Database, GitBranch, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS (EC2, S3, Lambda, ECS)", "Azure DevOps", "Google Cloud Platform"]
  },
  {
    category: "Container & Orchestration",
    icon: Database,
    items: ["Docker", "Kubernetes", "Docker Compose", "Helm Charts"]
  },
  {
    category: "CI/CD & Automation",
    icon: GitBranch,
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Ansible", "Terraform"]
  },
  {
    category: "Programming & Scripting",
    icon: Code,
    items: ["Python", "Bash/Shell", "Java", "YAML", "JSON"]
  },
  {
    category: "Monitoring & Logging",
    icon: Cog,
    items: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "New Relic"]
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    items: ["Security Scanning", "RBAC", "SSL/TLS", "Vulnerability Assessment"]
  }
];

const techStack = [
  { name: "Docker", color: "text-blue-400" },
  { name: "Kubernetes", color: "text-blue-500" },
  { name: "Jenkins", color: "text-orange-400" },
  { name: "AWS", color: "text-orange-500" },
  { name: "Terraform", color: "text-purple-400" },
  { name: "Python", color: "text-green-400" },
  { name: "Linux", color: "text-yellow-400" },
  { name: "Git", color: "text-red-400" }
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a dedicated DevOps Engineer with a passion for creating robust, 
              scalable infrastructure solutions. My expertise spans cloud platforms, 
              automation tools, and modern deployment practices.
            </p>
          </div>

          {/* Professional Summary */}
          <div className="mb-16">
            <Card className="card-hover bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 2.5 years of hands-on experience in DevOps and cloud infrastructure, 
                  I've successfully implemented CI/CD pipelines, orchestrated containerized applications, 
                  and optimized cloud architectures for high availability and cost efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My approach combines technical expertise with a deep understanding of business needs, 
                  ensuring that infrastructure solutions not only meet current requirements but also 
                  scale seamlessly with organizational growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-center mb-12">
              Technical <span className="gradient-text">Expertise</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card 
                  key={skill.category} 
                  className={`card-hover bg-gradient-card border-border/50 animate-fade-in delay-${index * 100}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{skill.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-muted-foreground text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Stack Icons */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">
              Core <span className="gradient-text">Technologies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-icon px-4 py-2 bg-muted/30 rounded-full border border-border/50 hover:border-primary/50 hover:bg-muted/50"
                >
                  <span className={`font-medium ${tech.color}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}