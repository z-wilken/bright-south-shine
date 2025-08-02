import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Lightbulb, Clock } from 'lucide-react';
import { DailyTip as DailyTipType } from '@/types';

interface DailyTipProps {
  onComplete?: (tipId: string) => void;
}

const DailyTip: React.FC<DailyTipProps> = ({ onComplete }) => {
  const [currentTip, setCurrentTip] = useState<DailyTipType | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // TODO: Replace with actual data fetching from backend
  const tips: DailyTipType[] = [
    {
      id: 'tip-1',
      title: 'Track One Expense Today',
      content: 'Write down one purchase you make today and ask yourself: Was this necessary? This simple habit builds awareness of your spending patterns.',
      category: 'finance',
      difficulty: 'beginner',
      estimatedTime: '2 min'
    },
    {
      id: 'tip-2',
      title: 'Practice the 5-4-3-2-1 Grounding Technique',
      content: 'Notice 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. Perfect for reducing financial anxiety.',
      category: 'mindset',
      difficulty: 'beginner',
      estimatedTime: '3 min'
    },
    {
      id: 'tip-3',
      title: 'Update Your LinkedIn Headline',
      content: 'Spend 5 minutes crafting a compelling LinkedIn headline that reflects your current goals. Small career investments compound over time.',
      category: 'career',
      difficulty: 'beginner',
      estimatedTime: '5 min'
    }
  ];

  useEffect(() => {
    // TODO: Implement daily rotation logic based on actual date
    // For now, rotating based on day of week
    const dayIndex = new Date().getDay() % tips.length;
    setCurrentTip(tips[dayIndex]);
    
    // TODO: Check if user has completed today's tip from backend
    const completedToday = localStorage.getItem(`tip-completed-${new Date().toDateString()}`);
    setIsCompleted(!!completedToday);
  }, []);

  const handleComplete = () => {
    if (!currentTip) return;
    
    setIsCompleted(true);
    
    // TODO: Store completion in backend
    localStorage.setItem(`tip-completed-${new Date().toDateString()}`, 'true');
    
    onComplete?.(currentTip.id);
  };

  if (!currentTip) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'finance': return 'bg-primary/10 text-primary';
      case 'mindset': return 'bg-accent/10 text-accent';
      case 'career': return 'bg-secondary/10 text-secondary';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <Card className="bg-card border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb size={20} className="text-accent" />
            <h3 className="font-playfair text-lg font-semibold text-foreground">
              Daily Challenge
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={getCategoryColor(currentTip.category)}>
              {currentTip.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={12} />
              {currentTip.estimatedTime}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <h4 className="font-semibold text-foreground mb-2">
          {currentTip.title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {currentTip.content}
        </p>
        
        <Button
          onClick={handleComplete}
          disabled={isCompleted}
          className={`w-full transition-all duration-300 ${
            isCompleted 
              ? 'bg-accent/20 text-accent hover:bg-accent/20' 
              : 'bg-accent hover:bg-accent/90 text-accent-foreground'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle size={16} className="mr-2" />
              Completed Today!
            </>
          ) : (
            'Mark as Complete'
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DailyTip;