import React from 'react';
import Link from 'next/link';
import { UilUserSquare, UilShoppingCart } from '@iconscout/react-unicons';

export const NavBarActions = () => {
  return (
    <div className="flex flex-row items-center space-x-6">
      <button
        type="button"
        className="flex relative items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-200"
      >
        <UilShoppingCart className="fill-neutral-700" size={24} />
        <span className="sr-only">Carrito</span>
        <div className="absolute flex items-center justify-center w-4 h-4 text-[8px] font-semibold text-neutral-50 bg-amber rounded-full top-0 right-0">
          00
        </div>
      </button>
      <div className="flex flex-row items-center space-x-3">
        <UilUserSquare className="fill-neutral-700" size={24} />
        <div className="flex flex-col items-start">
          <span className="inline-block text-xs font-medium whitespace-nowrap">
            <Link className="hover:underline" href="/sign-in">
              Iniciar sesión
            </Link>{' '}
            o
          </span>
          <Link className="text-sm font-semibold hover:underline" href="/sign-up">
            Registrarme
          </Link>
        </div>
      </div>
    </div>
  );
};
