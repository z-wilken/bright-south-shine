import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, MapPin, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Join the Financial Freedom Movement
            </h3>
            <p className="text-secondary-foreground/80 mb-6">
              Get weekly insights, exclusive stories, and practical tools delivered to your inbox. 
              No spam, just authentic South African financial wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-secondary-foreground/60 mt-3">
              Join 50+ South Africans already transforming their financial futures
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">BW</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">BrightWealth & CDCP</h3>
                <p className="text-sm text-secondary-foreground/70 font-fira">
                  Carpe Diem Credula Postero
                </p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Empowering South Africans with authentic financial stories, practical tools, 
              and mindfulness practices. Building wealth with wisdom, one story at a time.
            </p>
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/70">
              <MapPin size={16} />
              <span>Proudly South African 🇿🇦</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="/stories" className="text-secondary-foreground/80 hover:text-accent transition-colors">Stories</a></li>
              <li><a href="/resources" className="text-secondary-foreground/80 hover:text-accent transition-colors">Resources</a></li>
              <li><a href="/tools" className="text-secondary-foreground/80 hover:text-accent transition-colors">Tools</a></li>
              <li><a href="/contact" className="text-secondary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Share Your Story</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-accent">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-accent">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-accent">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-accent">
                <Mail size={20} />
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/60">
              <span>Made with</span>
              <Heart size={14} className="text-accent" />
              <span>in South Africa • © 2024 BrightWealth & CDCP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;