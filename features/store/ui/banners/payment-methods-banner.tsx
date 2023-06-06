import React from 'react';
import Image from 'next/image';

import paypalLogo from 'public/img/paypal-logo.svg';
import zelleLogo from 'public/img/zelle-logo.svg';
import masterCardLogo from 'public/img/master-card-logo.svg';
import visaLogo from 'public/img/visa-logo.svg';
import binanceUsdLogo from 'public/img/binance-usd-logo.png';
import tetherLogo from 'public/img/tether-logo.svg';
import bitcoinLogo from 'public/img/bitcoin-logo.svg';

export const PaymentMethodsBanner = () => {
  return (
    <div className="flex flex-col w-full items-center bg-gradient-radial from-stone/20 to-stone/0 py-20 px-4">
      <h5 className="text-2xl font-bold text-center mx-10">
        Facilidad de pago 😎 100% seguro
      </h5>
      <span className="text-sm font-medium text-center mt-1">
        lista de formas de pago disponibles
      </span>
      <div className="flex flex-wrap mt-12 max-w-3xl items-center justify-center">
        <div className="py-4 px-4">
          <Image src={paypalLogo} alt="Paypal logo" />
        </div>
        <div className="py-4 px-4">
          <Image src={zelleLogo} alt="Zelle logo" />
        </div>
        <div className="py-4 px-4">
          <Image src={masterCardLogo} alt="MasterCard logo" />
        </div>
        <div className="py-4 px-4">
          <Image src={visaLogo} alt="Visa logo" />
        </div>
        <div className="py-4 px-4">
          <Image src={binanceUsdLogo} alt="Binance USD logo" />
        </div>
        <div className="py-4 px-4">
          <Image src={tetherLogo} alt="Tether logo" />
        </div>
        <div className="py-4 px-4">
          <Image src={bitcoinLogo} alt="Bitcoin logo" />
        </div>
      </div>
    </div>
  );
};
