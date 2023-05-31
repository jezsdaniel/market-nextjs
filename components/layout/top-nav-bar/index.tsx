import React from 'react';
import Link from 'next/link';

import { FressLogoText } from '@/components/icons';

import { LocationSelector } from './location-selector';
import { SearchInput } from './search-input';
import { NavBarActions } from './nav-bar-actions';

export const TopNavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between max-w-7xl w-full p-6 space-x-6">
      <Link href="/" aria-label="Inicio">
        <FressLogoText className="h-10" />
      </Link>
      <LocationSelector />
      <SearchInput />
      <NavBarActions />
    </nav>
  );
};
