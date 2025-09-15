import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ibwmahin", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/ibwmahin", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/ibwmahin", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ibwmahin@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              Based in Bangladesh
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Frontend
              <br />
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Developer
              </span>
              <br />
              <span className="text-muted-foreground text-2xl sm:text-3xl lg:text-4xl font-light">
                & Writer
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Crafting digital experiences with clean code, minimal design, and 
              user-centered thinking. Passionate about creating interfaces that just work.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-10 w-10 rounded-full p-0 border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:scale-105 transition-all"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-md mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={profileImage} 
              alt="Mahin - Frontend Developer & Writer"
              className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
          
          {/* Floating badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-4 -right-4 bg-card border border-border rounded-full px-4 py-2 shadow-soft backdrop-blur-sm"
          >
            <span className="text-sm font-medium">Available for hire</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}