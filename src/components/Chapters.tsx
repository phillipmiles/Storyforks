'use client';
import { useContext } from 'react';
import { SidebarContext } from './Providers';
import s from './Button.module.css';
import PageContent from './PageContent';
import GenericButton from './generic/Button';
import Flex from './generic/Flex';
import PageContentWrap from './generic/PageContentWrap';

const ChapterLine = ({ chapter, title, author }) => (
  <div>
    <h4 style={{ fontSize: '32px' }}>Chapter {chapter}</h4>
    {title}
    {author}
  </div>
);

interface Props {
  children: JSX.Element | string | JSX.Element[];
  href?: string;
  onClick?: Function;
  className?: string;
  textClassName?: string;
  style?: object;
  outline?: boolean;
}

const Chapters = ({ children, ...props }: Props): JSX.Element => {
  let { isOpen, toggleIsOpen } = useContext(SidebarContext);

  // const onChaptersClick = () => {
  //   // setIsOpen((state) => !state);
  //   // setIsOpen((state) => !state);
  //   toggleState();
  // };

  return (
    <Flex
      style={{
        height: '100vh',
        left: 0,
        right: 0,
        position: 'fixed',
        zIndex: 300,
        background: 'white',
        overflowY: 'scroll',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 300ms',
        transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
        borderRight: '2px solid black',
        // padding:
      }}
    >
      {/* <button
        onClick={toggleIsOpen}
        style={{ position: 'absolute', top: '48px', left: '64px' }}
      >
        Close
      </button> */}
      <PageContentWrap>
        <div style={{}}>
          <h2 style={{ textAlign: 'center', marginBottom: '64px' }}>
            Chapters
          </h2>
          <ChapterLine
            chapter="1"
            title="There and back again, a hobbits tale"
            author="Jane Austin"
          />
          <ChapterLine
            chapter="1"
            title="There and back again, a hobbits tale"
            author="Jane Austin"
          />
          <ChapterLine
            chapter="1"
            title="There and back again, a hobbits tale"
            author="Jane Austin"
          />
          <ChapterLine
            chapter="1"
            title="There and back again, a hobbits tale"
            author="Jane Austin"
          />
          <ChapterLine
            chapter="1"
            title="There and back again, a hobbits tale"
            author="Jane Austin"
          />
        </div>
      </PageContentWrap>
    </Flex>
  );
};

export default Chapters;
