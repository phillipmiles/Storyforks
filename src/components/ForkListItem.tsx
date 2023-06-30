import Flex from './generic/Flex';
import s from './ForkListItem.module.css';

const ForkListItem = ({ style, title, chapter, author, label, ...props }) => {
  return (
    <div className={s.container}>
      <Flex
        style={{
          position: 'relative',
          // backgroundColor: 'white',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 32px',
          marginBottom: '2px',
          textAlign: 'center',
          fontSize: '16px',
        }}
      >
        <div
          style={{
            flexGrow: 1,
            // maxWidth: '40%',
            textAlign: 'left',
          }}
        >
          {title}
        </div>
        <div
          style={{
            minWidth: '200px',
            // background: 'green',
          }}
        >
          {author}
        </div>
        <div
          style={{
            minWidth: '120px',
            // background: 'red',
          }}
        >
          {chapter}
        </div>
        <div
          style={{
            minWidth: '150px',
            // background: 'yellow',
          }}
        >
          {label}
        </div>
      </Flex>
    </div>
  );
};

export default ForkListItem;
