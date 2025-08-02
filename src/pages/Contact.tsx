import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MessageCircle, 
  BookOpen, 
  Users,
  Clock,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  Heart
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Get In Touch
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Let's Build Together
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Have a story to share? Need financial guidance? Want to collaborate? 
              We're here to support your journey to financial freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center border-0 bg-gradient-card hover-scale cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="text-accent" size={32} />
                  </div>
                  <h3 className="font-playfair text-lg font-bold group-hover:text-accent transition-colors">
                    Share Your Story
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Inspire others with your financial journey and transformation
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-card hover-scale cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-primary" size={32} />
                  </div>
                  <h3 className="font-playfair text-lg font-bold group-hover:text-accent transition-colors">
                    Get Financial Advice
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Ask questions about budgeting, investing, or debt management
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-card hover-scale cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-playfair text-lg font-bold group-hover:text-accent transition-colors">
                    Partnership Opportunities
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Collaborate with us to expand financial literacy reach
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-card hover-scale cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-accent" size={32} />
                  </div>
                  <h3 className="font-playfair text-lg font-bold group-hover:text-accent transition-colors">
                    General Inquiries
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Any other questions about BrightWealth & CDCP
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 bg-gradient-card">
                <CardHeader>
                  <h2 className="font-playfair text-2xl font-bold text-foreground">
                    Send us a message
                  </h2>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours during weekdays
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Subject
                    </label>
                    <Input placeholder="What's this about?" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry, story, or how we can help..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Send className="mr-2" size={16} />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info & Social */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="border-0 bg-gradient-card">
                  <CardHeader>
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      Connect With Us
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-accent" size={20} />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">hello@brightwealth.co.za</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="text-accent" size={20} />
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-accent" size={20} />
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">Proudly South African 🇿🇦</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="border-0 bg-gradient-card">
                  <CardHeader>
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      Follow Our Journey
                    </h3>
                    <p className="text-muted-foreground">
                      Join our community for daily inspiration and financial tips
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground hover-scale">
                        <Twitter size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground hover-scale">
                        <Instagram size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground hover-scale">
                        <Linkedin size={20} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-0 bg-gradient-card">
                  <CardHeader>
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      Stay Updated
                    </h3>
                    <p className="text-muted-foreground">
                      Get weekly financial insights and new stories delivered to your inbox
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input placeholder="Enter your email" className="flex-1" />
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Subscribe
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Join 50+ subscribers. No spam, unsubscribe anytime.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Submission CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Your Story Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every financial journey has unique lessons. Whether you've overcome debt, 
              built wealth, or learned valuable money lessons, your story can inspire and help others.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale mr-4"
            >
              <BookOpen className="mr-2" size={20} />
              Share Your Story
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover-scale"
            >
              Story Guidelines
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;