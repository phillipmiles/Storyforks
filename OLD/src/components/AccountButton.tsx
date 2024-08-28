import Flex from './generic/Flex';
import s from './AccountButton.module.css';
import { User } from 'iconoir-react';
import { MouseEventHandler } from 'react';
import DetachedHoverEffect from './generic/DetachedHoverEffect';

interface Props {
  style?: Object;
  onClick?: MouseEventHandler;
}

const AccountButton = ({ onClick, style }: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={s.button} style={style}>
      <DetachedHoverEffect className={s.hoverEffect}>
        <User />
      </DetachedHoverEffect>
    </button>
  );
};

export default AccountButton;
