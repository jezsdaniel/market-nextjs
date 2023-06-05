import React from 'react';

import { StoreHomeBanner } from './banner';
import { StoreStats } from './stats';

export const StoreUI = () => {
  return (
    <div className="flex flex-col w-full">
      <StoreHomeBanner />
      <StoreStats />
    </div>
  );
};
