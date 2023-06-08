import s from './Button.module.css';
import GenericButton from './generic/Button';

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
    <GenericButton
      href={href}
      onClick={onClick}
      className={`${s.button} ${outline ? s.outline : undefined} ${className}`}
      textClassName={`${s.buttonText} ${textClassName}`}
      style={style}
      {...props}
    >
      {children}
    </GenericButton>
  );
};

export default Button;
