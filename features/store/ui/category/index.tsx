import React from 'react';

import { Breadcrums } from '@/components/breadcrums';

export const CategoryUI = () => {
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
        ]}
      />
    </>
  );
};
