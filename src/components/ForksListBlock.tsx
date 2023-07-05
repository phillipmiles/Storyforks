'use client';
import ContentReveal from './generic/ContentReveal';
import { useEffect, useRef, useState } from 'react';
import Flex from './generic/Flex';

const ForkListBlock = ({ style, children, ...props }) => {
  const [showList, setShowList] = useState(false);
  const containerRef = useRef(null);

  const toggleShowList = () => {
    setShowList((state) => !state);
  };

  useEffect(() => {
    if (showList && containerRef.current) {
      const scrollPos =
        window.pageYOffset + containerRef.current.getBoundingClientRect().top;
      console.log(scrollPos);
      window.scrollTo({
        top: scrollPos - 64,
        behavior: 'smooth',
      });
    }
  }, [showList]);

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', ...style }}
      {...props}
    >
      {!showList && (
        <Flex
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            textAlign: 'center',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <p onClick={toggleShowList}>Show all forks</p>
        </Flex>
      )}
      <div
        style={{
          display: 'block',
          height: showList ? 'auto' : 0,
          overflow: 'hidden',
          opacity: showList ? 1 : 0,
          transition: 'opacity 300ms',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ForkListBlock;
