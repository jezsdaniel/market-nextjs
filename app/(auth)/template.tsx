'use client';

import React from 'react';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';

import signInBg from 'public/img/sign-in-bg.png';
import signUpBg from 'public/img/sign-up-bg.png';
import fressLogo from 'public/img/fress-square.png';

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  const segment = useSelectedLayoutSegment();
  const bg = segment === 'sign-in' ? signInBg : signUpBg;

  return (
    <div className="flex flex-row bg-stone min-h-screen">
      <div className="hidden lg:block relative grow">
        <Image
          className="object-cover object-center overflow-hidden h-full z-0"
          src={bg}
          alt="Inicio de sesión"
          priority={true}
          placeholder="blur"
          fill={true}
        />
      </div>
      <div className="flex flex-col w-full lg:w-auto bg-stone items-center px-4 lg:px-24 pt-10 lg:pt-14 xl:pt-20 pb-8 space-y-10 lg:space-y-20 min-h-screen">
        <Image
          className="w-40 h-40 xl:w-48 xl:h-48"
          src={fressLogo}
          alt="Fress logo"
          priority={true}
          placeholder="blur"
        />
        <div className="flex flex-col items-start w-full sm:w-[480px] bg-neutral-50 rounded-3xl lg:rounded-4xl shadow-xl lg:-ml-48 lg:z-10 p-8 lg:p-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
