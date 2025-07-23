'use client';

import { useState } from 'react';

export function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return {
    isCollapsed,
    setIsCollapsed,
    toggle: () => setIsCollapsed(!isCollapsed),
  };
}