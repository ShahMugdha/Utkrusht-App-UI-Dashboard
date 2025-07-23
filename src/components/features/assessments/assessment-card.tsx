'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AssessmentCardProps {
  title: string;
  image: string;
  difficulty: string;
  onTakeAssessment?: () => void;
}

export function AssessmentCard({
  title,
  image,
  difficulty,
  onTakeAssessment,
}: AssessmentCardProps) {
  return (
    <Card className="w-[300px] h-[272px] overflow-hidden rounded-lg shadow-md">
      <CardContent className="p-0">
        <div className="relative">
          <img
            className="w-full h-[200px] object-cover"
            alt={`${title} assessment`}
            src={image}
          />
          <Badge
            className="absolute top-2 right-2 bg-primary text-primary-foreground"
            variant="default"
          >
            {difficulty}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <Button onClick={onTakeAssessment} className="w-full" size="sm">
            Take Assessment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
