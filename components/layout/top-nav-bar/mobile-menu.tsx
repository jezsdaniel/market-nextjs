'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { UilAngleDown, UilAlignLeft, UilTimes } from '@iconscout/react-unicons';

import { IconButton } from '@/components/buttons';

import { LocationSelector } from './location-selector';

export const MobileMenu = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuIsOpen]);

  return (
    <>
      <IconButton
        onClick={() => {
          setMobileMenuIsOpen(!mobileMenuIsOpen);
        }}
        label="Abrir menú"
        icon={<UilAlignLeft className="fill-neutral-700" size={24} />}
      />
      <AnimatePresence initial={false}>
        {mobileMenuIsOpen && (
          <Dialog
            as={motion.div}
            initial="closed"
            animate="open"
            exit="closed"
            key="dialog"
            static
            open={mobileMenuIsOpen}
            onClose={() => {
              setMobileMenuIsOpen(false);
            }}
            className="relative z-50"
          >
            <motion.div
              variants={{
                open: { opacity: 1, backdropFilter: 'blur(0.5px)' },
                closed: { opacity: 0, backdropFilter: 'blur(0px)' },
              }}
              className="fixed inset-0 bg-black/30"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex justify-end" data-testid="mobile-menu">
              <Dialog.Panel
                as={motion.div}
                variants={{
                  open: { translateX: 0 },
                  closed: { translateX: '-100%' },
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                className="flex w-full flex-col bg-white pb-6"
              >
                <div className="p-4">
                  <button
                    className="mb-4"
                    onClick={() => {
                      setMobileMenuIsOpen(false);
                    }}
                    aria-label="Cerrar menú"
                    data-testid="close-mobile-menu"
                  >
                    <UilTimes size={24} />
                  </button>
                  <div className="block sm:hidden mb-4 w-full">
                    <LocationSelector />
                  </div>
                  <ul className="flex flex-col space-y-1">
                    <li>
                      <div className="flex flex-row items-center space-x-1 cursor-pointer hover:bg-neutral-200 rounded-full px-4 py-2">
                        <span className="font-medium">Productos</span>
                        <UilAngleDown size={20} />
                      </div>
                    </li>
                    <li>
                      <Link
                        className="font-medium flex flex-row items-center space-x-1 cursor-pointer hover:bg-neutral-200 rounded-full  px-4 py-2"
                        href="/"
                      >
                        Bonos FRESS
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-medium flex flex-row items-center space-x-1 cursor-pointer hover:bg-neutral-200 rounded-full  px-4 py-2"
                        href="/"
                      >
                        ¿Cómo funciona?
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-medium flex flex-row items-center space-x-1 cursor-pointer hover:bg-neutral-200 rounded-full  px-4 py-2"
                        href="/"
                      >
                        Sobre nosotros
                      </Link>
                    </li>
                  </ul>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
