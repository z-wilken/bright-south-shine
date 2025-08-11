import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SaveButtonProps {
  itemId: string;
  itemType: 'story' | 'resource';
  initialSaved?: boolean;
  onSave?: (itemId: string, saved: boolean) => void;
  size?: 'sm' | 'lg';
}

const SaveButton: React.FC<SaveButtonProps> = ({
  itemId,
  itemType,
  initialSaved = false,
  onSave,
  size = 'sm'
}) => {
  // Check localStorage for initial saved state
  const checkSavedState = () => {
    const savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
    return savedItems.some((item: any) => item.id === itemId) || initialSaved;
  };
  
  const [isSaved, setIsSaved] = useState(checkSavedState);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSave = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    
    // Store in localStorage temporarily
    const savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
    if (newSavedState) {
      savedItems.push({ id: itemId, type: itemType, savedAt: Date.now() });
    } else {
      const index = savedItems.findIndex((item: any) => item.id === itemId);
      if (index > -1) savedItems.splice(index, 1);
    }
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    
    // Show feedback animation
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 1000);
    
    // Call parent callback
    onSave?.(itemId, newSavedState);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size={size}
        onClick={handleSave}
        className={cn(
          "transition-colors hover-scale",
          isSaved 
            ? "text-accent hover:text-accent/80" 
            : "text-muted-foreground hover:text-accent"
        )}
      >
        <Heart 
          size={size === 'sm' ? 16 : 24}
          className={cn(
            "transition-all duration-300",
            isSaved ? "fill-current" : ""
          )} 
        />
      </Button>
      
      {showFeedback && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded animate-fade-in">
          {isSaved ? 'Saved!' : 'Removed'}
        </div>
      )}
    </div>
  );
};

export default SaveButton;