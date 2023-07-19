interface Props {
  children: JSX.Element | string | JSX.Element[];
  href?: string;
  onClick?: Function;
  className?: string;
  textClassName?: string;
  style?: object;
  outline?: boolean;
}

const DropDownMenuItem = ({
  children,
  style,
  ...props
}: Props): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default DropDownMenuItem;
