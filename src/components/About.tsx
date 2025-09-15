import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", 
    "Framer Motion", "Node.js", "UI/UX Design", "Technical Writing"
  ];

  const experiences = [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible web applications with modern frameworks and best practices.",
      highlight: "React • TypeScript • Performance"
    },
    {
      title: "Technical Writing",
      description: "Creating clear, comprehensive documentation and articles that help developers learn and grow.",
      highlight: "Documentation • Tutorials • Clarity"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces with focus on usability and beautiful aesthetics.",
      highlight: "Figma • Design Systems • User Research"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-light mb-4">
            About <span className="text-muted-foreground">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I combine technical expertise with creative vision to build 
            digital products that users love and businesses need.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full border-border bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all hover:scale-[1.02]">
                <h3 className="text-xl font-medium mb-3">{exp.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  {exp.highlight}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-light mb-8">
            Skills & <span className="text-muted-foreground">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm border border-border bg-muted/50 hover:bg-accent transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}