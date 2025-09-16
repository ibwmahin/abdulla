import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Digital Pathways AI",
    url: "https://digitalpathways.ai/",
    description: "AI-driven platform combining cutting-edge technology with intuitive design for enhanced user experiences."
  },
  {
    title: "Pearni",
    url: "https://pearni.netlify.app/",
    description: "Modern learning platform with clean UI/UX design focusing on user engagement and accessibility."
  },
  {
    title: "LazyNvim",
    url: "https://github.com/ibwmahin/LazyNvim",
    description: "Custom Neovim configuration optimized for modern development workflows and productivity.",
    isGithub: true
  },
  {
    title: "Cyber Scan Guardian Shield",
    url: "https://ibwmahin.github.io/cyber-scan-guardian-shield/",
    description: "Cybersecurity focused web application with modern design and security-first approach."
  },
  {
    title: "Gaming Website",
    url: "https://ibwmahin.github.io/Gaming_Website/",
    description: "Interactive gaming platform showcasing modern web technologies and responsive design."
  },
  {
    title: "Manae Shopping Mart LLC",
    url: "https://manaeshoppingmartllc.com/",
    description: "E-commerce platform with focus on performance, accessibility, and user experience."
  }
];

export function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation on scroll
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Project cards stagger animation
      gsap.fromTo(projectsRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -8,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 20px 60px rgba(23, 5, 54, 0.3)"
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 8px 40px rgba(0, 0, 0, 0.15)"
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center space-y-8 mb-16">
          <h2 className="text-3xl lg:text-5xl font-light">
            Selected <span className="text-muted-foreground">Work</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing modern web development, 
            AI integration, and user-centered design principles.
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <Card className="p-8 glass-card hover:bg-accent/5 transition-all duration-300 h-full flex flex-col rounded-3xl border-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.isGithub ? (
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  ) : (
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full glass border-0 hover:bg-accent/20 hover:text-accent transition-all duration-300"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {project.isGithub ? 'View Code' : 'View Project'}
                    {project.isGithub ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ExternalLink className="h-4 w-4" />
                    )}
                  </a>
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}