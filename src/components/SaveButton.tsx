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
  const [isSaved, setIsSaved] = useState(initialSaved);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSave = () => {
    // TODO: Implement actual save functionality with backend
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    
    // Show feedback animation
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 1000);
    
    // Call parent callback
    onSave?.(itemId, newSavedState);
    
    // TODO: Store in user's savedItems array
    console.log(`${newSavedState ? 'Saved' : 'Unsaved'} ${itemType}:`, itemId);
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