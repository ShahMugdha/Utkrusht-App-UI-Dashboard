import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SkillWalletSection = (): JSX.Element => {
  // Data for MongoDB skill cards
  const mongoDbSkills = [
    { id: 1, name: "MongoDB", level: "Beginner", percentage: "92%" },
    { id: 2, name: "MongoDB", level: "Beginner", percentage: "92%" },
    { id: 3, name: "MongoDB", level: "Beginner", percentage: "92%" },
  ];

  // Data for benchmarking percentiles
  const benchmarkData = [
    { width: "w-3", percentage: "1%", active: false },
    { width: "w-7", percentage: "5%", active: false },
    { width: "w-10", percentage: "10%", active: false },
    { width: "w-14", percentage: "20%", active: true },
    { width: "w-20", percentage: "30%", active: false },
    { width: "w-[100px]", percentage: "40%", active: false },
    { width: "w-[120px]", percentage: "50%", active: false },
    { width: "w-40", percentage: "Foundation stage", active: false },
  ];

  return (
    <section className="relative w-full max-w-[492px]">
      <div className="relative">
        <div className="relative w-full max-w-[480px] mx-auto">
          <div className="relative rounded-[24px_0px_0px_24px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
            <div className="w-full h-[940px] rounded-[24px_0px_0px_24px] bg-[linear-gradient(135deg,rgba(7,45,25,1)_0%,rgba(14,75,43,1)_100%)] overflow-hidden">
              {/* Top notification section */}
              <div className="flex flex-col w-[274px] items-center justify-center gap-4 relative top-[94px] mx-auto">
                <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
                  <h2 className="font-bold text-white text-2xl font-['Inter',Helvetica]">
                    You&apos;re almost there!
                  </h2>

                  <div className="flex items-center justify-center gap-3 relative self-stretch w-full">
                    <div className="relative w-[57px] h-[57px] overflow-hidden">
                      <div className="relative w-[55px] h-[55px] top-0.5 left-0.5">
                        <div className="relative h-[55px]">
                          <img
                            className="absolute w-[41px] h-[41px] top-0 left-0"
                            alt="Blue"
                            src="/figmaAssets/blue.svg"
                          />
                          <img
                            className="absolute w-[41px] h-[41px] top-3.5 left-3.5"
                            alt="Yellow"
                            src="/figmaAssets/yellow.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="font-['Inter',Helvetica] text-base">
                      <span className="text-white">Complete </span>
                      <span className="font-medium text-[#8beab7]">
                        Python Advance
                      </span>
                      <span className="text-white">
                        {" "}
                        assessment to unlock a new certificate
                      </span>
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-[275px] h-10 rounded-[99px] border border-solid border-[#8beab766] bg-transparent"
                >
                  <span className="font-semibold text-[#8beab7] text-sm">
                    Take assessment
                  </span>
                  <img
                    className="w-3 h-2.5 ml-2"
                    alt="Arrow"
                    src="/figmaAssets/vector.svg"
                  />
                </Button>
              </div>

              {/* Skill Wallet section */}
              <div className="flex flex-col items-center gap-4 mt-[100px] px-10">
                <h3 className="font-normal text-white text-base font-['Inter',Helvetica]">
                  Skill Wallet
                </h3>

                <div className="w-full max-w-[400px]">
                  {/* Main certificate card */}
                  <Card className="w-full h-[308px] mb-4 rounded-2xl bg-white shadow-[0px_4px_4px_#00000040] overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex w-[374px] items-center justify-between p-2.5 mx-auto">
                        <div className="flex items-start gap-3">
                          <div className="flex w-10 h-10 items-center gap-2 p-1 bg-sky-900 rounded">
                            <div className="relative w-8 h-8">
                              <div className="relative w-[25px] h-[29px] top-0.5 left-[3px] bg-[url(/figmaAssets/vector-18.svg)] bg-[100%_100%]">
                                <img
                                  className="absolute w-[11px] h-3 top-[9px] left-2.5"
                                  alt="Vector"
                                  src="/figmaAssets/vector-8.svg"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-start justify-between self-stretch">
                            <div className="flex items-baseline gap-2">
                              <h4 className="font-bold text-[#000000cc] text-lg font-['Inter',Helvetica]">
                                Node.js
                              </h4>
                              <Badge className="px-1 py-0 bg-[#8beab74c] text-[#1b6740] rounded-[99px]">
                                <span className="text-[10px] font-normal">
                                  Intermediate
                                </span>
                              </Badge>
                            </div>

                            <div className="flex items-center gap-0.5 self-stretch">
                              <span className="font-normal text-[#aeadaa] text-[10px] tracking-[0.20px] font-['Inter',Helvetica]">
                                Expiry:
                              </span>
                              <span className="font-normal text-stone-500 text-[10px] font-['Inter',Helvetica]">
                                05 December 2025
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-baseline">
                          <span className="font-bold text-[#1a7b48] text-[32px] leading-[44.8px] font-['Inter',Helvetica]">
                            92%
                          </span>
                        </div>
                      </div>

                      {/* Benchmarking section */}
                      <div className="flex flex-col w-full items-start gap-2 px-[18px] py-3 bg-stone-100">
                        <div className="flex flex-col items-end gap-3 self-stretch w-full">
                          <div className="flex flex-col items-start gap-1 self-stretch w-full">
                            <div className="flex items-end gap-1">
                              <div className="relative w-[18px] h-[18px]">
                                <img
                                  className="absolute w-[17px] h-3 top-[3px] left-px"
                                  alt="Vector"
                                  src="/figmaAssets/vector-15.svg"
                                />
                              </div>
                              <span className="font-semibold text-stone-600 text-xs font-['Inter',Helvetica]">
                                Global Benchmarking
                              </span>
                            </div>

                            <p className="text-[10px] font-['Inter',Helvetica]">
                              <span className="font-semibold text-stone-500">
                                Top 20%{" "}
                              </span>
                              <span className="text-stone-500">
                                out of 1,75,345 Node.js professionals
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
                                  className={`${item.width} ${item.active ? "h-2 bg-[#1a7b48]" : "h-1 bg-[" + (index < 3 ? "#29be70" : "#ecebea") + "]"} rounded-[99px]`}
                                />
                                <span
                                  className={`text-[10px] text-center font-['Inter',Helvetica] ${item.active ? "font-bold text-black" : "font-normal text-[#44403c66]"}`}
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
                          <span className="text-[10px] text-stone-500 font-['Inter',Helvetica]">
                            <span className="font-bold">
                              28 certificate views
                            </span>{" "}
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
                          className="h-auto px-4 py-2 text-[#1a7b48]"
                        >
                          <img
                            className="w-3 h-3.5 mr-2"
                            alt="Share"
                            src="/figmaAssets/vector-9.svg"
                          />
                          <span className="font-semibold text-xs">
                            ShareIcon Certificate
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Docker skill card */}
                  <Card className="w-full h-[84px] mb-4 rounded-[0px_0px_16px_16px] bg-[#1b6740] shadow-[0px_4px_4px_#00000040] overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex w-[364px] items-center justify-between h-full py-8 mx-auto">
                        <div className="flex items-center gap-2">
                          <img
                            className="w-8 h-8"
                            alt="Docker"
                            src="/figmaAssets/frame-86184.svg"
                          />
                          <div className="flex items-baseline gap-2">
                            <span className="font-normal text-white text-lg font-['Inter',Helvetica]">
                              Docker
                            </span>
                            <span className="font-normal text-stone-100 text-[10px] font-['Inter',Helvetica]">
                              Advance
                            </span>
                          </div>
                        </div>
                        <div className="flex items-baseline">
                          <span className="font-extralight text-stone-300 text-[32px] leading-[44.8px] font-['Inter',Helvetica]">
                            87%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* MongoDB skill cards */}
                  {mongoDbSkills.map((skill) => (
                    <Card
                      key={skill.id}
                      className="w-full h-[84px] mb-4 rounded-[0px_0px_16px_16px] bg-[#1b6740] shadow-[0px_4px_4px_#00000040] overflow-hidden"
                    >
                      <CardContent className="p-0">
                        <div className="flex w-[364px] items-center justify-between h-full py-8 mx-auto">
                          <div className="flex items-center gap-2">
                            <img
                              className="w-8 h-8"
                              alt="MongoDB"
                              src="/figmaAssets/frame-86184-1.svg"
                            />
                            <div className="flex items-baseline gap-2">
                              <span className="font-normal text-white text-lg font-['Inter',Helvetica]">
                                {skill.name}
                              </span>
                              <span className="font-normal text-stone-100 text-[10px] font-['Inter',Helvetica]">
                                {skill.level}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-baseline">
                            <span className="font-extralight text-stone-300 text-[32px] leading-[44.8px] font-['Inter',Helvetica]">
                              {skill.percentage}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Header icons */}
              <div className="flex items-center justify-end gap-8 absolute top-6 right-6">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-5 h-5 top-0.5 left-0.5"
                    alt="Help"
                    src="/figmaAssets/vector-2.svg"
                  />
                </div>

                <div className="flex items-center gap-2 px-2 py-1.5">
                  <div className="relative w-6 h-6">
                    <div className="relative h-6">
                      <img
                        className="absolute w-[18px] h-[19px] top-0.5 left-[3px]"
                        alt="Notification"
                        src="/figmaAssets/vector-13.svg"
                      />
                    </div>
                  </div>
                </div>

                <Avatar className="w-[42px] h-[42px]">
                  <AvatarImage
                    src="/figmaAssets/mask-group-1.png"
                    alt="User profile"
                  />
                </Avatar>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation button */}
        <Button
          variant="default"
          size="icon"
          className="absolute top-[422px] left-0 w-6 h-12 p-0 bg-[#1a7b48] rounded-[99px]"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
