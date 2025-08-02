import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedStories from "@/components/FeaturedStories";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Download, 
  Wrench, 
  TrendingUp, 
  Users, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Zap
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedStories />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Why Choose BrightWealth
            </Badge>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Your Financial Freedom Partner
            </h2>
            <p className="text-lg text-muted-foreground">
              We blend traditional South African wisdom with modern financial strategies, 
              creating a unique path to wealth that honors your heritage while building your future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-gradient-card hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-accent" size={32} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Authentic Stories</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real experiences from South Africans who transformed their financial lives. 
                  No fairy tales, just proven strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-card hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-accent" size={32} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Practical Resources</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Downloadable guides, calculators, and tools designed specifically 
                  for the South African financial landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-card hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-accent" size={32} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Community Support</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a movement of like-minded South Africans sharing knowledge, 
                  celebrating wins, and supporting each other's growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Start Your Journey Today
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're just starting out or looking to optimize your financial strategy, 
                we have the tools and stories to guide you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 bg-gradient-card hover-scale cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="text-primary" size={40} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Read Stories
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Discover how real South Africans built wealth through practical strategies and determination.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Explore Stories
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-card hover-scale cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="text-accent" size={40} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Get Resources
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Download practical guides, budgeting templates, and financial calculators for free.
                  </p>
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Browse Resources
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-card hover-scale cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="text-secondary" size={40} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Use Tools
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Track your progress with our budgeting tools and financial planning calculators.
                  </p>
                  <Button variant="outline" className="w-full">
                    Access Tools
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-white">
              Join the Movement
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get weekly insights, exclusive stories, and practical financial tools. 
              Join 50+ South Africans already transforming their financial futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe Free
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              No spam, unsubscribe anytime. Your privacy is sacred to us.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
