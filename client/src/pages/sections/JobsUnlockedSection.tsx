import { BriefcaseIcon, ClockIcon, InfoIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const JobsUnlockedSection = (): JSX.Element => {
  // Job details data
  const jobDetails = {
    company: "Clevrr AI",
    title: "Full Stack Lead",
    jobType: "Full-time",
    location: "Pune, Maharashtra",
    postedTime: "Posted 1 days ago",
    salary: "₹50 - 55 LPA",
    negotiable: "Open to negotiation",
    isNew: true,
    isAspirational: true,
    skills: [
      { name: "JavaScript", highlighted: true },
      { name: "React", highlighted: true },
      { name: "Node.js", highlighted: false },
      { name: "MongoDB", highlighted: false },
      { name: "+3 more", highlighted: false },
    ],
  };

  return (
    <Card className="w-full max-w-[900px] h-[180px] relative border border-solid border-[#1b674033] rounded-2xl overflow-hidden">
      {jobDetails.isAspirational && (
        <div className="inline-flex items-center justify-center gap-1 pl-4 pr-6 py-0.5 absolute top-0 right-0 bg-sky-900 rounded-[0px_0px_0px_8px]">
          <img
            className="w-4 h-4"
            alt="Vector"
            src="/figmaAssets/vector-19.svg"
          />
          <span className="font-normal text-white text-[10px] leading-[18px] whitespace-nowrap">
            Aspirational title
          </span>
        </div>
      )}

      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex">
          {/* Company logo */}
          <div className="w-14 h-14 mr-4">
            <div className="relative w-[52px] h-[53px]">
              <img
                className="absolute w-[50px] h-[50px] top-[3px] left-px"
                alt="Bg"
                src="/figmaAssets/bg-1.svg"
              />
              <img
                className="absolute w-[52px] h-[52px] top-0 left-0 object-cover"
                alt="Company logo"
                src="/figmaAssets/image-2.png"
              />
            </div>
          </div>

          {/* Company and job details */}
          <div className="flex flex-col">
            <h3 className="font-medium text-black text-base leading-normal">
              {jobDetails.company}
            </h3>

            <div className="flex items-center gap-5 mt-2">
              <div className="flex items-center gap-1">
                <BriefcaseIcon className="w-4 h-4 text-stone-500" />
                <span className="font-normal text-stone-500 text-xs leading-[18px]">
                  {jobDetails.jobType}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4 text-stone-500" />
                <span className="font-normal text-stone-500 text-xs leading-[18px]">
                  {jobDetails.location}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4 text-stone-500" />
                <span className="font-normal text-stone-500 text-xs leading-[18px]">
                  {jobDetails.postedTime}
                </span>
              </div>

              {jobDetails.isNew && (
                <Badge
                  variant="outline"
                  className="bg-amber-50 text-amber-600 border-0 h-[18px] py-2"
                >
                  New
                </Badge>
              )}
            </div>
          </div>

          {/* Salary information */}
          <div className="ml-auto flex flex-col items-end">
            <span className="font-bold text-stone-950 text-base leading-normal whitespace-nowrap">
              {jobDetails.salary}
            </span>
            <div className="flex items-center gap-1 mt-1">
              <span className="font-normal text-[#4b4b4b] text-[10px] leading-[14px]">
                {jobDetails.negotiable}
              </span>
              <InfoIcon className="w-4 h-4 text-[#4b4b4b]" />
            </div>
          </div>
        </div>

        {/* Job title and skills */}
        <div className="mt-6">
          <h2 className="font-bold text-black text-lg leading-normal">
            {jobDetails.title}
          </h2>
          <div className="flex items-center gap-2 mt-3">
            {jobDetails.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`p-1 ${
                  skill.highlighted
                    ? "bg-[#ddfbea] text-[#175034]"
                    : "bg-stone-100 text-stone-600"
                } border-0`}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <Button className="absolute bottom-5 right-5 bg-[#1b6740] hover:bg-[#175034] text-white rounded-[99px]">
        Apply now
      </Button>
    </Card>
  );
};
