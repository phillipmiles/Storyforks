'use client';
import { Menu, User } from 'iconoir-react';
import Flex from './generic/Flex';
import { useLayoutEffect, useRef, useState, useContext } from 'react';
import { SidebarContext } from './Providers';

const Header = () => {
  const sideBarContext = useContext(SidebarContext);

  const prevScrollY = useRef(0);

  const headerRef = useRef(null);
  const [headerTranslate, setHeaderTranslate] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHeaderTranslate((oldState) => {
        const newTranslate = oldState - currentScrollY + prevScrollY.current;
        const headerHeight = headerRef.current.clientHeight;

        prevScrollY.current = currentScrollY;

        if (headerHeight * -1 > newTranslate) {
          return headerHeight * -1;
        } else if (0 < newTranslate) {
          return 0;
        } else {
          return newTranslate;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onChaptersClick = () => {
    console.log('hi');
    sideBarContext.setIsOpen((state) => !state);
  };

  return (
    <header
      ref={headerRef}
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        background: 'white',
        zIndex: 100,
        transform: `translateY(${headerTranslate}px)`,
      }}
    >
      <Flex
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '32px  24px',
        }}
      >
        <Flex style={{ marginRight: '24px', marginLeft: '24px' }}>
          <button onClick={onChaptersClick}>
            {/* <Suggestion style={{ marginRight: '8px' }} /> */}
            <Menu style={{ marginRight: '8px' }} />
            Chapters {sideBarContext.isOpen ? 'Open' : 'Closed'}
          </button>
        </Flex>

        <Flex style={{ marginRight: '24px', marginLeft: '24px' }}>
          {/* <Suggestion style={{ marginRight: '8px' }} /> */}
          <User style={{ marginRight: '8px' }} />
          Account
        </Flex>
      </Flex>
    </header>
  );
};

const ChaptersButton = ({ onChaptersClick }) => {
  return (
    <Flex style={{ marginRight: '24px', marginLeft: '24px' }}>
      <button onClick={onChaptersClick}>
        {/* <Suggestion style={{ marginRight: '8px' }} /> */}
        <Menu style={{ marginRight: '8px' }} />
        Chapters
      </button>
    </Flex>
  );
};

export default Header;
