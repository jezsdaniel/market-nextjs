import React from 'react';

import { ProductsListHeader } from './header';
import { ProductsList } from './list';

import sampleFood1 from 'public/img/samples/sample-food-1.png';
import sampleFood2 from 'public/img/samples/sample-food-2.png';
import sampleFood3 from 'public/img/samples/sample-food-3.png';
import sampleFood4 from 'public/img/samples/sample-food-4.png';
import sampleFood5 from 'public/img/samples/sample-food-5.png';

export const ProductsListContainer = () => {
  return (
    <section className="flex flex-col grow">
      <ProductsListHeader />
      <ProductsList
        products={[
          {
            isNew: true,
            image: sampleFood2,
            price: 179,
            discountPrice: 149,
          },
          {
            isNew: true,
            image: sampleFood1,
            price: 179,
            discountPrice: 149,
          },
          {
            isNew: true,
            image: sampleFood3,
            price: 179,
          },
          {
            isNew: true,
            image: sampleFood4,
            price: 179,
          },
          {
            isNew: true,
            image: sampleFood5,
            price: 179,
          },
        ]}
      />
    </section>
  );
};
