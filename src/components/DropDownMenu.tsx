interface Props {
  children: JSX.Element | string | JSX.Element[];
  href?: string;
  onClick?: Function;
  className?: string;
  textClassName?: string;
  style?: object;
  outline?: boolean;
}

const DropDownMenu = ({ children, style, ...props }: Props): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '400px',
        border: '2px solid var(--text-color)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default DropDownMenu;
