'use client';

import { useContext } from 'react';
import { SidebarContext } from './Providers';

const TransitionPageBlock = ({ style, children }) => {
  let { isOpen } = useContext(SidebarContext);

  return (
    <div
      style={{
        // marginLeft: isOpen ? '300px' : '0',
        // marginRight: isOpen ? '-300px' : '0',
        // transition: 'margin 300ms',
        transform: isOpen ? 'translateX(10%)' : 'translateX(0px)',
        transition: 'transform 300ms',
        // transformStyle: 'preserve-3d',
        // transformStyle: 'flat',
        // position: 'relative',
        // zIndex: 1000,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default TransitionPageBlock;
