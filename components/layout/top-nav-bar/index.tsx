import React from 'react';
import Link from 'next/link';

import { FressLogoText } from '@/components/icons';

import { LocationSelector } from './location-selector';
import { SearchInput } from './search-input';
import { NavBarActions } from './nav-bar-actions';
import { NavBarBottom } from './nav-bar-bottom';
import { MobileMenu } from './mobile-menu';

export const TopNavBar = () => {
  return (
    <>
      <nav className="hidden lg:flex flex-col max-w-8xl w-full p-6 space-y-4">
        <div className="flex flex-row items-center justify-between space-x-6">
          <Link href="/" aria-label="Inicio">
            <FressLogoText className="h-10" />
          </Link>
          <LocationSelector />
          <SearchInput />
          <NavBarActions />
        </div>
        <NavBarBottom />
      </nav>
      <nav className="flex lg:hidden flex-col w-full p-4 space-y-4">
        <div className="flex flex-row items-center justify-between space-x-6">
          <MobileMenu />
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
