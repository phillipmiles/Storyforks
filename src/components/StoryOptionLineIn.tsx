import Flex from './generic/Flex';
import s from './StoryOptionLineIn.module.css';

interface Props {
  curveDirection: string | undefined;
}

const StoryOptionLineIn = ({ curveDirection, ...props }: Props) => {
  let capDirection = s.capBoth;
  if (curveDirection !== 'both') {
    capDirection =
      curveDirection === 'right' ? s.capCruveRight : s.capCruveLeft;
  }
  return (
    <Flex className={s.container} style={{}} {...props}>
      {capDirection && <div className={`${s.cap} ${capDirection}`} />}
      <div className={s.line} />
      {/* <div className={s.join} /> */}
    </Flex>
  );
};

export default StoryOptionLineIn;
