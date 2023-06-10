import React, { Suspense } from 'react';

import { ContactBanner } from '@/features/store/components/banners';

const StoreProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Suspense>{children}</Suspense>
      <ContactBanner />
    </div>
  );
};

export default StoreProductsLayout;
