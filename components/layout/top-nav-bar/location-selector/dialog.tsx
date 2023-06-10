import React from 'react';
import { Dialog } from '@headlessui/react';
import { UilAngleDown } from '@iconscout/react-unicons';

import { AppDialog } from '@/components/dialog';
import { ColorButton } from '@/components/buttons';

interface LocationSelectorDialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

export const LocationSelectorDialog: React.FC<LocationSelectorDialogProps> = ({
  isOpen,
  closeDialog,
}) => {
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
        <ColorButton
          text="La Habana"
          className="w-full h-12 bg-neutral-150 hover:bg-neutral-200 text-base font-medium text-neutral-900"
          trailing={<UilAngleDown className="ml-1" size={24} />}
          onClick={closeDialog}
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
