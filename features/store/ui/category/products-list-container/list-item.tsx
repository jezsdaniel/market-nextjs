import React from 'react';
import Image from 'next/image';

import { IProductMock } from '@/features/store/models/i-product-mock';

interface ProductsListItemProps {
  product: IProductMock;
}

export const ProductsListItem: React.FC<ProductsListItemProps> = ({ product }) => {
  return (
    <div className="relative flex flex-col min-w-full w-full rounded-2xl md:hover:cursor-pointer md:hover:bg-gray-50 md:hover:drop-shadow-xl md:p-4">
      {product.isNew && (
        <div className="absolute flex items-center justify-center text-[11px] leading-3 font-semibold text-neutral-50 bg-amber rounded-full -top-1 -right-1 md:top-3 md:right-3 px-2 py-1">
          nuevo
        </div>
      )}
      <Image
        className="w-full aspect-square rounded-md object-cover object-center"
        src={product.image}
        alt="Combo 1"
        placeholder="blur"
      />
      <div className="flex row items-baseline space-x-3 mt-4">
        {product.discountPrice && (
          <span className="text-sm md:text-base font-medium text-neutral-500 line-through">
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
      <p className="text-sm leading-4 font-medium line-clamp-2 mt-2">
        Nombre del combo de dos líneas de texto
      </p>
    </div>
  );
};
