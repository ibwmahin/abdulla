import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

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
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-light">
            Selected <span className="text-muted-foreground">Work</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing modern web development, 
            AI integration, and user-centered design principles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-8 border-border bg-card/90 backdrop-blur-xl hover:bg-card/95 hover:shadow-premium transition-all duration-500 hover:scale-[1.02] h-full flex flex-col rounded-3xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.isGithub ? (
                    <Github className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-border hover:bg-accent transition-all"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}