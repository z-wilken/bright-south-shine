import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  BookOpen, 
  Clock, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { LearningModule as LearningModuleType, ModuleStep } from '@/types';

interface LearningModuleProps {
  module: LearningModuleType;
  onComplete?: (moduleId: string) => void;
}

const LearningModule: React.FC<LearningModuleProps> = ({ module, onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState<Record<string, boolean>>({});
  
  // Example calculator state for depreciation module
  const [calcInputs, setCalcInputs] = useState({
    cost: '',
    rate: '',
    years: ''
  });
  const [calcResult, setCalcResult] = useState<number | null>(null);

  const completedSteps = Object.values(stepProgress).filter(Boolean).length;
  const progressPercentage = (completedSteps / module.steps.length) * 100;

  const handleStepComplete = (stepId: string) => {
    setStepProgress(prev => ({ ...prev, [stepId]: true }));
    
    // Move to next step if not last
    if (currentStep < module.steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 500);
    }
  };

  const handleModuleComplete = () => {
    onComplete?.(module.id);
    setIsOpen(false);
    // TODO: Store completion in backend
    console.log('Module completed:', module.id);
  };

  const calculateDepreciation = () => {
    const cost = parseFloat(calcInputs.cost);
    const rate = parseFloat(calcInputs.rate);
    const years = parseFloat(calcInputs.years);
    
    if (cost && rate && years) {
      const depreciation = (cost * rate / 100) * years;
      setCalcResult(depreciation);
      handleStepComplete(module.steps[currentStep].id);
    }
  };

  const renderStepContent = (step: ModuleStep) => {
    switch (step.type) {
      case 'text':
        return (
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{step.content}</p>
            <Button 
              onClick={() => handleStepComplete(step.id)}
              className="w-full"
            >
              <CheckCircle2 size={16} className="mr-2" />
              Mark as Read
            </Button>
          </div>
        );
        
      case 'calculator':
        return (
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{step.content}</p>
            
            <div className="grid grid-cols-1 gap-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <Label htmlFor="cost">Asset Cost (R)</Label>
                <Input
                  id="cost"
                  type="number"
                  placeholder="e.g., 100000"
                  value={calcInputs.cost}
                  onChange={(e) => setCalcInputs(prev => ({ ...prev, cost: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="rate">Depreciation Rate (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  placeholder="e.g., 20"
                  value={calcInputs.rate}
                  onChange={(e) => setCalcInputs(prev => ({ ...prev, rate: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="years">Number of Years</Label>
                <Input
                  id="years"
                  type="number"
                  placeholder="e.g., 5"
                  value={calcInputs.years}
                  onChange={(e) => setCalcInputs(prev => ({ ...prev, years: e.target.value }))}
                />
              </div>
              
              <Button onClick={calculateDepreciation} className="w-full">
                <Calculator size={16} className="mr-2" />
                Calculate Depreciation
              </Button>
              
              {calcResult !== null && (
                <div className="p-3 bg-accent/10 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Total Depreciation</p>
                  <p className="text-2xl font-bold text-accent">R{calcResult.toLocaleString()}</p>
                </div>
              )}
            </div>
          </div>
        );
        
      default:
        return <p className="text-muted-foreground">{step.content}</p>;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="hover-scale cursor-pointer group bg-gradient-card border-0">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-2">
              <BookOpen size={20} className="text-accent" />
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getDifficultyColor(module.difficulty)}>
                  {module.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} />
                  {module.estimatedTime}
                </div>
              </div>
            </div>
            <h3 className="font-playfair text-lg font-bold text-foreground group-hover:text-accent transition-colors">
              {module.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {module.description}
            </p>
            {module.completionRate !== undefined && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{module.completionRate}%</span>
                </div>
                <Progress value={module.completionRate} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-xl">{module.title}</DialogTitle>
          <DialogDescription>{module.description}</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Module Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          {/* Step navigation */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Step {currentStep + 1} of {module.steps.length}</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ArrowLeft size={14} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentStep(Math.min(module.steps.length - 1, currentStep + 1))}
                disabled={currentStep === module.steps.length - 1}
              >
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>
          
          {/* Current step content */}
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-4">
              {module.steps[currentStep]?.title}
            </h4>
            {module.steps[currentStep] && renderStepContent(module.steps[currentStep])}
          </div>
          
          {/* Complete module button */}
          {progressPercentage === 100 && (
            <Button onClick={handleModuleComplete} className="w-full" size="lg">
              Complete Module
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LearningModule;