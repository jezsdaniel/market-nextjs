import React from 'react';

import Image from 'next/image';

import bannerHome from 'public/img/banner-home.png';

export const StoreHomeBanner = () => {
  return (
    <div className="relative flex w-full h-[200px] md:h-[320px] lg:h-[480px]">
      <div className="absolute z-10 flex flex-col items-center w-full h-full bg-gradient-to-r from-stone/90 to-stone/0">
        <div className="flex flex-col items-start justify-end max-w-7xl w-full h-full py-8 lg:py-10 px-8 xl:px-0 space-y-1 lg:space-y-2">
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-normal text-neutral-50 font-display">
            Productos siempre
          </h4>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-neutral-50 font-display">
            FRESS
          </h2>
          <h4 className="text-2xl md:text-4xl lg:text-6xl font-normal text-neutral-50 font-display">
            para nuestros clientes
          </h4>
        </div>
      </div>
      <Image
        src={bannerHome}
        alt="Banner de inicio"
        priority={true}
        placeholder="blur"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
