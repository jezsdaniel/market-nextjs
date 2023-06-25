import React from 'react';
import { UilSync } from '@iconscout/react-unicons';

import { TextButton } from '@/components/buttons';
import { TextField } from '@/components/inputs';

export const PriceFilters = () => {
  return (
    <div className="flex flex-col p-8 rounded-2xl bg-neutral-150 mt-2">
      <div className="flex flex-row items-center justify-between space-x-2">
        <h5 className="font-medium">
          por <span className="font-semibold">Precio</span>
        </h5>
        <TextButton
          text="Restablecer"
          className="h-10 text-red-700 text-xs font-medium px-4"
          leading={<UilSync size={16} className="mr-1" />}
        />
      </div>
      <div className="flex flex-row items-center justify-between space-x-3 mt-4">
        <TextField
          className="grow"
          label="Mínimo"
          value='$0'
        />
        <TextField
          className="grow"
          label="Máximo"
          value='$100'
        />
      </div>
    </div>
  );
};
