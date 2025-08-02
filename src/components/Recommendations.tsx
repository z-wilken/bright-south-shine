import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Story } from '@/types';

interface RecommendationsProps {
  userGoals?: string[];
  maxItems?: number;
}

const Recommendations: React.FC<RecommendationsProps> = ({ 
  userGoals = ['finance'], 
  maxItems = 3 
}) => {
  // TODO: Implement recommendation logic based on user goals and interactions
  // For now, using placeholder data
  const recommendedStories: Story[] = [
    {
      _id: '1',
      title: 'Smart Budgeting for Young Professionals',
      excerpt: 'Learn how to manage your money effectively in your 20s and 30s.',
      author: 'Thabo Mthembu',
      tags: ['finance', 'budgeting'],
      createdAt: Date.now(),
      status: 'published',
      content: '',
      likes: 24,
      comments: 8,
      featured: true
    }
  ];

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-playfair text-2xl font-bold text-foreground">
            Recommended for You
          </h2>
          <p className="text-muted-foreground">
            Based on your interests: {userGoals.join(', ')}
          </p>
        </div>
        <Button variant="ghost" className="text-accent hover:text-accent/80">
          See More <ArrowRight size={16} className="ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedStories.slice(0, maxItems).map((story) => (
          <Card key={story._id} className="hover-scale cursor-pointer group bg-gradient-card border-0">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap gap-2 mb-2">
                {story.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="font-playfair text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {story.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {story.excerpt}
              </p>
              <div className="mt-4 text-xs text-muted-foreground">
                By {story.author}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;