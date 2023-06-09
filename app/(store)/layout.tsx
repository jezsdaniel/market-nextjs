import React, { Suspense } from 'react';

import { TopNavBar } from '@/components/layout';
import { StoreBottom } from '@/components/layout/store-bottom';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <TopNavBar />
      <Suspense>
        <main>{children}</main>
      </Suspense>
      <StoreBottom />
    </div>
  );
};

export default StoreLayout;
