import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import fressLogo from 'public/img/fress.png';

export const StoreBottomBar = () => {
  return (
    <nav className="flex flex-col md:flex-row w-full items-center md:items-start space-y-8 md:space-y-0 md:space-x-14 px-6 md:px-16 lg:px-24 pt-14 pb-10">
      <Image src={fressLogo} alt="Fress logo" className="w-28 h-28 md:w-32 md:h-32"/>
      <div className="grow"/>
      <div className="flex flex-col space-y-1 items-center text-center md:items-start md:text-start">
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
      <div className="flex flex-col space-y-1 items-center text-center md:items-start md:text-start">
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
      <div className="flex flex-col space-y-1 items-center text-center md:items-start md:text-start">
        <span className="font-semibold">Otros servicios</span>
        <Link href="/" className="font-medium hover:underline">
          Bonos FRESS
        </Link>
      </div>
    </nav>
  );
};
