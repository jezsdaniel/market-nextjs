'use client';

import React, { useEffect, useRef, useState } from 'react';
import { UilCornerUpRightAlt } from '@iconscout/react-unicons';
import Link from 'next/link';

import { IProductMock } from '../../models/i-product-mock';
import { ProductsCarouselItem } from './item';
import { IconButton } from '@/components/buttons';

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
        <h5 className="text-2xl md:text-3xl font-bold">{title}</h5>
        <div className="hidden md:flex flex-row items-center space-x-4">
          {showMore && (
            <Link
              className="text-base font-semibold text-amber hover:underline mx-6"
              href="/category/test"
            >
              ver más
            </Link>
          )}
          <IconButton
            icon={<UilCornerUpRightAlt className="rotate-180" size={32} />}
            onClick={() => scroll(-350)}
            disabled={!prevEnabled}
            label="Anteriores"
          />
          <IconButton
            icon={
              <UilCornerUpRightAlt
                size={32}
              />
            }
            onClick={() => scroll(350)}
            disabled={!nextEnabled}
            label="Siguientes"
          />
        </div>
      </div>
      <div
        className="flex flex-row w-full overflow-x-auto space-x-4 md:space-x-1 px-4 md:px-12 lg:px-16 xl:px-24 pt-4 pb-8 no-scrollbars scroll-smooth"
        ref={carouselRef}
      >
        {products.map((product, index) => (
          <ProductsCarouselItem key={index} product={product} />
        ))}
      </div>
      {showMore && (
        <Link
          className="block md:hidden self-end text-base font-semibold text-amber hover:underline mx-6 -mt-2 mb-4"
          href="/category/test"
        >
          ver más
        </Link>
      )}
    </div>
  );
};
