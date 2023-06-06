import DetachedHoverEffect from './generic/DetachedHoverEffect';
import Flex from './generic/Flex';
import s from './ForkCard.module.css';

const ForkCard = ({ style, children, ...props }) => {
  return (
    <DetachedHoverEffect
      className={s.hoverEffect2}
      style={{ cursor: 'pointer' }}
    >
      <Flex
        className={s.contentStyle2}
        style={{
          background: 'white',
          position: 'relative',
          width: '100%',
          // height: '400px',
          flexShrink: 0,
          borderRadius: '24px',
          flexDirection: 'column',
          borderTop: '2px solid #4b6095',
          borderLeft: '2px solid #4b6095',
          borderRight: '2px solid #4b6095',
          borderBottom: '8px solid #4b6095',
          // boxShadow: '0px 1px 0px 3px #4b6095',
          ...style,
        }}
        {...props}
      >
        {children}
      </Flex>
    </DetachedHoverEffect>
  );
};

export default ForkCard;
