import React from 'react';

export const ProductDetailsList = () => {
  return (
    <div className="flex flex-col lg:hidden w-full py-6 space-y-2">
      <ProductDetailsListItem
        name="Ron Habana Club añejo 3 años"
        amount="1u"
        unit="botella"
      />
      <ProductDetailsListItem
        name="Perfume de hombre Vegueros"
        amount="1u"
        unit="100ml"
      />
      <ProductDetailsListItem
        name="Refresco (sabor Cola, Limón, Naranja o Mate según disponibilidad)"
        amount="1u"
        unit="1.5L"
      />
      <ProductDetailsListItem name="Cake" amount="1u" unit="unidad" />
    </div>
  );
};

interface ProductDetailsListItem {
  name: string;
  amount: string;
  unit: string;
}

const ProductDetailsListItem: React.FC<ProductDetailsListItem> = ({
  name,
  amount,
  unit,
}) => {
  return (
    <div className="flex flex-col w-full items-start">
      <p className="font-medium leading-5">{name}</p>
      <p className="text-sm font-medium leading-4 text-neutral-600">
        {amount} • {unit}
      </p>
    </div>
  );
};
