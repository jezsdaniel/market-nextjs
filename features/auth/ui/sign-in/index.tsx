import React from 'react';

import Image from 'next/image';

import signInBg from 'public/img/sign-in-bg.png';
import fressLogo from 'public/img/fress-square.png';

export const SignInUI = () => {
  return (
    <div className="flex flex-row bg-stone min-h-screen">
      <div className="hidden lg:block relative grow">
        <Image
          className="object-cover object-center overflow-hidden h-full z-0"
          src={signInBg}
          alt="Inicio de sesión"
          priority={true}
          placeholder="blur"
          fill={true}
        />
      </div>
      <div className="flex flex-col bg-stone items-center px-24 pt-20 pb-8 space-y-20 min-h-screen">
        <Image
          className="w-48 h-48"
          src={fressLogo}
          alt="Fress logo"
          priority={true}
          placeholder="blur"
        />
        <div className="flex flex-col w-[480px] h-[480px] bg-neutral-50 rounded-4xl shadow-xl lg:-ml-48 z-10"></div>
      </div>
    </div>
  );
};
