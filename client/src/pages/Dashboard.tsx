import { BellIcon, HelpCircleIcon, SearchIcon, ChevronLeftIcon, ChevronRightIcon, BriefcaseIcon, MapPinIcon, ClockIcon } from "lucide-react";
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
    <div className="bg-[#1a1a1a] flex w-full h-screen overflow-hidden">
      {/* Left Sidebar Navigation */}
      <div className="w-[240px] bg-[#2a2a2a] flex flex-col border-r border-gray-700">
        <RecommendedAssessmentsSection />
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 bg-gray-50 transition-all duration-300 ${isSidebarCollapsed ? '' : 'mr-[300px]'}`}>
        <div className="relative w-full h-full overflow-y-auto">
          {/* Top Header Bar */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-6 h-6">
                  <SearchIcon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="relative">
                  <BellIcon className="w-5 h-5 text-gray-600" />
                  <Badge className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 text-amber-950 border-amber-500 rounded-full px-0 py-0 flex items-center justify-center">
                    <span className="text-xs font-semibold">4</span>
                  </Badge>
                </div>
                <Avatar className="w-8 h-8">
                  <img
                    className="h-full w-full object-cover"
                    alt="User profile"
                    src="/figmaAssets/mask-group.png"
                  />
                </Avatar>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6">
            {/* Recommended Assessments Section */}
            <section className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg text-gray-900">
                  Recommended Assessments
                </h2>
                <div className="flex items-center gap-4">
                  <span className="font-normal text-sm text-gray-600">
                    Sorted by verified skills and aspirations
                  </span>
                  <span className="font-medium text-sm text-[#1b6740] cursor-pointer hover:underline">
                    View All (24)
                  </span>
                </div>
              </div>

              {/* Assessment Cards */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">N</span>
                    </div>
                    <span className="font-semibold text-gray-900">Node.js</span>
                    <span className="text-sm text-gray-500">Intermediate</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <img src="/figmaAssets/vector-4.svg" alt="Meta" className="w-6 h-6" />
                    <img src="/figmaAssets/vector-5.svg" alt="PlayStation" className="w-6 h-6" />
                    <img src="/figmaAssets/vector-6.svg" alt="Verify" className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    15 matching your expertise skills
                  </p>
                  <Button className="w-full bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50">
                    Take assessment →
                  </Button>
                </div>

                <div className="bg-white border-2 border-blue-400 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <span className="font-semibold text-gray-900">React</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <img src="/figmaAssets/vector-4.svg" alt="Meta" className="w-6 h-6" />
                    <img src="/figmaAssets/vector-5.svg" alt="PlayStation" className="w-6 h-6" />
                    <img src="/figmaAssets/vector-7.svg" alt="Google" className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    23 matching your expertise skills
                  </p>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Take assessment →
                  </Button>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <span className="font-semibold text-gray-900">MongoDB</span>
                    <span className="text-sm text-gray-500">Beginner</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <img src="/figmaAssets/vector-4.svg" alt="Meta" className="w-6 h-6" />
                    <img src="/figmaAssets/vector-8.svg" alt="Clevrr" className="w-6 h-6" />
                    <img src="/figmaAssets/vector-9.svg" alt="Google" className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    8 matching your expertise skills
                  </p>
                  <Button className="w-full bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50">
                    Take assessment →
                  </Button>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex items-center justify-center gap-2">
                {paginationDots.map((dot, index) => (
                  <div
                    key={`dot-${index}`}
                    className={`w-2 h-2 rounded-full ${dot.active ? "bg-gray-800" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </section>

            {/* Jobs Unlocked Section */}
            <section className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg text-gray-900">
                  Jobs Unlocked
                </h2>
                <div className="flex items-center gap-2">
                  <span className="font-normal text-sm text-gray-600">
                    Your 5 opportunities to grab today
                  </span>
                  <HelpCircleIcon className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                <div className="bg-white border border-green-200 rounded-lg p-6 relative">
                  <div className="absolute top-0 right-0 bg-blue-900 text-white text-xs px-3 py-1 rounded-bl-lg">
                    Aspirational title
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-semibold text-gray-900">Clevrr AI</h3>
                        <div className="flex items-center gap-1">
                          <BriefcaseIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">Full-time</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">Pune, Maharashtra</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">Posted 1 days ago</span>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">New</Badge>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <Badge className="bg-green-100 text-green-800">JavaScript</Badge>
                        <Badge className="bg-blue-100 text-blue-800">React</Badge>
                        <Badge className="bg-gray-100 text-gray-600">Node.js</Badge>
                        <Badge className="bg-gray-100 text-gray-600">MongoDB</Badge>
                        <Badge className="bg-gray-100 text-gray-600">+3 more</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-gray-900">₹50 - 55 LPA</div>
                          <div className="text-sm text-gray-500">Open to negotiation</div>
                        </div>
                        <Button className="bg-green-600 text-white hover:bg-green-700">
                          Apply now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <JobOpportunitiesSection />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Collapsible Right Sidebar - Skill Wallet */}
      <div className={`transition-all duration-300 ${
        isSidebarCollapsed ? 'w-0' : 'w-[300px]'
      } bg-gradient-to-b from-green-900 to-green-700 relative`}>
        {/* Toggle Button */}
        <Button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-8 h-8 rounded-full bg-white border border-gray-300 shadow-lg hover:bg-gray-50 p-0"
          variant="outline"
        >
          {isSidebarCollapsed ? (
            <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          )}
        </Button>

        {/* Sidebar Content */}
        <div className={`h-full transition-opacity duration-300 ${
          isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <SkillWalletSection />
        </div>
      </div>
    </div>
  );
};
