'use client';

import React from 'react';
import { UilFilter } from '@iconscout/react-unicons';

import { IconButton, SelectButton } from '@/components/buttons';

import { FilterChip } from './filter-chip';

export const ProductsListHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-start lg:items-center lg:justify-between">
      <h6 className="text-sm font-medium text-neutral-500">200 productos encontrados</h6>
      <div className="mt-6 lg:mt-0 flex flex-row w-full lg:w-auto space-x-4">
        <SelectButton
          className="grow lg:grow-0"
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
        <IconButton className="lg:hidden" icon={<UilFilter size={24} />} />
      </div>
      <div className="flex lg:hidden flex-row flex-wrap">
        <FilterChip text="Categoría" className="mt-2 mr-1" />
        <FilterChip text="$0 - $300" className="mt-2 mr-1" />
      </div>
    </div>
  );
};
