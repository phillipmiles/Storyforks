import { MouseEventHandler } from 'react';
import s from './ButtonText.module.css';
import GenericButton from './generic/Button';
import DetachedHoverEffect from './generic/DetachedHoverEffect';

interface Props {
  children: JSX.Element | string | JSX.Element[];
  href?: string;
  onClick?: MouseEventHandler | undefined;
  className?: string;
  hoverEffectClassName?: string;
  textClassName?: string;
  style?: object;
}

const ButtonText = ({
  children,
  href,
  onClick,
  className,
  hoverEffectClassName,
  style,
  textClassName,
  ...props
}: Props): JSX.Element => {
  return (
    <DetachedHoverEffect className={`${s.hoverEffect} ${hoverEffectClassName}`}>
      <GenericButton
        href={href}
        onClick={onClick}
        className={`${s.button} ${className}`}
        textClassName={`${s.buttonText} ${textClassName}`}
        {...props}
      >
        {children}
      </GenericButton>
    </DetachedHoverEffect>
  );
};

export default ButtonText;
