'use client';

import { BellIcon, SearchIcon } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderActionsProps {
  className?: string;
  notificationCount?: number;
  userImage?: string;
  onSearchClick?: () => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
}

export function HeaderActions({
  className,
  notificationCount = 4,
  userImage = '/figmaAssets/mask-group.png',
  onSearchClick,
  onNotificationClick,
  onProfileClick,
}: HeaderActionsProps) {
  return (
    <div className={cn('flex items-center gap-8', className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={onSearchClick}
        className="relative w-6 h-6 p-0 hover:bg-transparent"
      >
        <SearchIcon className="w-5 h-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={onNotificationClick}
        className="relative p-0 hover:bg-transparent"
      >
        <div className="relative w-[26px] h-[30px]">
          <div className="relative w-7 h-[30px]">
            <div className="absolute w-6 h-6 top-1.5 left-0">
              <BellIcon className="w-[18px] h-[19px] absolute top-0.5 left-[3px]" />
            </div>

            {notificationCount > 0 && (
              <Badge className="absolute w-4 h-4 top-0 left-2.5 bg-amber-400 text-amber-950 border-amber-500 rounded-lg px-0 py-0 flex items-center justify-center">
                <span className="text-xs font-semibold">
                  {notificationCount}
                </span>
              </Badge>
            )}
          </div>
        </div>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={onProfileClick}
        className="p-0 hover:bg-transparent"
      >
        <Avatar className="w-10 h-10">
          <AvatarImage
            src={userImage}
            alt="User profile"
            className="object-cover"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </Button>
    </div>
  );
}
