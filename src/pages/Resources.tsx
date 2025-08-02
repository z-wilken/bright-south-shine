import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Download, 
  FileText, 
  Calculator, 
  BookOpen, 
  TrendingUp,
  Clock,
  Users,
  Star,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const resources = [
    {
      id: 1,
      title: "Complete South African Budgeting Guide",
      description: "A comprehensive 30-page guide covering budgeting basics, local banking tips, and stokvel strategies.",
      category: "Budgeting",
      type: "PDF Guide",
      size: "2.4 MB",
      downloads: 1247,
      rating: 4.8,
      featured: true,
      icon: FileText,
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Property Investment Calculator",
      description: "Calculate rental yields, bond payments, and investment returns for South African property markets.",
      category: "Investment",
      type: "Calculator",
      size: "Interactive",
      downloads: 892,
      rating: 4.9,
      featured: false,
      icon: Calculator,
      badge: null
    },
    {
      id: 3,
      title: "Emergency Fund Planner",
      description: "Build your safety net with this step-by-step planner tailored for South African income levels.",
      category: "Savings",
      type: "Worksheet",
      size: "1.8 MB",
      downloads: 1156,
      rating: 4.7,
      featured: true,
      icon: FileText,
      badge: "Editor's Pick"
    },
    {
      id: 4,
      title: "Debt Snowball Tracker",
      description: "Visualize your debt payoff journey with this motivating tracker designed for South African consumers.",
      category: "Debt Management",
      type: "Spreadsheet",
      size: "892 KB",
      downloads: 743,
      rating: 4.6,
      featured: false,
      icon: TrendingUp,
      badge: null
    },
    {
      id: 5,
      title: "Stokvel Formation Guide",
      description: "Everything you need to start or join a stokvel, including legal templates and best practices.",
      category: "Community Finance",
      type: "PDF Guide",
      size: "3.1 MB",
      downloads: 625,
      rating: 4.8,
      featured: false,
      icon: Users,
      badge: null
    },
    {
      id: 6,
      title: "Tax-Free Savings Calculator",
      description: "Maximize your TFSA contributions with this calculator showing projected growth over time.",
      category: "Investment",
      type: "Calculator",
      size: "Interactive",
      downloads: 1089,
      rating: 4.9,
      featured: true,
      icon: Calculator,
      badge: "New"
    }
  ];

  const categories = ["All", "Budgeting", "Investment", "Savings", "Debt Management", "Community Finance"];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Free Resources
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Financial Tools & Guides
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Practical resources designed specifically for South African financial realities. 
              All free, all proven, all ready to transform your money management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale"
              >
                <Download className="mr-2" size={20} />
                Browse All Resources
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover-scale"
              >
                Request Resource
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search guides, calculators, and tools..."
                className="pl-10 py-3 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.id} className="hover-scale cursor-pointer group border-0 bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="text-accent" size={28} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                              {resource.title}
                            </h3>
                            {resource.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {resource.badge}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{resource.type}</span>
                            <span>•</span>
                            <span>{resource.size}</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Star className="text-yellow-500 mr-1" size={14} fill="currentColor" />
                              <span>{resource.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Download size={14} className="mr-1" />
                          <span>{resource.downloads.toLocaleString()} downloads</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover-scale">
              Load More Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Request Resource Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Can't Find What You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're constantly creating new resources based on community feedback. 
              Tell us what financial tool or guide would help you most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="What resource do you need?"
                className="flex-1"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Request It
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We'll prioritize the most requested resources and notify you when they're ready.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;