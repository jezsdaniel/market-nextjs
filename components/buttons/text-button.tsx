import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TextButtonProps {
  text: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const TextButton: React.FC<TextButtonProps> = ({
  text,
  leading,
  trailing,
  onClick,
  className,
}) => {
  return (
    <button
      className={twMerge(
        'flex flex-row items-center justify-center h-14 px-8 rounded-full cursor-pointer hover:bg-neutral-200 text-amber text-lg font-semibold',
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
