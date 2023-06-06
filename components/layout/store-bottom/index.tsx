import React from 'react';

import { StoreBottomBar } from './store-bottom-bar';
import { StoreFooter } from './store-footer';

export const StoreBottom = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-8xl border-t border-neutral-200">
      <StoreBottomBar />
      <StoreFooter />
    </div>
  );
};
