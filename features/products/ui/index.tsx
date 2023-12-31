import React from 'react';

import {
  StoreHomeBanner,
  StoreStats,
  StoreSecondBanner,
  PaymentMethodsBanner,
} from '../components/banners';
import { ProductsCarousel } from '../components/carousel';

import sampleFood1 from 'public/img/samples/sample-food-1.png';
import sampleFood2 from 'public/img/samples/sample-food-2.png';
import sampleFood3 from 'public/img/samples/sample-food-3.png';
import sampleFood4 from 'public/img/samples/sample-food-4.png';
import sampleFood5 from 'public/img/samples/sample-food-5.png';

export const ProductsStoreUI = () => {
  return (
    <>
      <StoreHomeBanner />
      <StoreStats />
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
      <StoreSecondBanner />
      <ProductsCarousel
        title="🥑 Alimentos Naturales"
        showMore
        products={[
          {
            isNew: false,
            image: sampleFood2,
            price: 179,
          },
          {
            isNew: false,
            image: sampleFood1,
            price: 179,
          },
          {
            isNew: false,
            image: sampleFood3,
            price: 179,
          },
          {
            isNew: false,
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
      <ProductsCarousel
        title="🧼 Aseo"
        showMore
        products={[
          {
            isNew: false,
            image: sampleFood2,
            price: 179,
          },
          {
            isNew: false,
            image: sampleFood1,
            price: 179,
            discountPrice: 149,
          },
          {
            isNew: false,
            image: sampleFood3,
            price: 179,
          },
          {
            isNew: true,
            image: sampleFood4,
            price: 179,
            discountPrice: 149,
          },
          {
            isNew: false,
            image: sampleFood5,
            price: 179,
          },
          {
            isNew: false,
            image: sampleFood3,
            price: 179,
          },
          {
            isNew: true,
            image: sampleFood4,
            price: 179,
            discountPrice: 149,
          },
          {
            isNew: false,
            image: sampleFood5,
            price: 179,
          },
        ]}
      />
      <PaymentMethodsBanner />
    </>
  );
};
