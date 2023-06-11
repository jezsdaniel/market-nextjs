'use client';

import React from 'react';
import { UilFilter } from '@iconscout/react-unicons';

import { IconButton, SelectButton } from '@/components/buttons';

import { FilterChip } from './filter-chip';

export const ProductsListHeader = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <h6 className="text-sm font-medium text-neutral-500">200 productos encontrados</h6>
      <div className="mt-6 flex flex-row w-full space-x-4">
        <SelectButton
          className="grow"
          buttonClassName="h-10 justify-between text-sm"
          items={[
            {
              text: 'Ordenados por popularidad',
              value: 'Ordenados por popularidad',
            },
          ]}
          selectedItem={{
            text: 'Ordenados por popularidad',
            value: 'Ordenados por popularidad',
          }}
          onChange={(value) => {}}
        />
        <IconButton icon={<UilFilter size={24} />} />
      </div>
      <div className="flex flex-row flex-wrap">
        <FilterChip text="Categoría" className="mt-2 mr-1" />
        <FilterChip text="$0 - $300" className="mt-2 mr-1" />
      </div>
    </div>
  );
};
