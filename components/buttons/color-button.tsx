import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ColorButtonProps {
  text: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ColorButton: React.FC<ColorButtonProps> = ({
  text,
  leading,
  trailing,
  onClick,
  className,
}) => {
  return (
    <button
      className={twMerge(
        'flex flex-row items-center justify-center h-14 px-8 rounded-full cursor-pointer bg-stone hover:bg-neutral-900 text-neutral-50 text-lg font-semibold',
        className,
      )}
      onClick={onClick}
    >
      {leading}
      {text}
      {trailing}
    </button>
  );
};
