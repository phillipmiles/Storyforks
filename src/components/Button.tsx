import s from './Button.module.css';
import GenericButton from './generic/Button';
import DetachedHoverEffect from './generic/DetachedHoverEffect';

interface Props {
  children: JSX.Element | string | JSX.Element[];
  href?: string;
  onClick?: Function;
  className?: string;
  textClassName?: string;
  style?: object;
  outline?: boolean;
}

const Button = ({
  children,
  href,
  onClick,
  className,
  style,
  outline,
  textClassName,
  ...props
}: Props): JSX.Element => {
  return (
    <DetachedHoverEffect className={s.hoverEffect} style={style}>
      <GenericButton
        href={href}
        onClick={onClick}
        className={`${s.button} ${
          outline ? s.outline : undefined
        } ${className}`}
        textClassName={`${s.buttonText} ${textClassName}`}
        {...props}
      >
        {children}
      </GenericButton>
    </DetachedHoverEffect>
  );
};

export default Button;
