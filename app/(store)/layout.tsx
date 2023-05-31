import React, { Suspense } from 'react';

import { TopNavBar } from '@/components/layout';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <TopNavBar />
      <Suspense>{children}</Suspense>
    </div>
  );
};

export default StoreLayout;
