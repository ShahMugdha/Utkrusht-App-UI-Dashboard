'use client';

import { Button } from '@/components/ui/button';

export function NotificationCard() {
  return (
    <div className="flex flex-col w-[274px] items-center justify-center gap-4 mx-auto">
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <h2 className="font-bold text-white text-2xl text-center">
          You&apos;re almost there!
        </h2>

        <div className="flex items-center justify-center gap-3 w-full">
          <div className="relative w-[57px] h-[57px] overflow-hidden">
            <div className="relative w-[55px] h-[55px] top-0.5 left-0.5">
              <div className="relative h-[55px]">
                <img
                  className="absolute w-[41px] h-[41px] top-0 left-0"
                  alt="Blue certificate icon"
                  src="/figmaAssets/blue.svg"
                />
                <img
                  className="absolute w-[41px] h-[41px] top-3.5 left-3.5"
                  alt="Yellow certificate icon"
                  src="/figmaAssets/yellow.svg"
                />
              </div>
            </div>
          </div>

          <p className="text-base text-center">
            <span className="text-white">Complete </span>
            <span className="font-medium text-[#8beab7]">
              Python Advance
            </span>
            <span className="text-white">
              {' '}
              assessment to unlock a new certificate
            </span>
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-[275px] h-10 rounded-[99px] border border-solid border-[#8beab766] bg-transparent hover:bg-[#8beab7]/10"
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
  );
}