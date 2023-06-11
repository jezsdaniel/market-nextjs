'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

import { AppDialog } from '@/components/dialog';
import { ColorButton, SelectButton } from '@/components/buttons';

interface LocationSelectorDialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

export const LocationSelectorDialog: React.FC<LocationSelectorDialogProps> = ({
  isOpen,
  closeDialog,
}) => {
  const [selectedProvince, setSelectedProvince] = useState<{
    value: string;
    text: string;
  } | null>(null);

  return (
    <AppDialog isOpen={isOpen} closeDialog={closeDialog}>
      <Dialog.Title as="h3" className="text-2xl font-bold">
        Seleccione su provincia
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-neutral-600 leading-4">
          Para visitar nuestra tienda es necesario que elijas la provincia de la cual
          deseas ver sus ofertas
        </p>
      </div>
      <div className="flex flex-col mt-6 space-y-6">
        <SelectButton
          items={[
            {
              value: 'Pinar del Río',
              text: 'Pinar del Río',
            },
            {
              value: 'Artemisa',
              text: 'Artemisa',
            },
            {
              value: 'La Habana',
              text: 'La Habana',
            },
            {
              value: 'Mayabeque',
              text: 'Mayabeque',
            },
            {
              value: 'Matanzas',
              text: 'Matanzas',
            },
          ]}
          selectedItem={selectedProvince}
          onChange={(value) => {
            setSelectedProvince({ value, text: value });
          }}
        />
        <ColorButton
          text="Visitar tienda"
          className="w-full h-12"
          onClick={closeDialog}
        />
      </div>
    </AppDialog>
  );
};
