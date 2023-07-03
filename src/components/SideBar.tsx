import { createContext, useContext, useState } from 'react';
import { SidebarContext } from './Providers';

export function Sidebar() {
  let sideBarContext = useContext(SidebarContext);

  return (
    <div>
      <p>Home {sideBarContext.isOpen ? 'true' : 'false'}</p>

      <p>hello</p>
    </div>
  );
}
