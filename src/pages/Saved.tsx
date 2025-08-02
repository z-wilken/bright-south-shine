import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  BookOpen, 
  FileText, 
  Clock, 
  User, 
  Trash2,
  Search,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Story } from '@/types';
import SaveButton from '@/components/SaveButton';
import financialPlanningImage from '@/assets/financial-planning.jpg';
import sowetoImage from '@/assets/soweto-community.jpg';

const Saved = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [savedItems, setSavedItems] = useState<{
    stories: Story[];
    resources: any[];
  }>({
    stories: [],
    resources: []
  });

  // TODO: Load saved items from backend based on user ID
  useEffect(() => {
    // Mock saved data for demonstration
    const mockSavedStories: Story[] = [
      {
        _id: '1',
        title: 'From Debt to Dreams: A Cape Town Journey',
        excerpt: 'How Nomsa turned R50,000 debt into her first property investment using traditional stokvels and modern budgeting techniques.',
        author: 'Nomsa Mbeki',
        tags: ['Debt Freedom', 'Property', 'Stokvels'],
        image: financialPlanningImage,
        likes: 24,
        comments: 8,
        featured: true,
        status: 'published',
        content: '',
        createdAt: Date.now() - 86400000, // 1 day ago
        publishedAt: Date.now() - 86400000
      },
      {
        _id: '3',
        title: 'Mindful Money: Ubuntu Philosophy in Finance',
        excerpt: 'Integrating African wisdom with modern investment strategies for holistic wealth building that honors community values.',
        author: 'Dr. Aisha Patel',
        tags: ['Mindfulness', 'Ubuntu', 'Investment'],
        image: sowetoImage,
        likes: 18,
        comments: 5,
        featured: false,
        status: 'published',
        content: '',
        createdAt: Date.now() - 172800000, // 2 days ago
        publishedAt: Date.now() - 172800000
      }
    ];

    const mockSavedResources = [
      {
        id: 'resource-1',
        title: 'Depreciation Calculator',
        type: 'tool',
        category: 'finance',
        savedAt: Date.now() - 43200000 // 12 hours ago
      },
      {
        id: 'resource-2',
        title: 'Emergency Fund Planning Guide',
        type: 'guide',
        category: 'finance',
        savedAt: Date.now() - 259200000 // 3 days ago
      }
    ];

    setSavedItems({
      stories: mockSavedStories,
      resources: mockSavedResources
    });
  }, []);

  const handleUnsave = (itemId: string, itemType: 'story' | 'resource') => {
    // TODO: Remove from backend
    if (itemType === 'story') {
      setSavedItems(prev => ({
        ...prev,
        stories: prev.stories.filter(story => story._id !== itemId)
      }));
    } else {
      setSavedItems(prev => ({
        ...prev,
        resources: prev.resources.filter(resource => resource.id !== itemId)
      }));
    }
  };

  const filteredStories = savedItems.stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || story.tags.some(tag => 
      tag.toLowerCase().includes(selectedFilter.toLowerCase())
    );
    return matchesSearch && matchesFilter;
  });

  const filteredResources = savedItems.resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || resource.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  const totalSavedItems = savedItems.stories.length + savedItems.resources.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart size={24} className="text-accent fill-current" />
              <Badge variant="outline" className="border-white/30 text-white">
                Your Collection
              </Badge>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Saved Items
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {totalSavedItems > 0 
                ? `You have ${totalSavedItems} saved ${totalSavedItems === 1 ? 'item' : 'items'} for later reading`
                : 'Start building your personal collection of inspiring stories and useful resources'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search your saved items..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-muted-foreground" />
                <Button
                  variant={selectedFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter('all')}
                >
                  All
                </Button>
                <Button
                  variant={selectedFilter === 'finance' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter('finance')}
                >
                  Finance
                </Button>
                <Button
                  variant={selectedFilter === 'mindfulness' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter('mindfulness')}
                >
                  Mindfulness
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saved Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {totalSavedItems === 0 ? (
              <div className="text-center py-16">
                <Heart size={64} className="mx-auto text-muted-foreground mb-6" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  No saved items yet
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Start exploring our stories and resources. Click the heart icon on any content to save it here for later.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    <BookOpen size={20} className="mr-2" />
                    Browse Stories
                  </Button>
                  <Button size="lg" variant="outline">
                    <FileText size={20} className="mr-2" />
                    View Resources
                  </Button>
                </div>
              </div>
            ) : (
              <Tabs defaultValue="stories" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                  <TabsTrigger value="stories" className="flex items-center gap-2">
                    <BookOpen size={16} />
                    Stories ({savedItems.stories.length})
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="flex items-center gap-2">
                    <FileText size={16} />
                    Resources ({savedItems.resources.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="stories" className="space-y-6">
                  {filteredStories.length === 0 ? (
                    <div className="text-center py-12">
                      <BookOpen size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h4 className="font-medium text-foreground mb-2">No stories found</h4>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredStories.map((story) => (
                        <Card key={story._id} className="hover-scale cursor-pointer group bg-gradient-card border-0">
                          <div className="relative overflow-hidden">
                            <img
                              src={story.image}
                              alt={story.title}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute top-4 right-4">
                              <SaveButton
                                itemId={story._id}
                                itemType="story"
                                initialSaved={true}
                                onSave={(id, saved) => {
                                  if (!saved) handleUnsave(id, 'story');
                                }}
                              />
                            </div>
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
                            </div>
                            <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                              {story.title}
                            </h3>
                          </CardHeader>

                          <CardContent className="pt-0">
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {story.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <User size={14} />
                                <span>{story.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock size={14} />
                                <span>Saved {formatTimeAgo(story.createdAt)}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="resources" className="space-y-6">
                  {filteredResources.length === 0 ? (
                    <div className="text-center py-12">
                      <FileText size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h4 className="font-medium text-foreground mb-2">No resources found</h4>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResources.map((resource) => (
                        <Card key={resource.id} className="hover-scale cursor-pointer group bg-gradient-card border-0">
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <FileText size={20} className="text-accent" />
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {resource.type}
                                </Badge>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleUnsave(resource.id, 'resource')}
                                  className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                                >
                                  <Trash2 size={14} />
                                </Button>
                              </div>
                            </div>
                            <h3 className="font-playfair text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                              {resource.title}
                            </h3>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock size={14} className="mr-1" />
                              <span>Saved {formatTimeAgo(resource.savedAt)}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Saved;