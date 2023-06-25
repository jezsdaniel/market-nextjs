import React from 'react';
import { UilShoppingCart, UilPlusCircle, UilMinusCircle } from '@iconscout/react-unicons';

import { ColorButton, IconButton } from '@/components/buttons';

export const ProductActions = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 items-start lg:items-center lg:space-x-10">
      <div className="flex flex-row space-x-10">
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold">Cantidad</span>
          <div className="flex flex-row space-x-2 items-center mt-1">
            <IconButton
              icon={<UilMinusCircle size={24} />}
              className="text-amber w-8 h-8"
            />
            <span className="font-semibold">4</span>
            <IconButton
              icon={<UilPlusCircle size={24} />}
              className="text-amber w-8 h-8"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs font-semibold">Precio total</span>
          <span className="text-2xl font-bold mt-1">$300.00</span>
        </div>
      </div>
      <ColorButton
        text="Añadir al carrito"
        leading={<UilShoppingCart size={24} className="mr-2" />}
        className="w-full"
      />
    </div>
  );
};
