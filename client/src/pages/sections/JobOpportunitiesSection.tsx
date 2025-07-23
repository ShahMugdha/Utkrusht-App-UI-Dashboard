import { BriefcaseIcon, ClockIcon, InfoIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const JobOpportunitiesSection = (): JSX.Element => {
  // Job details data
  const jobDetails = [
    {
      icon: <BriefcaseIcon className="w-3.5 h-3.5" />,
      text: "Full-time",
    },
    {
      icon: <MapPinIcon className="w-3.5 h-3.5" />,
      text: "Pune, Maharashtra",
    },
    {
      icon: <ClockIcon className="w-3.5 h-3.5" />,
      text: "Posted 1 days ago",
    },
  ];

  // Skills data
  const skills = [
    { name: "JavaScript", highlighted: true },
    { name: "React", highlighted: true },
    { name: "Node.js", highlighted: false },
    { name: "MongoDB", highlighted: false },
    { name: "+3 more", highlighted: false },
  ];

  return (
    <Card className="w-full max-w-[900px] h-[180px] relative border border-solid border-[#1b674033] rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        {/* Pay level up badge */}
        <div className="inline-flex items-center justify-center gap-1 pl-4 pr-6 py-0.5 absolute top-0 right-0 bg-sky-900 rounded-[0px_0px_0px_8px]">
          <img
            className="w-3.5 h-[9px]"
            alt="Vector"
            src="/figmaAssets/vector-12.svg"
          />
          <span className="font-normal text-white text-[10px] leading-[18px] whitespace-nowrap">
            Pay level up
          </span>
        </div>

        {/* Company logo */}
        <div className="absolute w-14 h-14 top-5 left-[18px]">
          <div className="relative w-[50px] h-[50px] top-[3px] left-[3px] bg-[url(/figmaAssets/bg.svg)] bg-[100%_100%]">
            <img
              className="absolute w-10 h-2 top-[21px] left-[5px]"
              alt="Company logo"
              src="/figmaAssets/image-56.png"
            />
          </div>
        </div>

        {/* Company and job details */}
        <div className="flex flex-col items-start gap-2 absolute top-[26px] left-[92px]">
          <h3 className="font-medium text-black text-base leading-normal whitespace-nowrap">
            ScaleReal
          </h3>

          <div className="flex items-center gap-5">
            {jobDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-1">
                <div className="relative w-4 h-4">{detail.icon}</div>
                <span className="font-normal text-stone-500 text-xs leading-[18px] whitespace-nowrap">
                  {detail.text}
                </span>
              </div>
            ))}

            <Badge
              variant="outline"
              className="bg-amber-50 text-amber-600 border-0 h-[18px] px-2 py-0"
            >
              New
            </Badge>
          </div>
        </div>

        {/* Job title and skills */}
        <div className="flex flex-col items-start gap-3 absolute top-[100px] left-[22px]">
          <h2 className="font-bold text-black text-lg leading-normal">
            FrontEnd Engineer
          </h2>

          <div className="flex items-center gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`px-1 py-1 ${
                  skill.highlighted
                    ? "bg-[#ddfbea] text-[#175034] border-0"
                    : "bg-stone-100 text-stone-600 border-0"
                }`}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Salary information */}
        <div className="absolute top-[52px] right-[18px] text-right">
          <p className="font-bold text-stone-950 text-base leading-normal whitespace-nowrap">
            ₹10 - 15 LPA
          </p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="font-normal text-[#4b4b4b] text-[10px] leading-[14px] whitespace-nowrap">
              Open to negotiation
            </span>
            <InfoIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Apply button */}
        <Button className="absolute bottom-[18px] right-[18px] bg-[#1b6740] hover:bg-[#175034] text-white rounded-[99px]">
          Apply now
        </Button>
      </CardContent>
    </Card>
  );
};
