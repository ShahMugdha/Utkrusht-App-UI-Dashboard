'use client';

import { Card, CardContent } from '@/components/ui/card';
import type { Skill } from './index';

interface MongoDBSkillCardProps {
  skill: Skill;
}

export function MongoDBSkillCard({ skill }: MongoDBSkillCardProps) {
  return (
    <Card className="w-full h-[84px] rounded-[0px_0px_16px_16px] bg-primary shadow-[0px_4px_4px_#00000040] overflow-hidden">
      <CardContent className="p-0">
        <div className="flex w-[364px] items-center justify-between h-full py-8 mx-auto">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8"
              alt="MongoDB"
              src="/figmaAssets/frame-86184-1.svg"
            />
            <div className="flex items-baseline gap-2">
              <span className="font-normal text-primary-foreground text-lg">
                {skill.name}
              </span>
              <span className="font-normal text-stone-100 text-[10px]">
                {skill.level}
              </span>
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="font-extralight text-stone-300 text-[32px] leading-[44.8px]">
              {skill.percentage}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
