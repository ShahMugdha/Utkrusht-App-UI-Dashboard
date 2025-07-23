import { BellIcon, HelpCircleIcon, SearchIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JobOpportunitiesSection } from "./sections/JobOpportunitiesSection";
import { JobsUnlockedSection } from "./sections/JobsUnlockedSection";
import { RecommendedAssessmentsSection } from "./sections/RecommendedAssessmentsSection";
import { SkillWalletSection } from "./sections/SkillWalletSection";

export const Dashboard = (): JSX.Element => {
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
        <div className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'mr-16' : 'mr-[492px]'}`}>
          <div className="relative w-full">
            {/* Header with user profile and notifications */}
            <div className="flex items-center justify-end gap-8 absolute top-6 right-8 z-10">
              <div className="relative w-6 h-6">
                <SearchIcon className="w-5 h-5" />
              </div>

              <div className="inline-flex items-center gap-2 px-2 py-1.5 relative">
                <div className="relative w-[26px] h-[30px]">
                  <div className="relative w-7 h-[30px]">
                    <div className="absolute w-6 h-6 top-1.5 left-0">
                      <BellIcon className="w-[18px] h-[19px] absolute top-0.5 left-[3px]" />
                    </div>

                    <Badge className="absolute w-4 h-4 top-0 left-2.5 bg-amber-400 text-amber-950 border-amber-500 rounded-lg px-0 py-0 flex items-center justify-center">
                      <span className="text-xs font-semibold">4</span>
                    </Badge>
                  </div>
                </div>
              </div>

              <Avatar>
                <img
                  className="h-full w-full object-cover"
                  alt="User profile"
                  src="/figmaAssets/mask-group.png"
                />
              </Avatar>
            </div>

            {/* Main content sections */}
            <section className="mt-10 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-base text-[#000000cc] ml-10">
                  Recommended Assessments
                </h2>
                <div className="flex items-center gap-2 mr-8">
                  <span className="font-normal text-sm text-[#4b4b4b]">
                    Sorted by verified skills and aspirations
                  </span>
                  <span className="font-medium text-sm text-[#1b6740]">
                    View All (24)
                  </span>
                </div>
              </div>
              <RecommendedAssessmentsSection />

              {/* Assessment images */}
              <div className="flex gap-8 px-8">
                <img
                  className="w-[300px] h-[272px]"
                  alt="Assessment"
                  src="/figmaAssets/assessment.png"
                />
                <img
                  className="w-[300px] h-[272px]"
                  alt="Assessment"
                  src="/figmaAssets/assessment-1.png"
                />
                <img
                  className="w-[300px] h-[272px]"
                  alt="Assessment"
                  src="/figmaAssets/assessment-2.png"
                />
              </div>

              {/* Pagination dots */}
              <div className="flex items-center justify-center gap-4 mt-4 mb-8">
                {paginationDots.map((dot, index) => (
                  <div
                    key={`dot-${index}`}
                    className={`w-2.5 h-2.5 rounded ${dot.active ? "bg-[#4b4b4b]" : "bg-[#4b4b4b33]"}`}
                  />
                ))}
              </div>
            </section>

            <section className="mb-8 px-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-base text-[#000000cc] ml-2">
                  Jobs Unlocked
                </h2>
                <div className="flex items-center gap-2">
                  <span className="font-normal text-sm text-[#4b4b4b]">
                    Your 5 opportunities to grab today
                  </span>
                  <div className="relative w-6 h-6">
                    <HelpCircleIcon className="w-5 h-5 absolute top-0.5 left-0.5" />
                  </div>
                </div>
              </div>
              <JobsUnlockedSection />
            </section>

            <section className="mb-8 px-8">
              <JobOpportunitiesSection />
            </section>
          </div>
        </div>

        {/* Collapsible Right Sidebar */}
        <div className={`fixed right-0 top-0 h-full transition-all duration-300 z-20 ${
          isSidebarCollapsed ? 'w-16' : 'w-[492px]'
        }`}>
          {/* Toggle Button */}
          <Button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-8 h-8 rounded-full bg-[#1b6740] hover:bg-[#155933] border-0 shadow-lg p-0"
            variant="outline"
          >
            {isSidebarCollapsed ? (
              <ChevronLeftIcon className="w-4 h-4 text-white" />
            ) : (
              <ChevronRightIcon className="w-4 h-4 text-white" />
            )}
          </Button>

          {/* Sidebar Content */}
          <div className={`h-full transition-opacity duration-300 ${
            isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            <SkillWalletSection />
          </div>
          
          {/* Collapsed state - slim green bar */}
          {isSidebarCollapsed && (
            <div className="h-full w-16 bg-[linear-gradient(135deg,rgba(7,45,25,1)_0%,rgba(14,75,43,1)_100%)] flex flex-col items-center justify-start pt-32">
              {/* Small circular icon indicators */}
              <div className="flex flex-col items-center gap-6">
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-amber-400 rounded-sm"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
