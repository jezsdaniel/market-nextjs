import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  badgeText?: number;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  badgeText,
  className,
}) => {
  return (
    <button
      type="button"
      className="flex relative items-center justify-center w-10 h-10 rounded-full fill-neutral-700 hover:bg-neutral-200"
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
