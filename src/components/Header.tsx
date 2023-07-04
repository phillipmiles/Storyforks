'use client';
import { Menu, User } from 'iconoir-react';
import Flex from './generic/Flex';
import {
  useLayoutEffect,
  useRef,
  useState,
  useContext,
  useEffect,
} from 'react';
import { SidebarContext } from './Providers';
import s from './Header.module.css';

const Header = () => {
  const { isOpen, toggleIsOpen } = useContext(SidebarContext);

  const prevScrollY = useRef(null);

  const headerRef = useRef(null);
  const [headerTranslate, setHeaderTranslate] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (isOpen || prevScrollY.current === null) {
        prevScrollY.current = window.scrollY;
        return;
      }
      const currentScrollY = window.scrollY;

      setHeaderTranslate((oldState) => {
        const newTranslate = Math.floor(
          oldState - currentScrollY + prevScrollY.current
        );
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
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setHeaderTranslate(0);
      prevScrollY.current = window.scrollY;
    }
  }, [isOpen]);

  // console.log(headerTranslate);
  return (
    <>
      <header
        ref={headerRef}
        // className={s.container}
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '100px',
          // background: 'white',
          zIndex: 350,
          // zIndex: 'auto',
          transform: `translateY(${headerTranslate}px)`,
          // borderBottom: '2px solid black',
        }}
      >
        <Flex
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '32px',
            paddingRight: '32px',
            height: '96px',
          }}
        >
          <button
            onClick={toggleIsOpen}
            style={{ display: 'flex', marginRight: '24px', marginLeft: '24px' }}
          >
            {/* <Suggestion style={{ marginRight: '8px' }} /> */}
            <Menu style={{ marginRight: '8px' }} />
            Chapters
          </button>

          <Flex style={{ marginRight: '24px', marginLeft: '24px' }}>
            {/* Login */}
            <Flex
              style={{
                borderRadius: '64px',
                border: '2px solid black',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                width: '36px',
              }}
            >
              <User />
            </Flex>
          </Flex>
        </Flex>
      </header>

      <div
        // className={s.backgroundDiv}
        style={{
          backgroundColor: 'white',
          position: 'fixed',
          borderBottom: '2px solid black',
          zIndex: 200,
          width: '100%',
          top: 0,
          transform: `translateY(${headerTranslate}px)`,
          height: '100px',
        }}
      />
    </>
  );
};

export default Header;
