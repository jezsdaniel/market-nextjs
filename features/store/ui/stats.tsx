import React from 'react';

export const StoreStats = () => {
  return (
    <div className="flex flex-row w-full items-center justify-start lg:justify-center space-x-10 md:space-x-20 py-8 px-4 overflow-x-auto">
      <StoreStatsItem title="12K" line1="usuarios" line2="registrados" />
      <StoreStatsItem title="100" line1="productos" line2="disponibles" />
      <StoreStatsItem title="121K" line1="compras" line2="realizadas" />
    </div>
  );
};

interface StoreStatsItemProps {
  title: string;
  line1: string;
  line2: string;
}

const StoreStatsItem: React.FC<StoreStatsItemProps> = ({ title, line1, line2 }) => {
  return (
    <div className="flex flex-row items-center md:items-end space-x-2 py-2 px-2">
      <h5 className="text-3xl md:text-5xl font-bold">{title}</h5>
      <p className="text-base leading-5 md:text-lg md:leading-6 font-medium">
        {line1}
        <br />
        {line2}
      </p>
    </div>
  );
};
