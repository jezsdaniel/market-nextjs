import React, { Suspense } from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <main>{children}</main>
    </Suspense>
  );
};

export default AuthLayout;
