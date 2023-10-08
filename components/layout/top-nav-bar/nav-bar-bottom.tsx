import React from 'react';
import Link from 'next/link';
import { UilAngleDown } from '@iconscout/react-unicons';

export const NavBarBottom = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center space-x-6">
        <div className="flex flex-row items-center space-x-1 cursor-pointer hover:bg-neutral-200 rounded-full px-4 py-2">
          <span className="font-medium">Productos</span>
          <UilAngleDown size={20} />
        </div>
        <Link className="font-medium hover:underline" href="/">
          Bonos MARKET
        </Link>
      </div>
      <div className="flex flex-row items-center space-x-6">
        <Link className="font-medium hover:underline" href="/">
          ¿Cómo funciona?
        </Link>
        <Link className="font-medium hover:underline" href="/">
          Sobre nosotros
        </Link>
      </div>
    </div>
  );
};
