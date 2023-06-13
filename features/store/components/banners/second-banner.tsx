import React from 'react';

import Image from 'next/image';

import { ColorButton } from '@/components/buttons';
import { UilShoppingCart } from '@iconscout/react-unicons';

import bannerSecond from 'public/img/banner-second.png';

export const StoreSecondBanner = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full py-10 px-4">
      <div className="relative flex w-full max-w-7xl rounded-3xl overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center"
          src={bannerSecond}
          alt="Banner secundario"
          priority={true}
          placeholder="blur"
          fill={true}
        />
        <div className="relative flex flex-col items-center w-full bg-gradient-radial from-stone/90 via-stone/50 to-stone/0">
          <div className="flex flex-col items-center w-full px-8 py-16 lg:py-24 space-y-4 lg:space-y-6">
            <h3 className="text-3xl lg:text-5xl font-medium text-neutral-50 font-display text-center">
              TODO LO QUE BUSCAS
            </h3>
            <ColorButton
              text="Comprar ahora"
              leading={<UilShoppingCart className="mr-2.5" size={24} />}
              className="bg-neutral-50 hover:bg-neutral-300 text-stone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
