import React from 'react';

import { ProductDetailsList } from './details-list';
import { ProductActions } from './actions';
import { DetailsTable } from './details-table';

export const ProductDetails = () => {
  return (
    <div className="flex flex-col items-start w-full sm:min-w-[342px] lg:min-w-[600px] lg:py-6">
      <h4 className="text-2xl lg:text-3xl font-bold">Nombre del combo</h4>
      <h6 className="text-xl lg:text-2xl font-bold lg:mt-4">
        <span className="text-lg font-medium text-neutral-500 line-through">$179.00</span>
        &nbsp;&nbsp;$150.00
      </h6>
      <ProductDetailsList />
      <DetailsTable />
      <ProductActions />
    </div>
  );
};
