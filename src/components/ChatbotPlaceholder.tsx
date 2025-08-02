import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MessageCircle, Bot, Clock, Mail } from 'lucide-react';

interface ChatbotPlaceholderProps {
  variant?: 'floating' | 'inline';
  showFAQs?: boolean;
}

const ChatbotPlaceholder: React.FC<ChatbotPlaceholderProps> = ({ 
  variant = 'floating',
  showFAQs = true 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      question: "How do I submit my financial story?",
      answer: "Visit our Contact page and use the story submission form. Share your journey, challenges, and lessons learned to inspire others in our community."
    },
    {
      question: "What topics do you cover?",
      answer: "We focus on financial literacy, mindfulness, and personal growth specifically for South Africans. Topics include budgeting, investing, career development, and mindful money management."
    },
    {
      question: "How can I save articles for later?",
      answer: "Click the heart icon on any story or resource to save it. You'll be able to access your saved items from your profile page (coming soon!)."
    },
    {
      question: "Do you offer personalized advice?",
      answer: "Currently, we provide educational content and community stories. Personalized financial advice features are planned for future releases."
    }
  ];

  const ChatbotContent = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Bot size={48} className="mx-auto text-accent" />
        <h3 className="font-playfair text-xl font-semibold">AI Assistant Coming Soon!</h3>
        <p className="text-muted-foreground">
          Our intelligent assistant will help you navigate financial topics, 
          find relevant stories, and get instant answers to your questions.
        </p>
      </div>

      {showFAQs && (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground border-b pb-2">
            Frequently Asked Questions
          </h4>
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-muted/50 border-0">
              <CardContent className="p-4">
                <h5 className="font-medium text-foreground mb-2">{faq.question}</h5>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="bg-accent/10 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2 text-accent">
          <Clock size={16} />
          <span className="font-medium text-sm">What's Coming</span>
        </div>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Instant answers to financial questions</li>
          <li>• Personalized content recommendations</li>
          <li>• Budget planning assistance</li>
          <li>• Goal tracking and reminders</li>
        </ul>
      </div>

      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          Have a question that can't wait?
        </p>
        <Button variant="outline" className="w-full">
          <Mail size={16} className="mr-2" />
          Contact Us Directly
        </Button>
      </div>
    </div>
  );

  if (variant === 'floating') {
    return (
      <>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="fixed bottom-6 right-6 rounded-full shadow-lg hover-scale bg-accent hover:bg-accent/90 text-accent-foreground z-50"
            >
              <MessageCircle size={24} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="sr-only">AI Assistant</DialogTitle>
              <DialogDescription className="sr-only">
                Preview of upcoming AI assistant features
              </DialogDescription>
            </DialogHeader>
            <ChatbotContent />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <Card className="bg-gradient-card border-0">
      <CardContent className="p-6">
        <ChatbotContent />
      </CardContent>
    </Card>
  );
};

export default ChatbotPlaceholder;