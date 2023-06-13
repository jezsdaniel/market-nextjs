import React, { Suspense } from 'react';

const StoreProductLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default StoreProductLayout;
