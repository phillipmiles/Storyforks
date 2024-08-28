import ForkCard from './ForkCard';
import Flex from './generic/Flex';
import s from './StoryOption.module.css';

const ForkHeader = ({ children }) => <div style={{}}>{children}</div>;
const ForkTitle = ({ children }) => (
  <p
    style={{
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: '14px',
      color: 'var(--primary-color)',
      marginTop: '16px',
      marginBottom: '16px',
      // fontWeight: 700,
      letterSpacing: '2px',
      // backgroundColor: '#4B6095',
      // color: 'white',
      // borderRadius: '32px 32px 0 0',
      // padding: '8px',
    }}
  >
    {children}
  </p>
);
const ForkLabel = ({ children }) => (
  <span
    style={{
      fontSize: '21px',
      // marginTop: '16px',
      marginBottom: '16px',
      fontFamily: 'RecoletaDemo',
      fontWeight: 700,
      // opacity: 0.7,
      flexGrow: 1,
      textAlign: 'center',
    }}
  >
    by {children}
  </span>
);

const StoryOption = ({ style, option, isStory = false, ...props }) => {
  return (
    <Flex
      // className={s.forkCardFrame}
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        ...style,
      }}
      {...props}
    >
      <div style={{ marginLeft: '24px', marginRight: '24px' }}>
        <ForkCard>
          <ForkHeader>
            <ForkTitle>{option.label}</ForkTitle>
            <Flex>
              <ForkLabel>{option.author}</ForkLabel>
            </Flex>
            <Flex
              style={{
                justifyContent: 'center',
                fontSize: '14px',
                color: 'var(--primary-color)',
              }}
            >
              {/* <span>2 days ago</span> */}
              <span>74 forks</span>
            </Flex>
          </ForkHeader>
          <div
            style={{
              flexShrink: 0,
              overflow: 'hidden',
              position: 'relative',
              marginTop: '16px',
            }}
          >
            {/* <div
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              background:
                'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            }}
          /> */}
            {isStory && (
              <p
                style={{
                  display: '-webkit-box',
                  // overflow: 'hidden',
                  margin: 0,
                  fontSize: '16px',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: '5',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {option.sample}
              </p>
            )}
          </div>
          {/* <Flex
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              color: 'var(--primary-color)',
              flexGrow: 1,
              paddingTop: '24px',
            }}
          >
            <p style={{ margin: 0, alignSelf: 'flex-end' }}>Keep reading</p>
          </Flex> */}
          <Flex
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              // border: '2px solid var(--primary-color)',
              // backgroundColor: 'var(--primary-color)',
              // color: 'white',
              color: 'var(--primary-color)',
              flexGrow: 1,
              marginTop: '24px',
              borderRadius: '32px',
              padding: '8px',
            }}
          >
            <p
              style={{
                margin: 0,
                alignSelf: 'flex-end',
                //fontSize: '16px'
              }}
            >
              Keep reading
            </p>
          </Flex>
          {/* <Flex
            style={{
              justifyContent: 'center',
              fontSize: '14px',
              color: 'var(--primary-color)',
            }}
          >
            <span>(346 forks)</span>
          </Flex> */}
        </ForkCard>
      </div>
    </Flex>
  );
};

export default StoryOption;
