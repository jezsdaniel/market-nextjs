import React from 'react';
import { UilMapPinAlt } from '@iconscout/react-unicons';

export const LocationSelector = () => {
  return (
    <div className="flex flex-row items-center py-2 px-4 cursor-pointer hover:bg-neutral-200 rounded-md">
      <UilMapPinAlt className='fill-neutral-700 mr-3' size={24}/>
      <div className="flex flex-col">
        <span className="text-xs font-medium inline-block whitespace-nowrap">Provincia seleccionada</span>
        <span className="text-sm font-semibold">La Habana</span>
      </div>
    </div>
  );
};
