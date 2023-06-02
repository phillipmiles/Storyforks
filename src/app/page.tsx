import ForkCard from '@/components/ForkCard';
import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import Link from 'next/link';

const ForkHeader = ({ children }) => <div style={{}}>{children}</div>;
const ForkTitle = ({ children }) => (
  <p
    style={{
      marginBottom: 0,
      // fontSize: '16px'
    }}
  >
    {children}
  </p>
);
const ForkLabel = ({ children }) => (
  <span
    style={{
      fontSize: 14,
      opacity: 0.7,
      flexGrow: 1,
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
      label: 'Highly recommended',
      genres: ['Drama', 'Horror'],
      sample:
        'Eight, playing in the copse of trees at the end of the road that led to the sea. It was all one big argument with Gary, more than playing... but, as this memory played out like the others, there was a glimpse of something in the trees. Barely a flash, but the memory stopped. And Ash marvelled. This was not what he had expected to find in his childhood.',
    },
    {
      title: 'derp',
      author: 'Ashely Bate',
      label: 'New',
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
      label: 'Marathon',
      genres: ['Unknown'],
      sample:
        "Only reviewing this long forgotten past now did Ash truly realize that he had felt things differently. Other people, he knew, would feel the heat running under the Fire Pokémon's fur. But few would feel the surging, volcanic power in Arcanine's body just from being near – faintly, but still somehow there to be felt.",
    },
  ];

  return (
    <Page>
      <div style={{ flexGrow: 1, marginTop: '92px' }}>
        <PageContentWrap>
          <Flex
            style={{
              // justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              borderBottom: '3px solid #AACCEE',
              marginLeft: '8%',
              marginRight: '8%',
              // marginBottom: '96px',
            }}
          >
            <h1 style={{ marginBottom: '24px' }}>Begin a story</h1>
            <p style={{ marginBottom: '64px' }}>and explore it's forks</p>

            <span
              style={{
                color: '#ecf4fa',
                background: '#667799',
                border: '3px solid #667799',
                padding: '8px 24px',
                borderRadius: '32px',
                marginBottom: '24px',
              }}
            >
              <Link href={''}>Write a story</Link>
            </span>
            <span
              style={{
                border: '3px solid #AACCEE',
                color: '#667799',
                padding: '8px 24px',
                borderRadius: '32px',
              }}
            >
              <Link href="">Read a story</Link>
            </span>
            {/* <div
              style={{
                borderRadius: '32px',
                border: '3px solid #AACCEE',
                color: '#AACCEE',
                width: '16px',
                height: '16px',
              }}
            ></div> */}
            <div
              style={{
                // position: 'absolute',
                // top: '-64px',
                backgroundColor: '#AACCEE',
                width: '3px',
                height: '256px',
              }}
            />
            <Flex
              style={{
                backgroundColor: '#ecf4fa',
                color: '#667799',
                // width: '16px',
                // height: '16px',
                // padding: '8px 24px',
                borderRadius: '32px',
                border: '3px solid #AACCEE',
                justifyContent: 'center',
                alignItems: 'center',

                marginBottom: '-24px',
              }}
            >
              <span
                style={{
                  //marginRight: '16px',
                  padding: '8px 24px',
                }}
              >
                Filter stories
              </span>
            </Flex>
            {/* <div
              style={{
                // position: 'absolute',
                // top: '-64px',
                backgroundColor: '#AACCEE',
                width: '3px',
                height: '64px',
              }}
            /> */}
          </Flex>
        </PageContentWrap>
        <Flex
          style={{
            paddingLeft: '64px',
            paddingRight: '64px',
            justifyContent: 'center',
          }}
        >
          {data &&
            data.map((item, index) => (
              <Flex
                key={index}
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '25%',
                  marginLeft: '24px',
                  marginRight: '24px',
                }}
              >
                {/* <div
                  style={{
                    // backgroundColor: '#AACCEE',
                    width: '16px',
                    height: '16px',
                    borderRadius: '32px',
                    border: '3px solid #AACCEE',
                  }}
                /> */}
                <div
                  style={{
                    // position: 'absolute',
                    // top: '-64px',
                    backgroundColor: '#AACCEE',
                    width: '3px',
                    height: '96px',
                  }}
                />
                <ForkCard>
                  <ForkHeader>
                    {/* <Flex
                        style={{
                          justifyContent: 'flex-start',
                          flexGrow: 0,
                          marginBottom: '16px',
                        }}
                      >
                        {item.genres.map((genre) => (
                          <GenreChip key={genre}>{genre}</GenreChip>
                        ))}
                      </Flex> */}

                    <ForkTitle>{item.label}</ForkTitle>
                    <Flex>
                      <ForkLabel>{item.author}</ForkLabel>
                      {/* <span style={{ fontSize: 14, opacity: 0.7 }}>
                          + 13 forks``
                        </span> */}
                    </Flex>
                  </ForkHeader>
                  <div
                    style={{
                      overflow: 'hidden',
                      position: 'relative',
                      marginTop: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div
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
                    />
                    <p style={{ fontSize: '14px', color: '#556677' }}>
                      {item.sample}
                    </p>
                  </div>
                  <Flex
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#AACCEE',
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

                <div
                  style={{
                    // position: 'absolute',
                    // top: '-64px',
                    backgroundColor: '#AACCEE',
                    width: '3px',
                    height: '64px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#AACCEE',
                    width: '8px',
                    height: '8px',
                    borderRadius: '32px',
                    marginBottom: '16px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#AACCEE',
                    width: '8px',
                    height: '8px',
                    borderRadius: '32px',
                    marginBottom: '16px',
                    opacity: 0.8,
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#AACCEE',
                    width: '8px',
                    height: '8px',
                    borderRadius: '32px',
                    marginBottom: '16px',
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#AACCEE',
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
