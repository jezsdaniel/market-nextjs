import React from 'react';

import { twMerge } from 'tailwind-merge';

interface TextFieldProps {
  className?: string;
  label?: string;
  leadingIcon?: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({
  className,
  label,
  leadingIcon,
}) => {
  return (
    <div className={twMerge('relative flex z-0 bg-neutral-150 rounded-full ', className)}>
      <input
        type="text"
        id="floating_filled"
        className={`block rounded-full ${label ? 'pt-6' : 'pt-4'} ${
          label ? 'pb-1.5' : 'pb-3.5'
        } ${
          leadingIcon ? 'pl-12' : 'pl-6'
        } w-full font-medium bg-transparent border appearance-none border-neutral-300 focus:border-amber placeholder-shown:border-neutral-150 focus:outline-none focus:ring-0 peer`}
        placeholder=" "
      />
      {label && (
        <label
          htmlFor="floating_filled"
          className={`absolute font-medium duration-300 transform -translate-y-3 scale-75 top-4 -z-10 origin-[0] ${
            leadingIcon ? 'left-12' : 'left-6'
          } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3`}
        >
          {label}
        </label>
      )}
      {leadingIcon && (
        <div className="absolute w-6 h-6 left-4 top-0 bottom-0 my-auto text-neutral-500 peer-focus:text-amber">
          {leadingIcon}
        </div>
      )}
    </div>
  );
};
