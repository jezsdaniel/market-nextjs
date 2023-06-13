import React, { Suspense } from 'react';

const StoreCategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default StoreCategoryLayout;
