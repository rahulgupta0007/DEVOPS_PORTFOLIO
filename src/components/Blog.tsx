import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "Building Scalable CI/CD Pipelines with Jenkins and Kubernetes",
    excerpt: "Learn how to create robust, scalable CI/CD pipelines using Jenkins, Docker, and Kubernetes for modern application deployment.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "CI/CD",
    slug: "scalable-cicd-jenkins-kubernetes",
    featured: true
  },
  {
    title: "Infrastructure as Code: Best Practices with Terraform",
    excerpt: "Explore advanced Terraform techniques for managing cloud infrastructure at scale, including modules, state management, and security.",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "IaC",
    slug: "terraform-best-practices",
    featured: false
  },
  {
    title: "Container Security: Scanning and Hardening Strategies",
    excerpt: "Comprehensive guide to securing containerized applications, from image scanning to runtime security and compliance.",
    date: "2023-12-22",
    readTime: "10 min read",
    category: "Security",
    slug: "container-security-guide",
    featured: false
  },
  {
    title: "Monitoring Microservices: Observability with Prometheus",
    excerpt: "Implementation strategies for comprehensive monitoring and alerting in microservices architectures using Prometheus and Grafana.",
    date: "2023-12-15",
    readTime: "15 min read",
    category: "Monitoring",
    slug: "microservices-monitoring-prometheus",
    featured: false
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              DevOps <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing knowledge and experiences from the field of DevOps, 
              cloud infrastructure, and automation best practices.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.slug}
                className={`card-hover group cursor-pointer ${
                  post.featured 
                    ? 'md:col-span-2 bg-gradient-card border-primary/20' 
                    : 'bg-card border-border/50'
                } animate-fade-in delay-${index * 100}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="outline" 
                      className="bg-primary/10 text-primary border-primary/30"
                    >
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-glow group/btn"
                  >
                    Read More 
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="btn-outline-glow">
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}