import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Target, 
  BookOpen, 
  CheckCircle2, 
  Flame,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';
import { UserProgress } from '@/types';
import ShareButton from './ShareButton';

interface ProgressTrackerProps {
  userId?: string;
  onBadgeEarned?: (badgeId: string) => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ 
  userId,
  onBadgeEarned 
}) => {
  const [progress, setProgress] = useState<UserProgress>({
    storiesRead: 0,
    challengesCompleted: 0,
    modulesCompleted: 0,
    badges: [],
    currentStreak: 0
  });
  const [showNewBadge, setShowNewBadge] = useState<string | null>(null);

  // TODO: Load user progress from backend
  useEffect(() => {
    // Mock data for demonstration
    const mockProgress: UserProgress = {
      storiesRead: 7,
      challengesCompleted: 12,
      modulesCompleted: 2,
      badges: ['first-story', 'early-bird', 'finance-focused'],
      currentStreak: 5
    };
    setProgress(mockProgress);
  }, [userId]);

  const badges = [
    {
      id: 'first-story',
      name: 'Story Explorer',
      description: 'Read your first story',
      icon: BookOpen,
      requirement: 1,
      category: 'reading',
      earned: progress.badges.includes('first-story')
    },
    {
      id: 'story-enthusiast',
      name: 'Story Enthusiast',
      description: 'Read 10 stories',
      icon: Star,
      requirement: 10,
      category: 'reading',
      earned: progress.badges.includes('story-enthusiast')
    },
    {
      id: 'early-bird',
      name: 'Early Bird',
      description: 'Complete 5 daily challenges',
      icon: Flame,
      requirement: 5,
      category: 'challenges',
      earned: progress.badges.includes('early-bird')
    },
    {
      id: 'challenge-master',
      name: 'Challenge Master',
      description: 'Complete 20 daily challenges',
      icon: Trophy,
      requirement: 20,
      category: 'challenges',
      earned: progress.badges.includes('challenge-master')
    },
    {
      id: 'finance-focused',
      name: 'Finance Focused',
      description: 'Complete 3 finance modules',
      icon: TrendingUp,
      requirement: 3,
      category: 'modules',
      earned: progress.badges.includes('finance-focused')
    },
    {
      id: 'learning-champion',
      name: 'Learning Champion',
      description: 'Complete 5 learning modules',
      icon: Award,
      requirement: 5,
      category: 'modules',
      earned: progress.badges.includes('learning-champion')
    }
  ];

  const goals = [
    {
      name: 'Stories Read',
      current: progress.storiesRead,
      target: 10,
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      name: 'Daily Challenges',
      current: progress.challengesCompleted,
      target: 15,
      icon: Target,
      color: 'text-green-500'
    },
    {
      name: 'Learning Modules',
      current: progress.modulesCompleted,
      target: 5,
      icon: CheckCircle2,
      color: 'text-purple-500'
    }
  ];

  const checkForNewBadges = () => {
    badges.forEach(badge => {
      if (!badge.earned) {
        let shouldEarn = false;
        
        switch (badge.category) {
          case 'reading':
            shouldEarn = progress.storiesRead >= badge.requirement;
            break;
          case 'challenges':
            shouldEarn = progress.challengesCompleted >= badge.requirement;
            break;
          case 'modules':
            shouldEarn = progress.modulesCompleted >= badge.requirement;
            break;
        }
        
        if (shouldEarn) {
          // TODO: Award badge in backend
          setProgress(prev => ({
            ...prev,
            badges: [...prev.badges, badge.id]
          }));
          setShowNewBadge(badge.id);
          setTimeout(() => setShowNewBadge(null), 3000);
          onBadgeEarned?.(badge.id);
        }
      }
    });
  };

  useEffect(() => {
    checkForNewBadges();
  }, [progress.storiesRead, progress.challengesCompleted, progress.modulesCompleted]);

  const earnedBadges = badges.filter(badge => badge.earned);
  const availableBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="space-y-6">
      {/* Overall Progress Card */}
      <Card className="bg-gradient-card border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-xl font-semibold text-foreground">
              Your Progress
            </h3>
            <div className="flex items-center gap-2">
              <Flame size={20} className="text-orange-500" />
              <span className="font-bold text-orange-500">{progress.currentStreak}</span>
              <span className="text-sm text-muted-foreground">day streak</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Goals Progress */}
          {goals.map((goal) => {
            const percentage = Math.min((goal.current / goal.target) * 100, 100);
            const Icon = goal.icon;
            
            return (
              <div key={goal.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className={goal.color} />
                    <span className="text-sm font-medium text-foreground">{goal.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {goal.current}/{goal.target}
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
          
          {/* Badge Summary */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              <Trophy size={16} className="inline mr-1" />
              {earnedBadges.length} badges earned
            </div>
            <Button variant="outline" size="sm">
              View All Badges
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Earned Badges */}
      {earnedBadges.length > 0 && (
        <Card className="bg-card border-0">
          <CardHeader className="pb-4">
            <h3 className="font-playfair text-lg font-semibold text-foreground">
              Your Badges
            </h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {earnedBadges.map((badge) => {
                const Icon = badge.icon;
                const isNew = showNewBadge === badge.id;
                
                return (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-lg bg-accent/10 border-2 border-accent/20 text-center transition-all duration-300 ${
                      isNew ? 'animate-scale-in shadow-lg border-accent' : ''
                    }`}
                  >
                    <Icon size={32} className="mx-auto text-accent mb-2" />
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      {badge.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {badge.description}
                    </p>
                    {isNew && (
                      <Badge className="mt-2 bg-accent text-accent-foreground animate-pulse">
                        New!
                      </Badge>
                    )}
                    <div className="mt-2">
                      <ShareButton
                        url={`${window.location.origin}/profile`}
                        title={`I just earned the "${badge.name}" badge!`}
                        hashtags={['BrightWealth', 'FinancialGrowth', 'Achievement']}
                        size="sm"
                        variant="ghost"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Next Badges to Earn */}
      {availableBadges.length > 0 && (
        <Card className="bg-card border-0">
          <CardHeader className="pb-4">
            <h3 className="font-playfair text-lg font-semibold text-foreground">
              Next Achievements
            </h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableBadges.slice(0, 4).map((badge) => {
                const Icon = badge.icon;
                let currentValue = 0;
                
                switch (badge.category) {
                  case 'reading':
                    currentValue = progress.storiesRead;
                    break;
                  case 'challenges':
                    currentValue = progress.challengesCompleted;
                    break;
                  case 'modules':
                    currentValue = progress.modulesCompleted;
                    break;
                }
                
                const progressPercentage = Math.min((currentValue / badge.requirement) * 100, 100);
                
                return (
                  <div key={badge.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={24} className="text-muted-foreground" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">
                          {badge.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {badge.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{currentValue}/{badge.requirement}</span>
                        <span>{Math.round(progressPercentage)}%</span>
                      </div>
                      <Progress value={progressPercentage} className="h-1.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProgressTracker;