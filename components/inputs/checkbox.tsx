import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CheckboxProps {
  className?: string;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ className, label }) => {
  return (
    <div className={twMerge('flex items-center py-2 px-0.5 accent-stone text-sm font-medium', className)}>
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4"
      />
      {label && (
        <label htmlFor="default-checkbox" className="ml-3">
          {label}
        </label>
      )}
    </div>
  );
};
