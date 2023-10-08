import React from 'react';
import Link from 'next/link';
import { UilEnvelope, UilPadlock } from '@iconscout/react-unicons';

import { ColorButton } from '@/components/buttons';
import { Checkbox, TextField } from '@/components/inputs';

export const SignInUI = () => {
  return (
    <>
      <h3 className="text-3xl font-bold text-slate">Iniciar sesión</h3>
      <p className="font-medium text-neutral-600 leading-5 mt-2">
        Accede a tu cuenta en Market. Si aún no has creado una puedes{' '}
        <Link href="/sign-up" className="font-semibold text-amber hover:underline">
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
    </>
  );
};
