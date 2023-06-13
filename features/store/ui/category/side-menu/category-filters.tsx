import React from 'react';

import { Checkbox } from '@/components/inputs';

export const CategoryFilters = () => {
  return (
    <div className="flex flex-col p-8 rounded-2xl bg-neutral-150 mt-4 items-start">
      <h5 className="font-medium">
        por <span className="font-semibold">Categoría</span>
      </h5>
      <Checkbox label="Todas" className="mt-4 accent-amber" />
      <Checkbox label="Categoría 1" className="accent-amber" />
      <Checkbox label="Categoría 2" className="accent-amber" />
      <Checkbox label="Categoría 3" className="accent-amber" />
      <Checkbox label="Categoría 4" className="accent-amber" />
    </div>
  );
};
