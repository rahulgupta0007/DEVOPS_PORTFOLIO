import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior DevOps Engineer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    period: "Mar 2023 - Present",
    type: "Full-time",
    description: "Led DevOps initiatives for a high-growth SaaS company, managing cloud infrastructure and CI/CD pipelines for multiple product teams.",
    achievements: [
      "Reduced deployment time by 80% through automated CI/CD pipeline implementation",
      "Architected multi-region AWS infrastructure serving 500K+ users",
      "Implemented Infrastructure as Code using Terraform, managing 200+ resources",
      "Led migration from monolith to microservices architecture on Kubernetes"
    ],
    technologies: ["AWS", "Kubernetes", "Jenkins", "Terraform", "Docker", "Prometheus"]
  },
  {
    role: "DevOps Engineer",
    company: "CloudNative Systems",
    location: "Austin, TX",
    period: "Jun 2022 - Feb 2023",
    type: "Full-time",
    description: "Focused on container orchestration and cloud migration projects for enterprise clients across various industries.",
    achievements: [
      "Successfully migrated 15+ legacy applications to containerized environments",
      "Implemented monitoring solutions reducing MTTR by 60%",
      "Automated infrastructure provisioning saving 20+ hours per week",
      "Established security best practices and compliance frameworks"
    ],
    technologies: ["Docker", "Kubernetes", "Azure", "Ansible", "Grafana", "ELK Stack"]
  },
  {
    role: "Junior DevOps Engineer",
    company: "StartupTech Inc",
    location: "Remote",
    period: "Jan 2022 - May 2022",
    type: "Full-time",
    description: "Started my DevOps journey working on automation scripts and supporting development teams with deployment processes.",
    achievements: [
      "Built automated testing and deployment pipelines for 5 microservices",
      "Implemented monitoring and alerting systems using open-source tools",
      "Reduced manual deployment tasks by 70% through automation",
      "Collaborated with development teams to optimize application performance"
    ],
    technologies: ["Python", "Jenkins", "AWS", "Docker", "Shell Scripting", "Git"]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "AWS SAA"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    badge: "CKA"
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2022",
    badge: "Terraform"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My journey in DevOps, from junior engineer to senior practitioner, 
              building scalable systems and automation solutions.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.role + exp.company} className={`relative animate-fade-in delay-${index * 200}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <Card className="card-hover bg-gradient-card border-border/50">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {exp.role}
                            </h3>
                            <div className="flex items-center text-primary font-medium mb-2">
                              <Briefcase className="h-4 w-4 mr-2" />
                              {exp.company}
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                            <div className="flex items-center mb-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground text-sm">
                                • {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs bg-muted/20 hover:bg-muted/40 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold text-center mb-12">
              <span className="gradient-text">Certifications</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.name}
                  className={`card-hover text-center bg-gradient-card border-border/50 animate-fade-in delay-${index * 100}`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-3 py-1">
                        {cert.badge}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                    <p className="text-muted-foreground text-xs">{cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}