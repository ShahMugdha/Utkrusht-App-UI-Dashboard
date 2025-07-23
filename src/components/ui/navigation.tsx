'use client';

import { HomeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  href?: string;
}

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const navItems: NavigationItem[] = [
    {
      name: 'Home',
      icon: <HomeIcon className="w-[18px] h-[19px]" />,
      isActive: true,
      href: '/',
    },
    {
      name: 'Jobs',
      icon: (
        <img
          className="w-5 h-[18px]"
          alt="Jobs icon"
          src="/figmaAssets/vector-6.svg"
        />
      ),
      isActive: false,
      href: '/jobs',
    },
    {
      name: 'Applications',
      icon: (
        <img
          className="w-[21px] h-[18px]"
          alt="Applications icon"
          src="/figmaAssets/vector-16.svg"
        />
      ),
      isActive: false,
      href: '/applications',
    },
    {
      name: 'Assessments',
      icon: (
        <img
          className="w-6 h-6"
          alt="Assessments icon"
          src="/figmaAssets/assessments.svg"
        />
      ),
      isActive: false,
      href: '/assessments',
    },
  ];

  return (
    <nav className={cn('flex items-center h-full', className)}>
      <div className="font-bold text-xl text-primary tracking-[0] leading-normal whitespace-nowrap mr-10 font-playfair">
        Utkrusht
      </div>

      <div className="flex items-start gap-2">
        {navItems.map((item, index) => (
          <div
            key={`nav-item-${index}`}
            className={cn(
              'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[99px] cursor-pointer transition-colors',
              item.isActive ? 'bg-primary' : 'hover:bg-primary/10'
            )}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {item.icon}
            </div>

            <div
              className={cn(
                'text-base leading-[22.4px] whitespace-nowrap',
                item.isActive
                  ? 'font-bold text-primary-foreground'
                  : 'font-semibold text-primary'
              )}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
