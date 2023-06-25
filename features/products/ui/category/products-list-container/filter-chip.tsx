import React from 'react';
import { twMerge } from 'tailwind-merge';

import { CancelIcon } from '@/components/icons';

interface FilterChipProps {
  text: string;
  onDismiss?: () => void;
  className?: string;
}

export const FilterChip: React.FC<FilterChipProps> = ({ text, onDismiss, className }) => {
  return (
    <div
      className={twMerge(
        'flex flex-row items-center px-2 py-2 border border-neutral-400 rounded-full space-x-2 text-sm leading-4',
        className,
      )}
    >
      <span className="ml-1">{text}</span>
      <button
        onClick={onDismiss}
        className="flex items-center justify-center w-4 h-4 rounded-full bg-transparent"
      >
        <CancelIcon />
      </button>
    </div>
  );
};
