import React, { Suspense } from 'react';

import { TopNavBar } from '@/components/layout';
import { StoreBottom } from '@/components/layout/store-bottom';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <div className="flex flex-col items-center min-h-screen">
        <TopNavBar />
        <Suspense>
          <main className="w-full grow">{children}</main>
        </Suspense>
        <StoreBottom />
      </div>
    </Suspense>
  );
};

export default StoreLayout;
