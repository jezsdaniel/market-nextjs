import React from 'react';

import { Breadcrums } from '@/components/breadcrums';
import { StoreSecondBanner } from '../../components/banners';
import { ProductsCarousel } from '../../components/carousel';

import sampleFood1 from 'public/img/samples/sample-food-1.png';
import sampleFood2 from 'public/img/samples/sample-food-2.png';
import sampleFood3 from 'public/img/samples/sample-food-3.png';
import sampleFood4 from 'public/img/samples/sample-food-4.png';
import sampleFood5 from 'public/img/samples/sample-food-5.png';

export const CategoryUI = () => {
  return (
    <>
      <Breadcrums
        current="Alimentos Naturales"
        pages={[
          {
            name: 'Inicio',
            href: '/',
          },
          {
            name: 'Productos',
            href: '/',
          },
        ]}
      />
      <StoreSecondBanner />
      <ProductsCarousel
        title="🤩 Nuevas ofertas"
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
    </>
  );
};
