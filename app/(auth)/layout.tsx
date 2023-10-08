'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

import marketLogo from 'public/img/logo.svg';
import signInBg from 'public/img/sign-in-bg.png';
import signUpBg from 'public/img/sign-up-bg.png';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const segment = useSelectedLayoutSegment();
  const bg = segment === 'sign-in' ? signInBg : signUpBg;

  return (
    <Suspense>
      <main className="w-full">
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
          <div className="flex flex-col w-full lg:w-auto bg-stone items-center px-4 lg:px-24 pt-10 lg:pt-14 xl:pt-20 pb-8 space-y-10 lg:space-y-20 min-h-screen hover:cursor-pointer">
            <Link href="/">
              <Image
                className="w-40 h-40 xl:w-44 xl:h-44"
                src={marketLogo}
                alt="Market logo"
                priority={true}
              />
            </Link>
            <div className="flex flex-col items-start w-full sm:w-[480px] bg-neutral-50 rounded-3xl lg:rounded-4xl shadow-xl lg:-ml-48 lg:z-10 p-8 lg:p-14">
              <Suspense>{children}</Suspense>
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
};

export default AuthLayout;
