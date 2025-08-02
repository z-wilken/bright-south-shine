import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Clock, User, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import financialPlanningImage from "@/assets/financial-planning.jpg";
import sowetoImage from "@/assets/soweto-community.jpg";

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const stories = [
    {
      id: 1,
      title: "From Debt to Dreams: A Cape Town Journey",
      excerpt: "How Nomsa turned R50,000 debt into her first property investment using traditional stokvels and modern budgeting techniques.",
      author: "Nomsa Mbeki",
      readTime: "8 min read",
      tags: ["Debt Freedom", "Property", "Stokvels"],
      image: financialPlanningImage,
      likes: 24,
      comments: 8,
      featured: true,
      publishedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "The Soweto Entrepreneur's Guide to Side Hustles",
      excerpt: "Thabo's journey from taxi driver to tech entrepreneur, building wealth R100 at a time through smart side investments.",
      author: "Thabo Mthembu",
      readTime: "6 min read",
      tags: ["Entrepreneurship", "Side Hustle", "Technology"],
      image: sowetoImage,
      likes: 31,
      comments: 12,
      featured: false,
      publishedAt: "2024-01-12"
    },
    {
      id: 3,
      title: "Mindful Money: Ubuntu Philosophy in Finance",
      excerpt: "Integrating African wisdom with modern investment strategies for holistic wealth building that honors community values.",
      author: "Dr. Aisha Patel",
      readTime: "10 min read",
      tags: ["Mindfulness", "Ubuntu", "Investment"],
      image: financialPlanningImage,
      likes: 18,
      comments: 5,
      featured: false,
      publishedAt: "2024-01-10"
    },
    {
      id: 4,
      title: "Student Budget Mastery: Wits to Wealth",
      excerpt: "A University of the Witwatersrand student's guide to stretching R2,000/month while building an emergency fund.",
      author: "Mpho Sithole",
      readTime: "5 min read",
      tags: ["Budgeting", "Students", "Emergency Fund"],
      image: sowetoImage,
      likes: 42,
      comments: 15,
      featured: false,
      publishedAt: "2024-01-08"
    },
    {
      id: 5,
      title: "Retirement Resilience: Building Wealth After 50",
      excerpt: "Gogo Martha's inspiring story of starting her investment journey at 55 and securing her retirement in Limpopo.",
      author: "Martha Maluleke",
      readTime: "7 min read",
      tags: ["Retirement", "Late Starters", "Rural Finance"],
      image: financialPlanningImage,
      likes: 28,
      comments: 9,
      featured: false,
      publishedAt: "2024-01-05"
    }
  ];

  const tags = ["All", "Debt Freedom", "Property", "Stokvels", "Entrepreneurship", "Side Hustle", "Technology", "Mindfulness", "Ubuntu", "Investment", "Budgeting", "Students", "Emergency Fund", "Retirement", "Late Starters", "Rural Finance"];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || story.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Community Stories
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Stories That Transform
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Real journeys from South Africans who changed their financial destiny. 
              Find inspiration, practical advice, and your next breakthrough.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale"
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search stories, authors, or topics..."
                className="pl-10 py-3 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Tag Filter */}
            <div className="flex items-center gap-4 mb-4">
              <Filter size={20} className="text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className={selectedTag === tag ? "bg-accent text-accent-foreground" : ""}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'} found
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Card key={story.id} className="hover-scale cursor-pointer group overflow-hidden border-0 bg-gradient-card">
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
                    {story.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {story.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{story.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {story.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
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
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                        <Heart size={16} className="mr-1" />
                        {story.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                        <MessageCircle size={16} className="mr-1" />
                        {story.comments}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                      <Share2 size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover-scale">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;