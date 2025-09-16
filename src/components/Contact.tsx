import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, ExternalLink, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Contact info animation
      gsap.fromTo(contactInfoRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_lyhmmox',
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

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="text-center space-y-8 mb-12">
          <h2 className="text-3xl lg:text-5xl font-light">
            Let's <span className="text-muted-foreground">Work Together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Whether you need a developer, writer, or just want to say hello, 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div ref={formRef}>
            <Card className="p-8 glass-card border-0 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-card border-0 focus:ring-2 focus:ring-accent/50 transition-all"
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
                    className="glass-card border-0 focus:ring-2 focus:ring-accent/50 transition-all"
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
                    className="glass-card border-0 focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 transition-all rounded-2xl"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
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
          </div>

          <div ref={contactInfoRef} className="space-y-6">
            <div className="grid gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 transition-all rounded-2xl"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
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
                className="h-12 glass-card border-0 hover:bg-accent/20 transition-all rounded-2xl"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <a href="https://twitter.com/ibwmahin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  @ibwmahin
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>

            <Card className="p-6 glass-card border-0 rounded-3xl">
              <p className="text-muted-foreground text-sm">
                Based in Bangladesh • Available for remote work
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}