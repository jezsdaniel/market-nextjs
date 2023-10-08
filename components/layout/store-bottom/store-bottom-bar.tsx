import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import marketLogo from 'public/img/logo.svg';

export const StoreBottomBar = () => {
  return (
    <nav className="flex flex-col lg:flex-row w-full items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-14 px-6 lg:px-24 pt-14 pb-10">
      <Image src={marketLogo} alt="Market logo" className="w-28 h-28 lg:w-32 lg:h-32" />
      <div className="grow" />
      <div className="flex flex-col space-y-1 items-center text-center lg:items-start lg:text-start">
        <Link href="/" className="font-medium hover:underline">
          Sobre nosotros
        </Link>
        <Link href="/" className="font-medium hover:underline">
          ¿Cómo funciona?
        </Link>
        <Link href="/" className="font-medium hover:underline">
          FAQ&apos;s
        </Link>
      </div>
      <div className="flex flex-col space-y-1 items-center text-center lg:items-start lg:text-start">
        <span className="font-semibold">Productos</span>
        <Link href="/" className="font-medium hover:underline">
          Alimentos enlatados
        </Link>
        <Link href="/" className="font-medium hover:underline">
          Cárnicos
        </Link>
        <Link href="/" className="font-medium hover:underline">
          Aseo personal
        </Link>
        <Link href="/" className="font-medium hover:underline">
          Alimentos naturales
        </Link>
        <Link href="/" className="font-medium hover:underline">
          Limpieza
        </Link>
      </div>
      <div className="flex flex-col space-y-1 items-center text-center lg:items-start lg:text-start">
        <span className="font-semibold">Otros servicios</span>
        <Link href="/" className="font-medium hover:underline">
          Bonos MARKET
        </Link>
      </div>
    </nav>
  );
};
