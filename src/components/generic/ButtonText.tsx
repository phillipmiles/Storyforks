import Link from 'next/link';

interface Props {
  children: JSX.Element | string | Array<JSX.Element>;
  href: string;
}
const ButtonText = ({ href, children, ...props }: Props): JSX.Element => {
  return (
    <Link href={href} passHref {...props}>
      <span
        style={{
          color: 'var(--primary-color)',
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: 'var(--primary-color)',
          textDecoration: 'none',
        }}
      >
        {children}
      </span>
    </Link>
  );
};

ButtonText.propTypes = {};

export default ButtonText;
