import { HomeIcon } from "lucide-react";
import React from "react";

export const RecommendedAssessmentsSection = (): JSX.Element => {
  // Navigation items data for mapping
  const navItems = [
    {
      name: "Home",
      icon: <HomeIcon className="w-[18px] h-[19px]" />,
      isActive: true,
    },
    {
      name: "Jobs",
      icon: (
        <img
          className="w-5 h-[18px]"
          alt="Jobs icon"
          src="/figmaAssets/vector-6.svg"
        />
      ),
      isActive: false,
    },
    {
      name: "Applications",
      icon: (
        <img
          className="w-[21px] h-[18px]"
          alt="Applications icon"
          src="/figmaAssets/vector-16.svg"
        />
      ),
      isActive: false,
    },
    {
      name: "Assessments",
      icon: (
        <img
          className="w-6 h-6"
          alt="Assessments icon"
          src="/figmaAssets/assessments.svg"
        />
      ),
      isActive: false,
    },
  ];

  return (
    <header className="w-full h-[74px] bg-white border-b border-gray-100">
      <nav className="flex items-center h-full px-10">
        <div
          className="font-bold text-xl text-[#1a7b48] tracking-[0] leading-normal whitespace-nowrap mr-10"
          style={{ fontFamily: "'Playfair_Display', Helvetica" }}
        >
          Utkrusht
        </div>

        <div className="flex items-start gap-2">
          {navItems.map((item, index) => (
            <div
              key={`nav-item-${index}`}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[99px] ${
                item.isActive ? "bg-[#1b6740]" : ""
              }`}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {item.icon}
              </div>

              <div
                className={`font-${item.isActive ? "bold" : "semibold"} ${
                  item.isActive ? "text-white" : "text-[#1b6740]"
                } text-base leading-[22.4px] whitespace-nowrap`}
                style={{ fontFamily: "'Inter', Helvetica" }}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
