import { Button } from "@/components/ui/button";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">Mulandi's High International</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Excellence in education since inception. Preparing global leaders with local values 
              through world-class education in the heart of Kenya.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-primary-foreground/80 hover:text-accent transition-colors">About Us</a>
              <a href="#academic" className="block text-primary-foreground/80 hover:text-accent transition-colors">Academic Programs</a>
              <a href="#admissions" className="block text-primary-foreground/80 hover:text-accent transition-colors">Admissions</a>
              <a href="#facilities" className="block text-primary-foreground/80 hover:text-accent transition-colors">Facilities</a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">News & Events</a>
            </div>
          </div>

          {/* Academic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Academic Excellence</h3>
            <div className="space-y-2">
              <div className="text-primary-foreground/80">Cambridge International</div>
              <div className="text-primary-foreground/80">Kenyan CBC Curriculum</div>
              <div className="text-primary-foreground/80">IGCSE Preparation</div>
              <div className="text-primary-foreground/80">University Pathways</div>
              <div className="text-primary-foreground/80">International Exchange</div>
              <div className="text-primary-foreground/80">STEM Programs</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  Kimathi Street, Kiambu County<br />
                  P.O. Box 1234-00100, Nairobi
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">+254 700 123 456</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">admissions@mulandishigh.ac.ke</div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="secondary" className="w-full">
                Schedule Campus Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Mulandi's High International. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Student Portal</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Parent Portal</a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-medium">
            🚨 24/7 Emergency Contact: +254 700 123 456 | School Safety & Security Hotline
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;