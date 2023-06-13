import React from 'react';
import { twMerge } from 'tailwind-merge';
import { UilAngleDown } from '@iconscout/react-unicons';

interface SelectButtonProps {
  items: { value: string; text: string }[];
  selectedItem: { value: string; text: string } | null;
  onChange?: (value: string) => void;
  className?: string;
  buttonClassName?: string;
}

export const SelectButton: React.FC<SelectButtonProps> = ({
  items,
  selectedItem,
  onChange,
  className,
  buttonClassName,
}) => {
  return (
    <div className={twMerge('relative inline-flex', className)}>
      <button
        className={twMerge(
          `flex flex-row items-center justify-center px-4 rounded-full w-full h-12 bg-neutral-150 hover:bg-neutral-200 text-base font-medium text-neutral-900 ${
            selectedItem ? '' : 'italic'
          }`,
          buttonClassName,
        )}
      >
        {selectedItem ? selectedItem.value : 'Seleccione una opción'}
        <UilAngleDown className="ml-1" size={24} />
      </button>
      <select
        className="w-full absolute inset-0 opacity-0 cursor-pointer"
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {items.map((item, index) => (
          <option
            key={index}
            value={item.value}
            selected={selectedItem?.value === item.value}
          >
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};
