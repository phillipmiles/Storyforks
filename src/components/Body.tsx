'use client';
import { useContext } from 'react';
import { SidebarContext } from './Providers';

const Body = ({ children }) => {
  let { isOpen } = useContext(SidebarContext);

  return (
    <body style={{ overflow: isOpen ? 'hidden' : 'auto' }}>{children}</body>
  );
};

export default Body;
