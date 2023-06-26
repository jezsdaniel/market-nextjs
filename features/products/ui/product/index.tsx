import React from 'react';
import Image from 'next/image';

import { Breadcrums } from '@/components/breadcrums';

import { ProductsCarousel } from '../../components/carousel';

import sampleFood1 from 'public/img/samples/sample-food-1.png';
import sampleFood2 from 'public/img/samples/sample-food-2.png';
import sampleFood3 from 'public/img/samples/sample-food-3.png';
import sampleFood4 from 'public/img/samples/sample-food-4.png';
import sampleFood5 from 'public/img/samples/sample-food-5.png';
import sampleFood1Big from 'public/img/samples/sample-food-1-big.png';
import { ProductDetails } from './details';

export const ProductUI = () => {
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
          {
            name: 'Alimentos Naturales',
            href: '/category/1',
          },
        ]}
      />
      <div className="flex flex-col sm:flex-row sm:items-start py-6 px-4 xl:px-0 w-full max-w-7xl sm:space-x-10 xl:space-x-20 space-y-6 sm:space-y-0">
        <Image
          className="w-full max-w-[560px] aspect-square rounded-3xl object-cover object-center border border-neutral-150 bg-neutral-50 drop-shadow-sm"
          src={sampleFood1Big}
          alt="Product"
          placeholder="blur"
        />
        <ProductDetails />
      </div>
      <ProductsCarousel
        title="Productos similares"
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
