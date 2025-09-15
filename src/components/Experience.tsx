import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Web Developer",
    company: "DigitalPathways & Visqode",
    period: "2022 — 2025",
    description: "Built fast, accessible websites combining front-end craftsmanship with modern design and AI-driven enhancements."
  },
  {
    title: "UI/UX Designer",
    company: "DataxPie",
    period: "2019 — 2021",
    description: "Designed intuitive, user-centered interfaces that balanced beauty and usability — improving engagement and retention."
  },
  {
    title: "Freelance Graphic Designer",
    company: "Independent",
    period: "2017 — 2019",
    description: "Crafted visually striking graphics for startups, helping them build a powerful brand presence and streamlining brand management."
  }
];

export function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-light">
            Professional <span className="text-muted-foreground">Journey</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Over 8 years of experience crafting digital experiences, 
            from graphic design to full-stack development.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-[1.01] group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="border-border bg-background/50 mt-2 sm:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}