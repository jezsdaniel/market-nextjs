import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  badgeText?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  badgeText,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        'flex relative items-center justify-center w-10 h-10 rounded-full text-neutral-700 disabled:text-neutral-300 enabled:hover:bg-neutral-200',
        className,
      )}
    >
      {icon}
      {label && <span className="sr-only">{label}</span>}
      {badgeText && (
        <div className="absolute flex items-center justify-center w-4 h-4 text-[8px] font-semibold text-neutral-50 bg-amber rounded-full top-0 right-0">
          {badgeText}
        </div>
      )}
    </button>
  );
};
