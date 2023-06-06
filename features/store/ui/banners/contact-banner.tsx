import React from 'react';
import Image from 'next/image';
import { UilEnvelope, UilPhoneVolume } from '@iconscout/react-unicons';

import bannerContact from 'public/img/banner-contact.png';
import { FacebookIcon, InstagramIcon, TelegramIcon } from '@/components/icons';

export const ContactBanner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end px-6 py-10 md:space-x-24 lg:space-x-32">
      <Image src={bannerContact} alt="Banner de contacto" className="w-full max-w-lg -mt-16" />
      <div className="flex flex-col mt-10 md:mt-0">
        <h5 className="text-3xl font-bold">Contáctanos</h5>
        <p className="text-sm text-neutral-600 font-medium mt-6">
          Puede ponerse en contacto directamente con nosotros mediante las siguientes
          vías:
        </p>
        <div className="flex flex-row items-center mt-4">
          <UilPhoneVolume size={24} className="fill-amber" />
          <span className="text-amber font-semibold ml-2">(+1) 800 435 234</span>
        </div>
        <div className="flex flex-row items-center mt-4">
          <UilEnvelope size={24} className="fill-amber" />
          <span className="text-amber font-semibold ml-2">fress@gmail.com</span>
        </div>
        <p className="text-sm text-neutral-600 font-medium mt-6">
          o mediante nuestras redes sociales.
        </p>
        <div className="flex flex-row items-center mt-3 space-x-2">
          <FacebookIcon />
          <InstagramIcon />
          <TelegramIcon />
        </div>
      </div>
    </div>
  );
};
