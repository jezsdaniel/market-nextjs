'use client';

import React, { useState } from 'react';
import { UilMapPinAlt } from '@iconscout/react-unicons';
import { LocationSelectorDialog } from './dialog';

export const LocationSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  const openDialog = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="flex flex-row items-center py-2 px-4 cursor-pointer hover:bg-neutral-200 rounded-md"
      >
        <UilMapPinAlt className="fill-neutral-700 mr-3" size={24} />
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium inline-block whitespace-nowrap">
            Provincia seleccionada
          </span>
          <span className="text-sm font-semibold">La Habana</span>
        </div>
      </button>
      <LocationSelectorDialog isOpen={isOpen} closeDialog={closeDialog} />
    </>
  );
};
