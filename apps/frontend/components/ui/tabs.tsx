'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, className }) => {
  return (
    <div className={cn('inline-flex p-1 bg-muted rounded-lg', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isDisabled = tab.disabled;

        return (
          <button
            key={tab.id}
            onClick={() => !isDisabled && onTabChange(tab.id)}
            disabled={isDisabled}
            className={cn(
              'px-4 py-2 font-medium text-sm transition-all rounded-md',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              isActive
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-muted-foreground/10',
              isDisabled && 'cursor-not-allowed opacity-50'
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
