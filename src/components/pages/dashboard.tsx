'use client';

import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeaderActions } from '@/components/ui/header-actions';
import { Sidebar } from '@/components/layout/sidebar';
import { AssessmentSection } from '@/components/features/assessments/assessment-section';
import { JobsSection } from '@/components/features/jobs/jobs-section';
import { cn } from '@/lib/utils';

export function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Data for pagination dots
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <div className="bg-gray-50 flex flex-row w-full min-h-screen">
      <div className="flex w-full max-w-[1440px] mx-auto">
        {/* Main Content Area */}
        <div className={cn(
          'flex-1 transition-all duration-300',
          isSidebarCollapsed ? 'mr-16' : 'mr-[492px]'
        )}>
          <div className="relative w-full">
            {/* Header with user profile and notifications - only show when sidebar is expanded */}
            {!isSidebarCollapsed && (
              <div className="flex items-center justify-end gap-8 absolute top-6 right-8 z-10">
                <HeaderActions
                  notificationCount={4}
                  userImage="/figmaAssets/mask-group.png"
                  onSearchClick={() => console.log('Search clicked')}
                  onNotificationClick={() => console.log('Notifications clicked')}
                  onProfileClick={() => console.log('Profile clicked')}
                />
              </div>
            )}

            {/* Navigation Header */}
            <header className="w-full h-[74px] bg-white border-b border-gray-100">
              <Navigation className="px-10" />
            </header>

            {/* Assessment Section */}
            <AssessmentSection paginationDots={paginationDots} />

            {/* Jobs Section */}
            <JobsSection />
          </div>
        </div>

        {/* Collapsible Right Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}