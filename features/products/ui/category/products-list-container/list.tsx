import React from 'react';

import { IProductMock } from '@/features/products/models/i-product-mock';

import { ProductsListItem } from './list-item';

interface ProductsListProps {
  products: IProductMock[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
      {products.map((product, index) => (
        <ProductsListItem key={index} product={product} />
      ))}
    </div>
  );
};
