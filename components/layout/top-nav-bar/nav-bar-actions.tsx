'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UilUserSquare, UilShoppingCart } from '@iconscout/react-unicons';
import { Menu, Transition } from '@headlessui/react';

import { IconButton } from '@/components/buttons';

export const NavBarActions = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center space-x-2 lg:space-x-6">
      <IconButton
        icon={<UilShoppingCart className="fill-neutral-700" size={24} />}
        label="Carrito"
        badgeText="00"
        onClick={() => {
          router.push('cart');
        }}
      />
      <div className="hidden sm:flex flex-row items-center space-x-3">
        <UilUserSquare className="fill-neutral-700" size={24} />
        <div className="flex flex-col items-start">
          <span className="inline-block text-xs font-medium whitespace-nowrap">
            <Link className="hover:underline" href="/sign-in">
              Iniciar sesión
            </Link>{' '}
            o
          </span>
          <Link className="text-sm font-semibold hover:underline" href="/sign-up">
            Registrarme
          </Link>
        </div>
      </div>
      <Menu as="div" className="relative inline-block sm:hidden">
        <div>
          <Menu.Button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-200">
            <UilUserSquare className="fill-neutral-700" size={24} />
            <span className="sr-only">Usuario</span>
          </Menu.Button>
        </div>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  className="flex w-full items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-neutral-200"
                  href="/sign-in"
                >
                  Iniciar sesión
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  className="flex w-full items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-neutral-200"
                  href="/sign-up"
                >
                  Registrarme
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
