interface Props {
  children: JSX.Element | string | JSX.Element[];
  href?: string;
  onClick?: Function;
  className?: string;
  selected?: boolean;
  style?: object;
  outline?: boolean;
}

const CheckboxIcon = ({
  checked,
  children,
  style,
  ...props
}: Props): JSX.Element => {
  return (
    <div
      style={{
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4px',
        // borderRadius: '4px',
        border: '2px solid black',
        ...style,
      }}
    >
      {checked && (
        <div
          style={{
            // borderRadius: '2px',
            backgroundColor: 'black',
            width: '14px',
            height: '14px',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default CheckboxIcon;
