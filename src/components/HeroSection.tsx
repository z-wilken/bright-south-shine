import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, Users, TrendingUp, Heart } from "lucide-react";
import heroImage from "@/assets/hero-table-mountain.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Table Mountain Cape Town"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 ndebele-pattern opacity-20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Proudly South African Financial Movement</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            BrightWealth &{" "}
            <span className="text-accent">CDCP</span>
          </h1>
          
          <p className="font-fira text-lg md:text-xl mb-8 text-white/90">
            Carpe Diem Credula Postero • Seize Today, Trust Tomorrow
          </p>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
            Empower your financial future with authentic South African stories, 
            practical tools, and mindfulness practices that transform lives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg hover-scale"
            >
              <PlayCircle className="mr-2" size={20} />
              Watch Our Story
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg hover-scale"
            >
              Join Movement
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold">200+</span>
              </div>
              <p className="text-white/70">South Africans Empowered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold">150+</span>
              </div>
              <p className="text-white/70">Success Stories Shared</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold">∞</span>
              </div>
              <p className="text-white/70">Lives Transformed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-white/30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;