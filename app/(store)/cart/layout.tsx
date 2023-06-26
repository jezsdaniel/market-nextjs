import React, { Suspense } from 'react';

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default CartLayout;
