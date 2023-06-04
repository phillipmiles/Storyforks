import ForkCard from '@/components/ForkCard';
import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import Link from 'next/link';
import s from './page.module.css';

const ForkHeader = ({ children }) => <div style={{}}>{children}</div>;
const ForkTitle = ({ children }) => (
  <p
    style={{
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: '14px',
      color: '#4B6095',
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
      // fontSize: 18,
      // marginTop: '16px',
      marginBottom: '16px',
      fontFamily: 'RecoletaDemo',
      fontWeight: 700,
      // opacity: 0.7,
      flexGrow: 1,
      textAlign: 'center',
    }}
  >
    By {children}
  </span>
);

const GenreChip = ({ children }) => (
  <Flex
    style={{
      // height: '40px',

      background: '#DDEEFF',
      color: '#556677',
      borderRadius: '20px',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '14px',
      marginRight: '8px',
      marginTop: '8px',
      // marginBottom: '0px',
    }}
  >
    <span style={{ paddingTop: '2px' }}>{children}</span>
  </Flex>
);

const Example = () => {
  const data = [
    {
      title: 'derp',
      author: 'Katie Wood',
      label: 'Recommended story',
      genres: ['Drama', 'Horror'],
      sample:
        'Eight, playing in the copse of trees at the end of the road that led to the sea. It was all one big argument with Gary, more than playing... but, as this memory played out like the others, there was a glimpse of something in the trees. Barely a flash, but the memory stopped. And Ash marvelled. This was not what he had expected to find in his childhood.',
    },
    {
      title: 'derp',
      author: 'Ashely Bate',
      label: 'New story',
      genres: ['Romance'],
      sample:
        'The memory dissolved, and his life played itself out again, perhaps a little slower than before.  The time he was five, at Cinnabar island on the black sand beaches, and a snatch of haunting song floated through the air. I know that music… Ash realized. But how? What would Lugia have been doing this far north of Shamouti? Could it be... because of me? The prophecy said I was the Chosen One...',
    },
    {
      title: 'derp',
      author: 'Kirk Hancock',
      // label: 'Forgotten',
      // label: 'Author continues',
      // label: 'Initial author continued',
      label: 'Long story',
      genres: ['Unknown'],
      sample:
        "Only reviewing this long forgotten past now did Ash truly realize that he had felt things differently. Other people, he knew, would feel the heat running under the Fire Pokémon's fur. But few would feel the surging, volcanic power in Arcanine's body just from being near – faintly, but still somehow there to be felt.",
    },
  ];

  return (
    <Page>
      {/* <div
        style={{
          position: 'fixed',
          background: 'linear-gradient(45deg, blue, red);',
          width: '100%',
          height: '16px',
          zIndex: 500,
        }}
      ></div> */}
      {/* <div
        style={{
          position: 'fixed',
          background: 'linear-gradient(0deg, rgba(0,0,0,0), #ecf4fa);',
          width: '100%',
          height: '80px',
          zIndex: 500,
        }}
      ></div> */}
      <div style={{ flexGrow: 1, marginTop: '160px' }}>
        <PageContentWrap>
          <Flex
            style={{
              // justifyContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              // borderBottom: '2px solid #AACCEE',
              marginLeft: '8%',
              marginRight: '8%',
            }}
          >
            <p
              className={s.title}
              style={{
                letterSpacing: '4px',
                marginBottom: '56px',
                color: '#4B6095',
              }}
              // className={s.subTitles}
            >
              — STORYFORKS —
            </p>
            <h1
              className={s.title}
              style={{ marginBottom: '16px', fontSize: '80px' }}
            >
              Begin a story
            </h1>
            <p
              className={s.subTitles}
              style={{
                marginBottom: '92px',
                fontSize: '24px',
                color: '#4B6095',
              }}
            >
              develop it together
            </p>

            <span
              style={{
                color: '#ecf4fa',
                background: '#4B6095',
                border: '2px solid #4B6095',
                padding: '8px 24px',
                borderRadius: '32px',
                marginBottom: '24px',
                width: '100%',
                maxWidth: '220px',
                textAlign: 'center',
              }}
            >
              <Link href={''}>Write a story</Link>
            </span>
            <span
              className={s.testMotionButton}
              style={{
                // border: '2px solid #AACCEE',
                color: '#4B6095',

                padding: '8px 24px',
                borderRadius: '32px',
                position: 'relative',
                width: '100%',
                maxWidth: '220px',
                textAlign: 'center',
              }}
            >
              <Link href="">Read a story</Link>
            </span>
          </Flex>
        </PageContentWrap>
        <Flex
          style={{
            justifyContent: 'center',
            position: 'relative',
            height: '256px',
          }}
        >
          <div
            style={{
              backgroundColor: '#4B6095',
              width: '2px',
              height: 'inherit',
            }}
          />
          {/* Curvies */}
          {/* <div
            style={{
              position: 'absolute',
              borderBottom: '2px solid #4B6095',
              width: '32px',
              height: '32px',
              borderRight: '2px solid #4B6095',
              borderRadius: '0 0 32px 0',
              bottom: '-2px',
              transform: 'translateX(-14.5px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              borderBottom: '2px solid #4B6095',
              width: '32px',
              height: '32px',
              borderLeft: '2px solid #4B6095',
              borderRadius: '0 0 0 32px',
              bottom: '-2px',
              transform: 'translateX(14.5px)',
            }}
          /> */}
        </Flex>
        <Flex style={{ justifyContent: 'center', marginTop: '-188px' }}>
          <Flex
            style={{
              position: 'relative',
              marginTop: '64px',
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              // backgroundColor: '#ecf4fa',
              transform: 'translateY(82px)',
              color: '#4B6095',
              zIndex: 1,
              // border: '2px solid #4B6095',
              borderRadius: '24px',
              padding: '24px',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                marginBottom: '16px',
                border: '2px solid #4B6095',
                padding: '8px 24px',
                backgroundColor: '#ecf4fa',
                borderRadius: '80px',
                minWidth: '220px',
                textAlign: 'center',
              }}
            >
              Filter stories
            </p>
            {/* <Flex
              style={{
                // width: '50%',
                // backgroundColor: 'yellow',
                justifyContent: 'center',
                // border: '2px solid #4b6095',
                // borderBottom: 0,
                // backgroundColor: '#4b6095',
                color: '#4b6095',
                borderRadius: '36px 36px 0 0',
                fontSize: '16px',
                // padding: '24px',
              }}
            >
              <Flex>
                <span style={{ marginRight: '16px', marginLeft: '16px' }}>
                  Label: Any
                </span>
                <span style={{ marginRight: '16px', marginLeft: '16px' }}>
                  Show visited
                </span>
                <span style={{ marginRight: '16px', marginLeft: '16px' }}>
                  Show mature content
                </span>
              </Flex>
            </Flex> */}
          </Flex>
        </Flex>
        <Flex
          style={{
            // paddingLeft: '64px',
            // paddingRight: '64px',
            justifyContent: 'center',
            marginTop: '16px',
          }}
        >
          {data &&
            data.map((item, index) => (
              <Flex
                key={index}
                className={s.forkCardFrame}
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '28%',
                  position: 'relative',

                  // marginLeft: '24px',
                  // marginRight: '24px',
                }}
              >
                {/* <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#4b6095',
                    width: '4px',
                    height: '4px',
                    borderRadius: '32px',
                    marginBottom: '16px',
                  }}
                /> */}
                {index == 0 && <div className={s.forkCardJourneyLine}></div>}
                {index == 1 && (
                  <>
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        borderTop: '2px solid #4b6095',
                      }}
                    />
                    <Flex style={{ justifyContent: 'center' }}>
                      <div
                        style={{
                          // position: 'absolute',
                          // top: '-64px',
                          backgroundColor: '#4b6095',
                          width: '2px',
                          height: '108px',
                        }}
                      />
                    </Flex>
                  </>
                )}
                {index == 2 && <Flex className={s.forkCardJourneyLine} />}
                <div style={{ marginLeft: '24px', marginRight: '24px' }}>
                  <ForkCard style={{}}>
                    <ForkHeader>
                      <ForkTitle>{item.label}</ForkTitle>
                      <Flex>
                        <ForkLabel>{item.author}</ForkLabel>
                      </Flex>
                    </ForkHeader>
                    <div
                      style={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        position: 'relative',
                        marginTop: '16px',
                        // marginBottom: '16px',
                        // padding: '32px',
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
                      <p style={{ fontSize: '16px' }}>{item.sample}</p>
                    </div>
                    <Flex
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#4b6095',
                        flexGrow: 1,
                        paddingTop: '24px',

                        // borderTop: '1px solid #AACCEE',
                        // paddingTop: '16px',
                      }}
                    >
                      <p style={{ margin: 0, alignSelf: 'flex-end' }}>
                        Keep reading
                      </p>
                    </Flex>

                    {/* <Flex
                  style={{
                    justifyContent: 'flex-start',
                    flexGrow: 0,
                  }}
                >
                  <GenreChip>Drama</GenreChip>
                  <GenreChip>Horror</GenreChip>
                </Flex> */}
                  </ForkCard>
                </div>

                {/* <div style={{ width: '100px', height: '150px' }}>
                  <svg viewBox="0 0 100 150">
                    <path
                      fill="none"
                      stroke="#4b6095"
                      stroke-width="3"
                      d="M 50 0, l 0 50, a 20 20 0 0 1 -20 20, a 20 20 0 0 0 -20 20, l 0 20, M 50 50, a 20 20 0 0 0 20 20, a 20 20 0 0 1 20 20, l 0 20"
                    />
                  </svg>
                </div> */}

                {/* <div style={{ width: '50px', height: '150px' }}>
                  <svg viewBox="0 0 50 150">
                    <path
                      fill="none"
                      stroke="#4b6095"
                      stroke-width="3"
                      d="M 25 0, l 0 50, a 20 20 0 0 1 20 20, l 0 30,   M 25 50, a 20 20 0 0 0 -20 20, l 0 30"
                    />
                  </svg>
                </div> */}
                <div
                  style={{
                    width: '2px',
                    height: '40px',
                    backgroundColor: '#4b6095',
                    marginBottom: '8px',
                  }}
                />
                {/* <div
                  style={{
                    width: '2px',
                    height: '9px',
                    backgroundColor: '#4b6095',
                    marginBottom: '5px',
                  }}
                />
                <div
                  style={{
                    width: '2px',
                    height: '6px',
                    backgroundColor: '#4b6095',
                    marginBottom: '6px',
                  }}
                />
                <div
                  style={{
                    width: '2px',
                    height: '5px',
                    backgroundColor: '#4b6095',
                    marginBottom: '7px',
                  }}
                /> */}
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '4px',
                    height: '4px',
                    borderRadius: '32px',
                    marginBottom: '8px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '4px',
                    height: '4px',
                    borderRadius: '32px',
                    marginBottom: '8px',
                    opacity: 0.9,
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '4px',
                    height: '4px',
                    borderRadius: '32px',
                    marginBottom: '8px',
                    opacity: 0.8,
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '4px',
                    height: '4px',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '4px',
                    height: '4px',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    opacity: 0.4,
                  }}
                />
              </Flex>
            ))}
        </Flex>
        <PageContentWrap>
          <Flex
            style={{
              paddingTop: '64px',
              justifyContent: 'center',
              marginBottom: '64px',
              color: '#4b6095',
            }}
          >
            <p>Show all stories</p>
          </Flex>
        </PageContentWrap>
      </div>
    </Page>
  );
};

export default Example;
