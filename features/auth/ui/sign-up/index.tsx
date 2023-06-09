import React from 'react';
import Link from 'next/link';
import { UilEnvelope, UilPadlock } from '@iconscout/react-unicons';

import { ColorButton } from '@/components/buttons';
import { TextField } from '@/components/inputs';

export const SignUpUI = () => {
  return (
    <>
      <h3 className="text-3xl font-bold text-slate">Registrarse</h3>
      <p className="font-medium text-neutral-600 leading-5 mt-2">
        Cree su cuenta en FRESS Market. Si ya cuenta con un puedes{' '}
        <Link href="/sign-in" className="font-semibold text-amber hover:underline">
          acceder desde aquí
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
      <TextField
        className="w-full mt-4"
        label="Contraseña"
        leadingIcon={<UilPadlock size={24} />}
        type="password"
      />
      <ColorButton className="mt-10 w-full" text="Crear cuenta" />
    </>
  );
};
