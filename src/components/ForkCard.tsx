'use client';
import DetachedHoverEffect from './generic/DetachedHoverEffect';
import Flex from './generic/Flex';
import s from './ForkCard.module.css';
import { useState } from 'react';

const ForkCard = ({ style, children, ...props }) => {
  const [expand, setExpand] = useState(false);

  return (
    // <DetachedHoverEffect
    //   className={s.hoverEffect2}
    //   style={{ cursor: 'pointer' }}
    //   onClick={() => setExpand((state) => !state)}
    // >
    <Flex
      style={{
        background: 'white',
        position: 'relative',
        width: '100%',
        height: '400px',
        flexShrink: 0,
        borderRadius: '32px',
        flexDirection: 'column',
        ...style,
      }}
      {...props}
    >
      <div className={s.contentStyle2}>{children}</div>
    </Flex>
    // </DetachedHoverEffect>
  );
};

export default ForkCard;
