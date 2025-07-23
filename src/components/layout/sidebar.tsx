'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeaderActions } from '@/components/ui/header-actions';
import { SkillWallet } from '@/components/features/skill-wallet';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      'fixed right-0 top-0 h-full transition-all duration-300 z-20',
      isCollapsed ? 'w-16' : 'w-[492px]',
      className
    )}>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-8 h-8 rounded-full bg-primary hover:bg-primary/90 border-0 shadow-lg p-0"
        variant="outline"
      >
        {isCollapsed ? (
          <ChevronLeftIcon className="w-4 h-4 text-primary-foreground" />
        ) : (
          <ChevronRightIcon className="w-4 h-4 text-primary-foreground" />
        )}
      </Button>

      {/* Sidebar Content */}
      <div className={cn(
        'h-full transition-opacity duration-300',
        isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}>
        <SkillWallet />
      </div>
      
      {/* Collapsed state - slim green bar with header icons */}
      {isCollapsed && (
        <div className="h-full w-16 bg-gradient-to-b from-green-900 to-green-700 flex flex-col items-center justify-start pt-6">
          {/* Header icons arranged vertically */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <HeaderActions 
              className="flex-col gap-4"
              onSearchClick={() => console.log('Search clicked')}
              onNotificationClick={() => console.log('Notifications clicked')}
              onProfileClick={() => console.log('Profile clicked')}
            />
          </div>

          {/* Skill wallet indicator icons */}
          <div className="flex flex-col items-center gap-6 pt-8">
            <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <div className="w-2 h-2 bg-amber-400 rounded-sm"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return {
    isCollapsed,
    setIsCollapsed,
    toggle: () => setIsCollapsed(!isCollapsed),
  };
}