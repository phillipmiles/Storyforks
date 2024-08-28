'use client';

import { useContext } from 'react';
import { SidebarContext } from './Providers';

const PageContent = ({ children }) => {
  let { isOpen } = useContext(SidebarContext);

  return (
    <main
      style={{
        paddingLeft: isOpen ? '300px' : '0px',
        transition: 'padding 300ms',
      }}
    >
      {children}
    </main>
  );
};

export default PageContent;
