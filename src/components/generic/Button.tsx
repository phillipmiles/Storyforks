import Link from 'next/link';
import s from './Button.module.css';

interface Props {
  children: string | JSX.Element | JSX.Element[];
  href?: string;
  icon?: JSX.Element;
  onClick?: Function;
  className?: string;
  textClassName?: string;
  style?: object;
}

const Button = ({
  children,
  href,
  onClick,
  className,
  style,
  textClassName,
  ...props
}: Props): JSX.Element => {
  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={`${s.button} ${className}`}
        style={style}
        {...props}
      >
        <span className={`${s.textClassName} ${textClassName}`}>
          {children}
        </span>
      </Link>
    );
  } else {
    return (
      <button className={`${s.button} ${className}`} style={style}>
        <span className={`${s.textClassName} ${textClassName}`}>
          {children}
        </span>
      </button>
    );
  }
};

export default Button;
