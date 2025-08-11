import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Heart, MessageCircle, Flag, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Comment } from '@/types';
import ShareButton from './ShareButton';

interface CommentSectionProps {
  storyId: string;
  comments?: Comment[];
  onAddComment?: (content: string) => void;
  onLikeComment?: (commentId: string) => void;
  currentUserId?: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  storyId,
  comments = [],
  onAddComment,
  onLikeComment,
  currentUserId
}) => {
  const [newComment, setNewComment] = useState('');
  const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Replace with actual comments from backend
  const mockComments: Comment[] = [
    {
      _id: '1',
      storyId,
      userId: 'user1',
      author: 'Thabo M.',
      content: 'This really resonates with me. I started tracking my expenses last month and already saved R500 just by being more aware of where my money goes.',
      createdAt: Date.now() - 3600000 // 1 hour ago
    },
    {
      _id: '2',
      storyId,
      userId: 'user2',
      author: 'Sarah K.',
      content: 'Thank you for sharing this! The stokvel approach is something I want to try with my friends. Did you find it hard to get everyone committed?',
      createdAt: Date.now() - 7200000 // 2 hours ago
    }
  ];

  const displayComments = comments.length > 0 ? comments : mockComments;

  const handleSubmitComment = async () => {
    if (!newComment.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Create comment object and store locally
      const comment = {
        _id: `comment-${Date.now()}`,
        storyId,
        userId: 'current-user',
        author: 'Current User',
        content: newComment,
        createdAt: Date.now()
      };
      
      // Store in localStorage temporarily
      const storyComments = JSON.parse(localStorage.getItem(`comments-${storyId}`) || '[]');
      storyComments.unshift(comment);
      localStorage.setItem(`comments-${storyId}`, JSON.stringify(storyComments));
      
      // Clear form
      setNewComment('');
      
      // Call parent callback
      onAddComment?.(newComment);
      
      // Force page refresh to show new comment (simple approach)
      window.location.reload();
      
    } catch (error) {
      console.error('Failed to submit comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleCommentExpansion = (commentId: string) => {
    setExpandedComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  };

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  return (
    <div className="space-y-6">
      {/* Comment form */}
      <Card className="bg-card border-0">
        <CardHeader className="pb-4">
          <h3 className="font-playfair text-lg font-semibold text-foreground">
            Join the Conversation
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Share your thoughts, experiences, or questions..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px] resize-none"
          />
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              Be respectful and constructive in your comments
            </p>
            <Button 
              onClick={handleSubmitComment}
              disabled={!newComment.trim() || isSubmitting}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comments list */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-playfair text-lg font-semibold text-foreground">
            Comments ({displayComments.length})
          </h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Newest First
            </Button>
          </div>
        </div>

        {displayComments.length === 0 ? (
          <Card className="bg-muted/50 border-0">
            <CardContent className="p-8 text-center">
              <MessageCircle size={48} className="mx-auto text-muted-foreground mb-4" />
              <h4 className="font-medium text-foreground mb-2">No comments yet</h4>
              <p className="text-muted-foreground">Be the first to share your thoughts!</p>
            </CardContent>
          </Card>
        ) : (
          displayComments.map((comment) => {
            const isExpanded = expandedComments.has(comment._id);
            const shouldTruncate = comment.content.length > 200;
            const displayContent = shouldTruncate && !isExpanded 
              ? comment.content.slice(0, 200) + '...' 
              : comment.content;

            return (
              <Card key={comment._id} className="bg-card border-0">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      <AvatarFallback className="bg-accent/20 text-accent text-sm">
                        {comment.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground text-sm">
                            {comment.author}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {formatTimeAgo(comment.createdAt)}
                          </span>
                        </div>
                        
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal size={14} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Flag size={14} className="mr-2" />
                              Report
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {displayContent}
                      </p>
                      
                      {shouldTruncate && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleCommentExpansion(comment._id)}
                          className="h-auto p-0 text-accent hover:text-accent/80"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </Button>
                      )}
                      
                      <div className="flex items-center gap-4 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            // Simple like functionality with localStorage
                            const likedComments = JSON.parse(localStorage.getItem('likedComments') || '[]');
                            const isLiked = likedComments.includes(comment._id);
                            if (isLiked) {
                              const filtered = likedComments.filter((id: string) => id !== comment._id);
                              localStorage.setItem('likedComments', JSON.stringify(filtered));
                            } else {
                              likedComments.push(comment._id);
                              localStorage.setItem('likedComments', JSON.stringify(likedComments));
                            }
                            onLikeComment?.(comment._id);
                          }}
                          className="h-auto p-0 text-muted-foreground hover:text-accent"
                        >
                          <Heart size={14} className="mr-1" />
                          Like
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 text-muted-foreground hover:text-accent"
                        >
                          <MessageCircle size={14} className="mr-1" />
                          Reply
                        </Button>
                        
                        <ShareButton
                          url={`${window.location.origin}/stories/${storyId}#comment-${comment._id}`}
                          title={`Comment by ${comment.author}`}
                          description={comment.content.slice(0, 100)}
                          size="sm"
                          variant="ghost"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CommentSection;