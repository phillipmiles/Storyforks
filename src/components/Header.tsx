'use client';
import {
  BookStack,
  Cancel,
  Home,
  HomeAlt,
  Menu,
  OpenBook,
  User,
} from 'iconoir-react';
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
import { CrossIcon } from 'react-select/dist/declarations/src/components/indicators';
import Image from 'next/image';
import Link from 'next/link';

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
            marginRight: '24px',
          }}
        >
          <Flex
            style={{
              marginRight: '24px',
              marginLeft: '24px',
              alignItems: 'center',
            }}
          >
            <Link
              href=""
              style={{
                marginRight: '24px',
                display: 'flex',
              }}
            >
              <Image
                src={'/storyforks_icon.svg'}
                width={56}
                height={56}
                alt="Return home"
              />
            </Link>

            <span
              style={{
                marginRight: '24px',
                height: '32px',
                borderLeft: '2px solid var(--text-color)',
              }}
            />
            <button
              onClick={toggleIsOpen}
              style={{
                display: 'flex',
              }}
            >
              {/* <Suggestion style={{ marginRight: '8px' }} /> */}
              {/* <Menu style={{ marginRight: '8px' }} /> */}
              {/* <OpenBook style={{ marginRight: '8px' }} /> */}
              Chapters
            </button>
          </Flex>
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
