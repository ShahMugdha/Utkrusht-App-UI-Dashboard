import { BellIcon, HelpCircleIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { JobOpportunitiesSection } from "./sections/JobOpportunitiesSection";
import { JobsUnlockedSection } from "./sections/JobsUnlockedSection";
import { RecommendedAssessmentsSection } from "./sections/RecommendedAssessmentsSection";
import { SkillWalletSection } from "./sections/SkillWalletSection";

export const Dashboard = (): JSX.Element => {
  // Data for pagination dots
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <div className="bg-gray-50 flex flex-row justify-center w-full">
      <div className="bg-gray-50 overflow-hidden w-full max-w-[1440px]">
        <div className="relative w-full">
          {/* Header with user profile and notifications */}
          <div className="flex items-center justify-end gap-8 absolute top-6 right-8">
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
              <div className="flex items-center gap-2 ml-[566px]">
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

          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-base text-[#000000cc] ml-10">
                Jobs Unlocked
              </h2>
              <div className="flex items-center gap-2 ml-[168px]">
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

          <section className="mb-8">
            <JobOpportunitiesSection />
          </section>

          {/* Skill Wallet section on the right */}
          <SkillWalletSection />
        </div>
      </div>
    </div>
  );
};
