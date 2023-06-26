import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ColorButtonProps {
  text: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const ColorButton: React.FC<ColorButtonProps> = ({
  text,
  leading,
  trailing,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      className={twMerge(
        'flex flex-row items-center justify-center h-14 px-8 rounded-full cursor-pointer disabled:cursor-default bg-stone disabled:bg-neutral-300 hover:bg-neutral-900 disabled:hover:bg-neutral-300 text-neutral-50 text-lg font-semibold',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {leading}
      {text}
      {trailing}
    </button>
  );
};
