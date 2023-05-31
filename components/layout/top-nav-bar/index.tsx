import React from 'react';
import Link from 'next/link';
import { UilAlignLeft } from '@iconscout/react-unicons';

import { FressLogoText } from '@/components/icons';

import { LocationSelector } from './location-selector';
import { SearchInput } from './search-input';
import { NavBarActions } from './nav-bar-actions';

export const TopNavBar = () => {
  return (
    <>
      <nav className="hidden lg:flex flex-row items-center justify-between max-w-7xl w-full p-6 space-x-6">
        <Link href="/" aria-label="Inicio">
          <FressLogoText className="h-10" />
        </Link>
        <LocationSelector />
        <SearchInput />
        <NavBarActions />
      </nav>
      <nav className="flex lg:hidden flex-col max-w-7xl w-full p-4 space-y-4">
        <div className="flex flex-row items-center justify-between space-x-6">
          <button
            type="button"
            className="flex relative items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-200"
          >
            <UilAlignLeft className="fill-neutral-700" size={24} />
            <span className="sr-only">Menú</span>
          </button>
          <Link href="/" aria-label="Inicio">
            <FressLogoText className="h-7" />
          </Link>
          <div className="hidden sm:flex">
            <LocationSelector />
          </div>
          <NavBarActions />
        </div>
        <SearchInput />
      </nav>
    </>
  );
};
