import React from 'react';

import { Breadcrums } from '@/components/breadcrums';

import { CartTable } from './table';
import { CartSummary } from './summary';

export const CartUI = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Breadcrums
        current="Tu carrito"
        pages={[
          {
            name: 'Inicio',
            href: '/',
          },
        ]}
      />
      <div className="flex flex-col py-14 px-4 xl:px-0 w-full max-w-7xl">
        <h4 className="text-3xl font-bold">TU CARRITO</h4>
        <p className="font-medium text-neutral-600">
          Gestiones los productos agregados en su carrito y prosiga con el pago
        </p>
        <div className="flex flex-row mt-8 space-x-16 items-start">
          <CartTable />
          <CartSummary />
        </div>
      </div>
    </div>
  );
};
