import Flex from './generic/Flex';
import s from './ForkListItem.module.css';
import {
  BookmarkBook,
  BookmarkEmpty,
  EyeAlt,
  EyeEmpty,
  Heart,
  Star,
  Trash,
  WarningHexagon,
  WarningTriangle,
  WarningWindow,
} from 'iconoir-react';

const ForkListItem = ({ style, title, chapter, author, label, ...props }) => {
  return (
    <div className={s.container}>
      <Flex
        style={{
          position: 'relative',
          // backgroundColor: 'white',
          // border: '2px solid black',
          // borderTop: '2px solid black',
          borderBottom: '2px solid black',
          justifyContent: 'space-between',
          // alignItems: 'center',
          padding: '16px 32px',
          // paddingTop: '16px',
          // paddingBottom: '16px',
          marginBottom: '2px',
          // textAlign: 'center',
          // fontSize: '16px',
        }}
      >
        {/* <div
          style={{
            minWidth: '128px',
            // background: 'red',
          }}
        >
          2
        </div> */}
        <div
          style={{
            flexBasis: 4,
            // maxWidth: '40%',
            textAlign: 'left',
          }}
        >
          {title}
        </div>
        <div
          style={{
            flexBasis: 3,
            // minWidth: '200px',
          }}
        >
          {author}
        </div>
        <div
          style={{
            flexBasis: 2,
            //minWidth: '128px'
          }}
        >
          {chapter}
        </div>
        <div
          style={{
            flexBasis: 2,
            // minWidth: '150px',
            // background: 'yellow',
          }}
        >
          {label}
        </div>
        <div
          style={{
            flexBasis: 1,
            // minWidth: '100px',
            // background: 'yellow',
          }}
        >
          <EyeEmpty />
          <BookmarkEmpty />
          <Star />
        </div>
        <div
          style={{
            flexBasis: 'fit-content',
            // minWidth: '100px',
            // background: 'yellow',
          }}
        >
          <Trash />
          <Heart />
          <WarningTriangle />
        </div>
      </Flex>
    </div>
  );
};

export default ForkListItem;
