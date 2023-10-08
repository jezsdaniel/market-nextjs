import React from 'react';
import Link from 'next/link';

import { FacebookIcon, InstagramIcon } from '@/components/icons';

export const StoreFooter = () => {
  return (
    <footer className="flex flex-col lg:flex-row-reverse w-full items-center space-y-8 lg:space-y-0 px-6 border-t border-neutral-200 lg:px-24 pt-6 lg:pt-8 pb-12 lg:pb-14">
      <div className="flex flex-row items-center space-x-2">
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <div className="flex flex-col xl:flex-row space-y-1 xl:space-y-0 xl:space-x-2 items-center text-center lg:ml-8 lg:mr-8">
        <Link href="/" className="font-medium text-neutral-550 underline">
          Términos y condiciones
        </Link>
        <Link href="/" className="font-medium text-neutral-550 underline">
          Política de privacidad
        </Link>
      </div>
      <div className="grow"/>
      <p className="font-medium text-neutral-550 text-center">
        Copyright 2023 Market • Todos los derechos reservados
      </p>
    </footer>
  );
};
