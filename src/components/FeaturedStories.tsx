import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight, Heart } from "lucide-react";
import financialPlanningImage from "@/assets/financial-planning.jpg";
import sowetoImage from "@/assets/soweto-community.jpg";

const FeaturedStories = () => {
  const stories = [
    {
      id: 1,
      title: "From Debt to Dreams: A Cape Town Journey",
      excerpt: "How Nomsa turned R50,000 debt into her first property investment using traditional stokvels and modern budgeting.",
      author: "Nomsa Mbeki",
      readTime: "8 min read",
      tags: ["Debt Freedom", "Property", "Stokvels"],
      image: financialPlanningImage,
      featured: true
    },
    {
      id: 2,
      title: "The Soweto Entrepreneur's Guide to Side Hustles",
      excerpt: "Thabo's journey from taxi driver to tech entrepreneur, building wealth R100 at a time.",
      author: "Thabo Mthembu",
      readTime: "6 min read",
      tags: ["Entrepreneurship", "Side Hustle", "Technology"],
      image: sowetoImage,
      featured: false
    },
    {
      id: 3,
      title: "Mindful Money: Ubuntu Philosophy in Finance",
      excerpt: "Integrating African wisdom with modern investment strategies for holistic wealth building.",
      author: "Dr. Aisha Patel",
      readTime: "10 min read",
      tags: ["Mindfulness", "Ubuntu", "Investment"],
      image: financialPlanningImage,
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Stories
          </Badge>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Real Stories, Real Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Authentic journeys from South Africans who transformed their financial lives. 
            These aren't fairy tales—they're practical blueprints you can follow.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card 
              key={story.id} 
              className={`hover-scale cursor-pointer group overflow-hidden border-0 bg-gradient-card ${
                story.featured && index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    story.featured && index === 0 ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {story.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {story.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className={`font-playfair font-bold text-foreground group-hover:text-accent transition-colors ${
                  story.featured && index === 0 ? 'text-2xl' : 'text-xl'
                }`}>
                  {story.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent">
                    <Heart size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Stories CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="hover-scale group"
          >
            View All Stories
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;