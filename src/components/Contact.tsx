import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-5xl font-light">
            Let's <span className="text-muted-foreground">Work Together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Whether you need a developer, writer, or just want to say hello, 
            I'd love to hear from you.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto"
          >
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]"
            >
              <a href="mailto:ibwmahin@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </Button>
            
            <Button
              variant="outline"
              asChild
              size="lg"
              className="h-12 border-border bg-background/50 hover:bg-accent transition-all hover:scale-[1.02]"
            >
              <a href="https://twitter.com/ibwmahin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Twitter
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 border-border bg-muted/20 max-w-md mx-auto">
              <p className="text-muted-foreground text-sm">
                Based in Bangladesh • Available for remote work
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}