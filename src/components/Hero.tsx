import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { icon: Github, href: "https://github.com/ibwmahin", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/ibwmahin", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/ibwmahin", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ibwmahin@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium GSAP timeline
      const tl = gsap.timeline({ delay: 0.5 });
      
      // Title animation with subtle premium effects
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(profileRef.current,
        { opacity: 0, scale: 0.8, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
        "-=0.8"
      );

      // Social icons stagger animation
      gsap.fromTo(socialRef.current?.children || [], 
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)", stagger: 0.1, delay: 1.2 }
      );

      // Continuous subtle animations
      gsap.to(profileRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSocialHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      rotation: 5,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  };

  const handleSocialLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              Based in Bangladesh
            </div>
            
            <h1 ref={titleRef} className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Abdulla Al Mahin
              <br />
              <span ref={subtitleRef} className="text-muted-foreground text-2xl sm:text-3xl lg:text-4xl font-light">
                Frontend Developer & Writer
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Crafting digital experiences with clean code, minimal design, and 
              user-centered thinking. Passionate about creating interfaces that just work.
            </p>
          </motion.div>

          {/* Social Links */}
          <div ref={socialRef} className="flex flex-wrap gap-3">
            {socialLinks.map((link, index) => (
              <div key={link.label}>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-12 w-12 rounded-2xl p-0 glass-card hover:bg-accent/20 transition-all duration-300"
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div ref={profileRef} className="relative max-w-md mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-premium">
            <img 
              src={profileImage} 
              alt="Abdulla Al Mahin - Frontend Developer & Writer"
              className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
          </div>
          
          {/* Floating badge with glassmorphism */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-4 -right-4 glass rounded-2xl px-6 py-3 shadow-premium"
          >
            <span className="text-sm font-medium">Available for hire</span>
          </motion.div>

          {/* Premium accent dot */}
          <div className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full animate-pulse shadow-lg"></div>
        </div>
      </div>
    </section>
  );
}