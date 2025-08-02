import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, 
  PieChart, 
  TrendingUp, 
  Target,
  DollarSign,
  Clock,
  BarChart3,
  Zap,
  Settings,
  PlayCircle
} from "lucide-react";

const Tools = () => {
  const tools = [
    {
      id: 1,
      title: "Budget Calculator",
      description: "Create a personalized budget based on South African income patterns and living costs.",
      status: "Active",
      icon: Calculator,
      color: "accent",
      features: ["Income allocation", "Expense tracking", "Savings goals", "Local insights"],
      comingSoon: false
    },
    {
      id: 2,
      title: "Investment Portfolio Tracker",
      description: "Monitor your JSE investments, unit trusts, and retirement funds all in one place.",
      status: "Coming Soon",
      icon: PieChart,
      color: "primary",
      features: ["JSE integration", "Performance analytics", "Risk assessment", "Tax calculations"],
      comingSoon: true
    },
    {
      id: 3,
      title: "Debt Payoff Planner",
      description: "Visualize your path to debt freedom with snowball and avalanche strategies.",
      status: "Active",
      icon: TrendingUp,
      color: "secondary",
      features: ["Multiple strategies", "Payment scheduling", "Interest calculations", "Progress tracking"],
      comingSoon: false
    },
    {
      id: 4,
      title: "Emergency Fund Goal Setter",
      description: "Calculate and track your emergency fund based on your specific circumstances.",
      status: "Active",
      icon: Target,
      color: "accent",
      features: ["Goal calculation", "Automated savings", "Milestone tracking", "Motivation system"],
      comingSoon: false
    },
    {
      id: 5,
      title: "Property Affordability Calculator",
      description: "Determine what property you can afford with current South African bond rates.",
      status: "Beta",
      icon: DollarSign,
      color: "primary",
      features: ["Bond calculations", "Transfer costs", "Monthly affordability", "Market insights"],
      comingSoon: false
    },
    {
      id: 6,
      title: "Retirement Planning Assistant",
      description: "Plan your retirement with pension fund, provident fund, and personal savings projections.",
      status: "Coming Soon",
      icon: Clock,
      color: "secondary",
      features: ["Multiple fund types", "Inflation adjustments", "Scenario planning", "Tax optimization"],
      comingSoon: true
    }
  ];

  const progressData = [
    { label: "Monthly Budget", value: 85, color: "bg-accent" },
    { label: "Emergency Fund", value: 60, color: "bg-primary" },
    { label: "Debt Reduction", value: 40, color: "bg-secondary" },
    { label: "Investment Goals", value: 25, color: "bg-accent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Financial Tools
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Smart Money Management
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Interactive tools designed for South African financial realities. 
              Track progress, make informed decisions, and accelerate your wealth-building journey.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale"
            >
              <PlayCircle className="mr-2" size={20} />
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold mb-4">Your Financial Progress</h2>
              <p className="text-muted-foreground">
                Track your journey across different areas of financial wellness
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {progressData.map((item, index) => (
                <Card key={index} className="border-0 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{item.label}</h3>
                      <span className="text-2xl font-bold text-accent">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {item.value < 50 ? "Keep going! You're building momentum." : 
                       item.value < 80 ? "Great progress! You're on the right track." : 
                       "Excellent! You're mastering this area."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Financial Planning Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to take control of your finances, from basic budgeting 
                to advanced investment tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <Card 
                    key={tool.id} 
                    className={`hover-scale cursor-pointer group border-0 bg-gradient-card ${
                      tool.comingSoon ? 'opacity-75' : ''
                    }`}
                  >
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-${tool.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`text-${tool.color}`} size={32} />
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {tool.title}
                        </h3>
                        <Badge 
                          variant={tool.status === "Active" ? "default" : tool.status === "Beta" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {tool.status}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {tool.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        className={`w-full ${tool.comingSoon ? 'bg-muted text-muted-foreground cursor-not-allowed' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`}
                        disabled={tool.comingSoon}
                      >
                        {tool.comingSoon ? (
                          <>
                            <Clock className="mr-2" size={16} />
                            Coming Soon
                          </>
                        ) : tool.status === "Beta" ? (
                          <>
                            <Settings className="mr-2" size={16} />
                            Try Beta
                          </>
                        ) : (
                          <>
                            <Zap className="mr-2" size={16} />
                            Use Tool
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Request */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <BarChart3 className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Tool?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always developing new tools based on community needs. 
              Tell us what financial calculator or tracker would help you most.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale"
            >
              Request New Tool
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tools;