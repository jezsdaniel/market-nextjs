import React from 'react';

import { ColorButton } from '@/components/buttons';

export const CartSummary = () => {
  return (
    <div className="flex flex-col items-start min-w-[400px] w-[400px]">
      <h5 className="text-lg font-bold py-2 px-4">RESUMEN DE ORDEN</h5>
      <div className="flex flex-row w-full p-8 border-2 border-neutral-150 rounded-3xl items-baseline justify-between space-x-2">
        <h6 className="text-lg font-medium">Total a pagar</h6>
        <h6 className="text-xl font-bold">$550.00</h6>
      </div>
      <ColorButton text="Continuar" disabled className="w-full mt-6" />
      <p className="w-full mt-2 py-4 px-6 bg-sky-300 text-sky-700 rounded-3xl font-medium text-sm">
        Debe de iniciar sesión para poder continuar con la compra
      </p>
    </div>
  );
};
