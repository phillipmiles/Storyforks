'use client';

import { useContext } from 'react';
import { SidebarContext } from './Providers';

const Sidebar = () => {
  let { isOpen, toggleIsOpen } = useContext(SidebarContext);

  // const onChaptersClick = () => {
  //   // setIsOpen((state) => !state);
  //   // setIsOpen((state) => !state);
  //   toggleState();
  // };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        top: 0,
        left: 0,
        maxWidth: '300px',
        width: '100%',
        background: 'white',
        transition: 'transform 200ms',
        borderRight: '2px solid black',
        transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
        zIndex: 250,
      }}
    >
      <button onClick={toggleIsOpen}>Close</button>
      <p>Home {isOpen ? 'true' : 'false'}</p>

      <p>hello</p>
    </div>
  );
};

export default Sidebar;
