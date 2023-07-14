import Link from 'next/link';
import s from './Button.module.css';
import { MouseEventHandler } from 'react';

interface Props {
  children: string | JSX.Element | JSX.Element[];
  href?: string;
  icon?: JSX.Element;
  onClick?: MouseEventHandler;
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
      <button
        onClick={onClick ? onClick : undefined}
        className={`${s.button} ${className}`}
        style={style}
        {...props}
      >
        <span className={`${s.textClassName} ${textClassName}`}>
          {children}
        </span>
      </button>
    );
  }
};

export default Button;
