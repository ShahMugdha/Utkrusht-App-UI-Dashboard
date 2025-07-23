'use client';

import { Button } from '@/components/ui/button';
import { SkillCard } from './skill-card';
import { NotificationCard } from './notification-card';
import { MongoDBSkillCard } from './mongodb-skill-card';

// Types for skill data
export interface Skill {
  id: number;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  percentage: string;
  icon?: string;
}

export interface BenchmarkData {
  width: string;
  percentage: string;
  active: boolean;
}

export function SkillWallet() {
  // Data for MongoDB skill cards
  const mongoDbSkills: Skill[] = [
    { id: 1, name: 'MongoDB', level: 'Beginner', percentage: '92%' },
    { id: 2, name: 'MongoDB', level: 'Beginner', percentage: '92%' },
    { id: 3, name: 'MongoDB', level: 'Beginner', percentage: '92%' },
  ];

  return (
    <section className="relative w-full max-w-[492px]">
      <div className="relative">
        <div className="relative w-full max-w-[480px] mx-auto">
          <div className="relative rounded-[24px_0px_0px_24px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
            <div className="w-full h-[940px] rounded-[24px_0px_0px_24px] bg-gradient-to-br from-green-900 to-green-700 overflow-hidden">
              {/* Notification Card */}
              <div className="pt-[94px] px-4">
                <NotificationCard />
              </div>

              {/* Skill Wallet Cards */}
              <div className="flex flex-col items-center gap-4 mt-[100px] px-10">
                <h3 className="font-normal text-white text-base">
                  Skill Wallet
                </h3>

                <div className="w-full max-w-[400px] space-y-4">
                  {/* Main Node.js certificate card */}
                  <SkillCard
                    name="Node.js"
                    level="Intermediate"
                    percentage="92%"
                    icon="/figmaAssets/vector-18.svg"
                    isMainCard
                    expiryDate="05 December 2025"
                    certificateViews={28}
                    onShareClick={() =>
                      console.log('Share Node.js certificate')
                    }
                  />

                  {/* Docker skill card */}
                  <SkillCard
                    name="Docker"
                    level="Advanced"
                    percentage="87%"
                    icon="/figmaAssets/frame-86184.svg"
                    isCompact
                  />

                  {/* MongoDB skill cards */}
                  {mongoDbSkills.map((skill) => (
                    <MongoDBSkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
