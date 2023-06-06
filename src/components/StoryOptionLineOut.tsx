import Flex from './generic/Flex';
import s from './StoryOptionLineOut.module.css';

interface Props {
  curveDirection: string | undefined;
}

const StoryOptionLineOut = ({ curveDirection, ...props }: Props) => (
  <Flex className={s.container}>
    <div className={s.line} />

    <div className={s.dots}>
      <div
        className={s.dot}
        style={{
          animationDelay: '6000ms',
        }}
      />
      <div
        className={s.dot}
        style={{
          animationDelay: '5000ms',
        }}
      />
      <div
        className={s.dot}
        style={{
          animationDelay: '4000ms',
        }}
      />
      <div
        className={s.dot}
        style={{
          animationDelay: '3000ms',
        }}
      />
      <div
        className={s.dot}
        style={{
          animationDelay: '2000ms',
        }}
      />
      <div
        className={s.dot}
        style={{
          animationDelay: '1000ms',
        }}
      />
      <div
        className={s.dot}
        style={{
          animationDelay: '0ms',
        }}
      />
    </div>
  </Flex>
);

export default StoryOptionLineOut;
