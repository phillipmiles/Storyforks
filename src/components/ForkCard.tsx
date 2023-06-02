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
    </DetachedHoverEffect>
  );
};

export default ForkCard;
