import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UilEnvelope, UilPadlock } from '@iconscout/react-unicons';

import { ColorButton } from '@/components/buttons';
import { Checkbox, TextField } from '@/components/inputs';

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
      <div className="flex flex-col w-full lg:w-auto bg-stone items-center px-4 lg:px-24 pt-10 lg:pt-14 xl:pt-20 pb-8 space-y-10 lg:space-y-20 min-h-screen">
        <Image
          className="w-40 h-40 xl:w-48 xl:h-48"
          src={fressLogo}
          alt="Fress logo"
          priority={true}
          placeholder="blur"
        />
        <div className="flex flex-col items-start w-full sm:w-[480px] bg-neutral-50 rounded-3xl lg:rounded-4xl shadow-xl lg:-ml-48 lg:z-10 p-8 lg:p-14">
          <h3 className="text-3xl font-bold text-slate">Iniciar sesión</h3>
          <p className="font-medium text-neutral-600 leading-5 mt-2">
            Accede a tu cuenta en FRESS Market. Si aún no has creado una puedes{' '}
            <Link href="/" className="font-semibold text-amber hover:underline">
              crearla aquí
            </Link>
          </p>
          <TextField
            className="w-full mt-10"
            label="Correo electrónico"
            leadingIcon={<UilEnvelope size={24} />}
          />
          <TextField
            className="w-full mt-4"
            label="Contraseña"
            leadingIcon={<UilPadlock size={24} />}
            type="password"
          />
          <div className="flex flex-col md:flex-row mt-4 space-y-4 md:w-full md:space-y-0 md:justify-between md:items-center">
            <Checkbox label="Recordarme" />
            <Link href="/" className="text-sm font-semibold text-amber hover:underline">
              Olvidé mi contraseña
            </Link>
          </div>
          <ColorButton className="mt-10 w-full" text="Acceder" />
        </div>
      </div>
    </div>
  );
};
