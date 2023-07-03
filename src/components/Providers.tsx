'use client';

import { createContext, useState } from 'react';

export const SidebarContext = createContext({});

const Providers = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((state) => !state);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, toggleIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default Providers;
