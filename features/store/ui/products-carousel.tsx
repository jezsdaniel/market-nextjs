import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { UilCornerUpRightAlt } from '@iconscout/react-unicons';

import sampleFood1 from 'public/img/samples/sample-food-1.png';

export const ProductsCarousel = () => {
  return (
    <div className="flex flex-col w-full py-8">
      <div className="flex flex-row w-full items-center justify-between space-x-4 px-4 md:px-16 lg:px-24 xl:px-36">
        <h6 className="text-2xl md:text-3xl font-bold">🤩 Nuevas ofertas</h6>
        <div className="hidden lg:flex flex-row items-center space-x-4">
          <button
            disabled
            className="flex relative items-center justify-center w-10 h-10 rounded-full enabled:hover:bg-neutral-200 group"
          >
            <UilCornerUpRightAlt
              className="fill-neutral-700 group-disabled:fill-neutral-300 rotate-180"
              size={32}
            />
            <span className="sr-only">Anteriores</span>
          </button>
          <button className="flex relative items-center justify-center w-10 h-10 rounded-full enabled:hover:bg-neutral-200 group">
            <UilCornerUpRightAlt
              className="fill-neutral-700 group-disabled:fill-neutral-300"
              size={32}
            />
            <span className="sr-only">Siguientes</span>
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full overflow-x-auto space-x-1 px-4 md:px-12 lg:px-16 xl:px-24 py-8">
        <ProductsCarouselItem isNew image={sampleFood1} price={179} discountPrice={179} />
        <ProductsCarouselItem isNew image={sampleFood1} price={179} discountPrice={179} />
        <ProductsCarouselItem isNew image={sampleFood1} price={179} discountPrice={179} />
        <ProductsCarouselItem isNew image={sampleFood1} price={179} discountPrice={179} />
        <ProductsCarouselItem isNew image={sampleFood1} price={179} discountPrice={179} />
      </div>
    </div>
  );
};

interface ProductsCarouselItemProps {
  isNew?: boolean;
  image: string | StaticImageData;
  price: number;
  discountPrice?: number;
}

const ProductsCarouselItem: React.FC<ProductsCarouselItemProps> = ({
  isNew = false,
  image,
  price,
  discountPrice,
}) => {
  return (
    <div className="relative flex flex-col min-w-[272px] w-[272px] rounded-2xl hover:bg-gray-50 hover:drop-shadow-xl p-6">
      {isNew && (
        <div className="absolute flex items-center justify-center text-[11px] leading-3 font-semibold text-neutral-50 bg-amber rounded-full top-3 right-3 px-2 py-1">
          nuevo
        </div>
      )}
      <Image
        src={image}
        alt="Combo 1"
        placeholder="blur"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '224px',
          borderRadius: '4px',
        }}
      />
      <div className="flex row items-baseline space-x-3 mt-4">
        {discountPrice && (
          <span className="text-base font-medium text-neutral-500 line-through">
            ${price.toFixed(2)}
          </span>
        )}
        <span className="text-lg font-bold">
          ${discountPrice ? discountPrice.toFixed(2) : price.toFixed(2)}
        </span>
      </div>
      <p className="text-base leading-5 font-medium line-clamp-2 mt-2">
        Nombre del combo de dos líneas de texto
      </p>
    </div>
  );
};
