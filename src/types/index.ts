// Shared types for BrightWealth app
export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: number;
  savedItems: string[];
  progress: number;
  goals?: string[]; // finance, mindset, career
}

export interface Story {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  status: 'draft' | 'published' | 'pending';
  tags: string[];
  createdAt: number;
  publishedAt?: number;
  image?: string;
  likes: number;
  comments: number;
  featured?: boolean;
}

export interface Comment {
  _id: string;
  storyId: string;
  userId: string;
  content: string;
  createdAt: number;
  author: string;
}

export interface NewsletterSubscriber {
  _id: string;
  email: string;
  subscribedAt: number;
  status: 'active' | 'unsubscribed';
}

export interface DailyTip {
  id: string;
  title: string;
  content: string;
  category: 'finance' | 'mindset' | 'career';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  category: 'finance' | 'mindset' | 'career';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  steps: ModuleStep[];
  completionRate?: number;
}

export interface ModuleStep {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'calculator' | 'quiz' | 'video';
  completed?: boolean;
}

export interface UserProgress {
  storiesRead: number;
  challengesCompleted: number;
  modulesCompleted: number;
  badges: string[];
  currentStreak: number;
}