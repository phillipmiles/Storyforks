const FocusBlock = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 260,
        backgroundColor: 'white',
        // paddingLeft: isOpen ? '300px' : '0px',
        // transition: 'padding 300ms',
      }}
    >
      {children}
    </div>
  );
};

export default FocusBlock;
