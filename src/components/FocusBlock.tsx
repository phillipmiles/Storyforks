'use client';

import { useContext } from 'react';
import { SidebarContext } from './Providers';

const FocusBlock = ({ children }) => {
  let { isOpen } = useContext(SidebarContext);

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 200,
        backgroundColor: 'white',
        paddingLeft: isOpen ? '300px' : '0px',
        transition: 'padding 300ms',
      }}
    >
      {children}
    </div>
  );
};

export default FocusBlock;
