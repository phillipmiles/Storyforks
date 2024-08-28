import Flex from './generic/Flex';
import s from './StoryOptionLineOut.module.css';

interface Props {
  curveDirection: string | undefined;
  classNameDot?: string;
  classNameLine?: string;
}

const StoryOptionLineOut = ({
  curveDirection,
  classNameDot,
  classNameLine,
  ...props
}: Props) => (
  <Flex className={s.container} {...props}>
    <div className={`${s.line} ${classNameLine}`} />

    <div className={s.dots}>
      <div
        className={`${s.dot} ${classNameDot}`}
        style={{
          animationDelay: '-6000ms',
        }}
      />
      <div
        className={`${s.dot} ${classNameDot}`}
        style={{
          animationDelay: '-5000ms',
        }}
      />
      <div
        className={`${s.dot} ${classNameDot}`}
        style={{
          animationDelay: '-4000ms',
        }}
      />
      <div
        className={`${s.dot} ${classNameDot}`}
        style={{
          animationDelay: '-3000ms',
        }}
      />
      <div
        className={`${s.dot} ${classNameDot}`}
        style={{
          animationDelay: '-2000ms',
        }}
      />
      <div
        className={`${s.dot} ${classNameDot}`}
        style={{
          animationDelay: '-1000ms',
        }}
      />
      <div
        className={`${s.dot} ${classNameDot}`}
        style={{
          animationDelay: '0ms',
        }}
      />
    </div>
  </Flex>
);

export default StoryOptionLineOut;
