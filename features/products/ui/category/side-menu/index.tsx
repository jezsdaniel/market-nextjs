import React from 'react';
import { UilTimesCircle } from '@iconscout/react-unicons';

import { TextButton } from '@/components/buttons';

import { CategoryFilters } from './category-filters';
import { PriceFilters } from './price-filters';

export const CategorySideMenu = () => {
  return (
    <aside className="hidden lg:flex flex-col min-w-[300px]">
      <div className="flex flex-row items-center justify-between space-x-2">
        <h4 className="text-lg font-bold">FILTROS</h4>
        <TextButton
          text="Limpiar todo"
          className="h-10 text-red-700 text-xs font-medium px-4"
          leading={<UilTimesCircle size={16} className="mr-1" />}
        />
      </div>
      <CategoryFilters />
      <PriceFilters />
    </aside>
  );
};
