'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { BenchmarkData } from './index';

interface SkillCardProps {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  percentage: string;
  icon: string;
  isMainCard?: boolean;
  isCompact?: boolean;
  expiryDate?: string;
  certificateViews?: number;
  onShareClick?: () => void;
}

export function SkillCard({
  name,
  level,
  percentage,
  icon,
  isMainCard = false,
  isCompact = false,
  expiryDate,
  certificateViews,
  onShareClick,
}: SkillCardProps) {
  // Data for benchmarking percentiles (only for main card)
  const benchmarkData: BenchmarkData[] = [
    { width: 'w-3', percentage: '1%', active: false },
    { width: 'w-7', percentage: '5%', active: false },
    { width: 'w-10', percentage: '10%', active: false },
    { width: 'w-14', percentage: '20%', active: true },
    { width: 'w-20', percentage: '30%', active: false },
    { width: 'w-[100px]', percentage: '40%', active: false },
    { width: 'w-[120px]', percentage: '50%', active: false },
    { width: 'w-40', percentage: 'Foundation stage', active: false },
  ];

  if (isCompact) {
    return (
      <Card className="w-full h-[84px] rounded-[0px_0px_16px_16px] bg-primary shadow-[0px_4px_4px_#00000040] overflow-hidden">
        <CardContent className="p-0">
          <div className="flex w-[364px] items-center justify-between h-full py-8 mx-auto">
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8"
                alt={name}
                src={icon}
              />
              <div className="flex items-baseline gap-2">
                <span className="font-normal text-primary-foreground text-lg">
                  {name}
                </span>
                <span className="font-normal text-stone-100 text-[10px]">
                  {level}
                </span>
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="font-extralight text-stone-300 text-[32px] leading-[44.8px]">
                {percentage}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn(
      'w-full rounded-2xl bg-white shadow-[0px_4px_4px_#00000040] overflow-hidden',
      isMainCard ? 'h-[308px]' : 'h-[84px]'
    )}>
      <CardContent className="p-0">
        {/* Header section */}
        <div className="flex w-[374px] items-center justify-between p-2.5 mx-auto">
          <div className="flex items-start gap-3">
            <div className="flex w-10 h-10 items-center gap-2 p-1 bg-sky-900 rounded">
              <div className="relative w-8 h-8">
                <div className="relative w-[25px] h-[29px] top-0.5 left-[3px] bg-[url(/figmaAssets/vector-18.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[11px] h-3 top-[9px] left-2.5"
                    alt="Skill icon"
                    src="/figmaAssets/vector-8.svg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between self-stretch">
              <div className="flex items-baseline gap-2">
                <h4 className="font-bold text-[#000000cc] text-lg">
                  {name}
                </h4>
                <Badge className="px-1 py-0 bg-[#8beab74c] text-primary rounded-[99px]">
                  <span className="text-[10px] font-normal">
                    {level}
                  </span>
                </Badge>
              </div>

              {expiryDate && (
                <div className="flex items-center gap-0.5 self-stretch">
                  <span className="font-normal text-[#aeadaa] text-[10px] tracking-[0.20px]">
                    Expiry:
                  </span>
                  <span className="font-normal text-stone-500 text-[10px]">
                    {expiryDate}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold text-primary text-[32px] leading-[44.8px]">
              {percentage}
            </span>
          </div>
        </div>

        {/* Benchmarking section - only for main card */}
        {isMainCard && (
          <>
            <div className="flex flex-col w-full items-start gap-2 px-[18px] py-3 bg-stone-100">
              <div className="flex flex-col items-end gap-3 self-stretch w-full">
                <div className="flex flex-col items-start gap-1 self-stretch w-full">
                  <div className="flex items-end gap-1">
                    <div className="relative w-[18px] h-[18px]">
                      <img
                        className="absolute w-[17px] h-3 top-[3px] left-px"
                        alt="Benchmark icon"
                        src="/figmaAssets/vector-15.svg"
                      />
                    </div>
                    <span className="font-semibold text-stone-600 text-xs">
                      Global Benchmarking
                    </span>
                  </div>

                  <p className="text-[10px]">
                    <span className="font-semibold text-stone-500">
                      Top 20%{' '}
                    </span>
                    <span className="text-stone-500">
                      out of 1,75,345 {name} professionals
                    </span>
                  </p>
                </div>

                <div className="flex flex-col items-start gap-0.5 self-stretch w-full">
                  {benchmarkData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-[5px]"
                    >
                      <div
                        className={cn(
                          item.width,
                          'rounded-[99px]',
                          item.active 
                            ? 'h-2 bg-primary' 
                            : `h-1 ${index < 3 ? 'bg-[#29be70]' : 'bg-[#ecebea]'}`
                        )}
                      />
                      <span
                        className={cn(
                          'text-[10px] text-center',
                          item.active 
                            ? 'font-bold text-black' 
                            : 'font-normal text-[#44403c66]'
                        )}
                      >
                        {item.percentage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificate stats and share button */}
            <div className="flex justify-between items-center px-[18px] mt-2">
              <div className="flex items-start gap-1">
                <div className="relative w-3 h-3">
                  <img
                    className="absolute w-[11px] h-2 top-0.5 left-0"
                    alt="Views"
                    src="/figmaAssets/vector-14.svg"
                  />
                </div>
                <span className="text-[10px] text-stone-500">
                  <span className="font-bold">
                    {certificateViews} certificate views
                  </span>{' '}
                  this week
                </span>
                <div className="relative w-3 h-3">
                  <img
                    className="absolute w-[11px] h-[7px] top-[3px] left-px"
                    alt="Trend"
                    src="/figmaAssets/vector-12.svg"
                  />
                </div>
              </div>

              <Button
                variant="ghost"
                className="h-auto px-4 py-2 text-primary hover:bg-primary/10"
                onClick={onShareClick}
              >
                <img
                  className="w-3 h-3.5 mr-2"
                  alt="Share"
                  src="/figmaAssets/vector-9.svg"
                />
                <span className="font-semibold text-xs">
                  Share Certificate
                </span>
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}