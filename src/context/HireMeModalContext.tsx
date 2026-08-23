'use client';

import React, { createContext, useContext, useState } from 'react';
import HireMeModal from '@/components/ui/HireMeModal';

interface HireMeModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const HireMeModalContext = createContext<HireMeModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const HireMeModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <HireMeModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <HireMeModal isOpen={isOpen} onClose={closeModal} />
    </HireMeModalContext.Provider>
  );
};

export const useHireMeModal = () => useContext(HireMeModalContext);
