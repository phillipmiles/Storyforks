'use client';

import { createContext, useState } from 'react';

export const SidebarContext = createContext({});

const Providers = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default Providers;
