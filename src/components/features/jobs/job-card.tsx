'use client';

import { BriefcaseIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface JobDetail {
  icon: React.ReactNode;
  text: string;
}

interface Skill {
  name: string;
  highlighted: boolean;
}

interface JobCardProps {
  company: string;
  title: string;
  jobType: string;
  location: string;
  postedTime: string;
  salary?: string;
  negotiable?: string;
  isNew?: boolean;
  isAspirational?: boolean;
  isPayLevelUp?: boolean;
  skills: Skill[];
  companyLogo: string;
  backgroundImage?: string;
  onApply?: () => void;
  className?: string;
}

export function JobCard({
  company,
  title,
  jobType,
  location,
  postedTime,
  salary,
  negotiable,
  isNew = false,
  isAspirational = false,
  isPayLevelUp = false,
  skills,
  companyLogo,
  backgroundImage,
  onApply,
  className,
}: JobCardProps) {
  const jobDetails: JobDetail[] = [
    {
      icon: <BriefcaseIcon className="w-3.5 h-3.5" />,
      text: jobType,
    },
    {
      icon: <MapPinIcon className="w-3.5 h-3.5" />,
      text: location,
    },
    {
      icon: <ClockIcon className="w-3.5 h-3.5" />,
      text: postedTime,
    },
  ];

  return (
    <Card
      className={cn(
        'w-full max-w-[900px] h-[180px] relative border border-solid border-primary/20 rounded-2xl overflow-hidden',
        className
      )}
    >
      {/* Top badges */}
      {(isAspirational || isPayLevelUp) && (
        <div className="inline-flex items-center justify-center gap-1 pl-4 pr-6 py-0.5 absolute top-0 right-0 bg-sky-900 rounded-[0px_0px_0px_8px]">
          <img
            className="w-3.5 h-[9px]"
            alt="Badge icon"
            src={
              isPayLevelUp
                ? '/figmaAssets/vector-12.svg'
                : '/figmaAssets/vector-19.svg'
            }
          />
          <span className="font-normal text-white text-[10px] leading-[18px] whitespace-nowrap">
            {isPayLevelUp ? 'Pay level up' : 'Aspirational title'}
          </span>
        </div>
      )}

      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex">
          {/* Company logo */}
          <div className="w-14 h-14 mr-4">
            <div className="relative w-[52px] h-[53px]">
              {backgroundImage && (
                <img
                  className="absolute w-[50px] h-[50px] top-[3px] left-px"
                  alt="Background"
                  src={backgroundImage}
                />
              )}
              <img
                className="absolute w-[52px] h-[52px] top-0 left-0 object-cover"
                alt={`${company} logo`}
                src={companyLogo}
              />
            </div>
          </div>

          {/* Company and job details */}
          <div className="flex flex-col flex-1">
            <h3 className="font-medium text-black text-base leading-normal mb-1">
              {company}
            </h3>

            {title && (
              <h4 className="font-semibold text-lg text-primary mb-2">
                {title}
              </h4>
            )}

            <div className="flex items-center gap-5 mb-3">
              {jobDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div className="relative w-4 h-4 text-stone-500">
                    {detail.icon}
                  </div>
                  <span className="font-normal text-stone-500 text-xs leading-[18px] whitespace-nowrap">
                    {detail.text}
                  </span>
                </div>
              ))}

              {isNew && (
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                  New
                </Badge>
              )}
            </div>

            {/* Skills */}
            <div className="flex items-center gap-2 mb-4">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant={skill.highlighted ? 'default' : 'secondary'}
                  className={cn(
                    skill.highlighted
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-gray-700'
                  )}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Salary and apply section */}
          <div className="flex flex-col items-end justify-between">
            {salary && (
              <div className="text-right">
                <div className="font-bold text-lg text-primary">{salary}</div>
                {negotiable && (
                  <div className="text-xs text-stone-500">{negotiable}</div>
                )}
              </div>
            )}

            <Button
              onClick={onApply}
              className="bg-primary hover:bg-primary/90"
            >
              Apply now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
