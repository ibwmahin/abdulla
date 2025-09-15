import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_li5izpc',
        'template_2ag350j',
        formData,
        'wG8px5150C96d09F3'
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-light">
            Let's <span className="text-muted-foreground">Work Together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Whether you need a developer, writer, or just want to say hello, 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-border bg-card/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]"
              >
                <a href="mailto:ibwmahin@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  ibwmahin@gmail.com
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
                  @ibwmahin
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>

            <Card className="p-6 border-border bg-muted/20">
              <p className="text-muted-foreground text-sm">
                Based in Bangladesh • Available for remote work
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}