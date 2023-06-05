'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { UilCornerUpRightAlt } from '@iconscout/react-unicons';
import Link from 'next/link';

import { IProductMock } from '../models/i-product-mock';

interface ProductsCarouselProps {
  title: string;
  products: IProductMock[];
  showMore?: boolean;
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  title,
  products,
  showMore,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [prevEnabled, setPrevEnabled] = useState(true);
  const [nextEnabled, setNextEnabled] = useState(true);

  const scroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  useEffect(() => {
    const currentRef = carouselRef.current;

    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const isAtBeginning = scrollLeft === 0;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth;

        setPrevEnabled(!isAtBeginning);
        setNextEnabled(!isAtEnd);
      }
    };

    if (currentRef) {
      if (currentRef.scrollLeft === 0) {
        setPrevEnabled(false);
      }
      if (currentRef.scrollLeft + currentRef.clientWidth >= currentRef.scrollWidth) {
        setNextEnabled(false);
      }
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full py-4">
      <div className="flex flex-row w-full items-center justify-between space-x-4 px-4 md:px-16 lg:px-24 xl:px-36">
        <h6 className="text-2xl md:text-3xl font-bold">{title}</h6>
        <div className="hidden lg:flex flex-row items-center space-x-4">
          {showMore && (
            <Link
              className="text-base font-semibold text-amber hover:underline mx-6"
              href="/"
            >
              ver más
            </Link>
          )}
          <button
            onClick={() => scroll(-350)}
            disabled={!prevEnabled}
            className="flex relative items-center justify-center w-10 h-10 rounded-full enabled:hover:bg-neutral-200 group"
          >
            <UilCornerUpRightAlt
              className="fill-neutral-700 group-disabled:fill-neutral-300 rotate-180"
              size={32}
            />
            <span className="sr-only">Anteriores</span>
          </button>
          <button
            onClick={() => scroll(350)}
            disabled={!nextEnabled}
            className="flex relative items-center justify-center w-10 h-10 rounded-full enabled:hover:bg-neutral-200 group"
          >
            <UilCornerUpRightAlt
              className="fill-neutral-700 group-disabled:fill-neutral-300"
              size={32}
            />
            <span className="sr-only">Siguientes</span>
          </button>
        </div>
      </div>
      <div
        className="flex flex-row w-full overflow-x-auto space-x-1 px-4 md:px-12 lg:px-16 xl:px-24 pt-4 pb-8 no-scrollbars scroll-smooth"
        ref={carouselRef}
      >
        {products.map((product, index) => (
          <ProductsCarouselItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

interface ProductsCarouselItemProps {
  product: IProductMock;
}

const ProductsCarouselItem: React.FC<ProductsCarouselItemProps> = ({ product }) => {
  return (
    <div className="relative flex flex-col min-w-[272px] w-[272px] rounded-2xl hover:cursor-pointer hover:bg-gray-50 hover:drop-shadow-xl p-6">
      {product.isNew && (
        <div className="absolute flex items-center justify-center text-[11px] leading-3 font-semibold text-neutral-50 bg-amber rounded-full top-3 right-3 px-2 py-1">
          nuevo
        </div>
      )}
      <Image
        src={product.image}
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
        {product.discountPrice && (
          <span className="text-base font-medium text-neutral-500 line-through">
            ${product.price.toFixed(2)}
          </span>
        )}
        <span className="text-lg font-bold">
          $
          {product.discountPrice
            ? product.discountPrice.toFixed(2)
            : product.price.toFixed(2)}
        </span>
      </div>
      <p className="text-base leading-5 font-medium line-clamp-2 mt-2">
        Nombre del combo de dos líneas de texto
      </p>
    </div>
  );
};
