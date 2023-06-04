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
      marginBottom: '16px',
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
      fontSize: 16,
      opacity: 0.7,
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
      <div style={{ flexGrow: 1, marginTop: '160px' }}>
        <PageContentWrap>
          <Flex
            style={{
              // justifyContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              // borderBottom: '3px solid #AACCEE',
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
              and explore it's forks
            </p>

            <span
              style={{
                color: '#ecf4fa',
                background: '#4B6095',
                border: '3px solid #4B6095',
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
                // border: '3px solid #AACCEE',
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
              width: '3px',
              height: 'inherit',
            }}
          />
          {/* Curvies */}
          {/* <div
            style={{
              position: 'absolute',
              borderBottom: '3px solid #4B6095',
              width: '32px',
              height: '32px',
              borderRight: '3px solid #4B6095',
              borderRadius: '0 0 32px 0',
              bottom: '-3px',
              transform: 'translateX(-14.5px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              borderBottom: '3px solid #4B6095',
              width: '32px',
              height: '32px',
              borderLeft: '3px solid #4B6095',
              borderRadius: '0 0 0 32px',
              bottom: '-3px',
              transform: 'translateX(14.5px)',
            }}
          /> */}
        </Flex>

        <Flex
          style={{
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Flex
            style={{
              width: '50%',
              // backgroundColor: 'yellow',
              justifyContent: 'center',
              // border: '3px solid #4b6095',
              // borderBottom: 0,
              // backgroundColor: '#4b6095',
              color: '#4b6095',
              borderRadius: '36px 36px 0 0',
              fontSize: '16px',
              padding: '24px',
            }}
          >
            <Flex>
              {/* <span style={{ marginRight: '16px', marginLeft: '16px' }}>
                Genre: Any
              </span> */}
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
          </Flex>
        </Flex>
        <Flex
          style={{
            // paddingLeft: '64px',
            // paddingRight: '64px',
            justifyContent: 'center',
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
                {index == 0 && <Flex className={s.forkCardJourneyLine} />}
                {index == 1 && (
                  <>
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        borderTop: '3px solid #4b6095',
                      }}
                    />
                    <Flex style={{ justifyContent: 'center' }}>
                      <div
                        style={{
                          // position: 'absolute',
                          // top: '-64px',
                          backgroundColor: '#4b6095',
                          width: '3px',
                          height: '96px',
                        }}
                      />
                    </Flex>
                  </>
                )}
                {index == 2 && <Flex className={s.forkCardJourneyLine} />}
                <div style={{ marginLeft: '24px', marginRight: '24px' }}>
                  <ForkCard>
                    <ForkHeader>
                      <ForkTitle>{item.label}</ForkTitle>
                      <Flex>
                        <ForkLabel>{item.author}</ForkLabel>
                      </Flex>
                    </ForkHeader>
                    <div
                      style={{
                        overflow: 'hidden',
                        position: 'relative',
                        marginTop: '16px',
                        marginBottom: '16px',
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
                      <p style={{ fontSize: '16px', color: '#556677' }}>
                        {item.sample}
                      </p>
                    </div>
                    <Flex
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#4b6095',
                        flexGrow: 1,

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

                <div
                  style={{
                    // position: 'absolute',
                    // top: '-64px',
                    backgroundColor: '#4b6095',
                    width: '3px',
                    height: '64px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '8px',
                    height: '8px',
                    borderRadius: '32px',
                    marginBottom: '16px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '8px',
                    height: '8px',
                    borderRadius: '32px',
                    marginBottom: '16px',
                    opacity: 0.8,
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '8px',
                    height: '8px',
                    borderRadius: '32px',
                    marginBottom: '16px',
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#4b6095',
                    width: '8px',
                    height: '8px',
                    borderRadius: '32px',
                    opacity: 0.5,
                  }}
                />
              </Flex>
            ))}
        </Flex>
        <PageContentWrap>
          <Flex
            style={{
              paddingTop: '48px',
              justifyContent: 'center',
              opacity: 0.6,
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
