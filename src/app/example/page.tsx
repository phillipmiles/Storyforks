import DetachedHoverEffect from '@/components/generic/DetachedHoverEffect';
import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import s from './page.module.css';

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

const ForkCard = ({ style, children }) => (
  <Flex
    style={{
      background: 'white',

      // marginLeft: '24px',
      // marginRight: '24px',
      width: '100%',
      height: '400px',
      flexShrink: 0,
      borderRadius: '32px',
      padding: '24px',
      flexDirection: 'column',
      ...style,
    }}
  >
    {children}
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
      <div style={{ flexGrow: 1 }}>
        <div style={{ marginTop: '92px' }}>
          <Flex
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                // backgroundColor: '#AACCEE',
                width: '16px',
                height: '16px',
                borderRadius: '32px',
                border: '3px solid #AACCEE',
              }}
            />
            <div
              style={{
                backgroundColor: '#AACCEE',
                width: '3px',
                height: '80px',
                top: 0,
              }}
            />
          </Flex>
          <PageContentWrap>
            <div
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '64px',
              }}
            >
              <div
                style={{
                  borderBottom: '1px solid #CCDDEE',
                  paddingBottom: '24px',
                  marginBottom: '48px',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    textAlign: 'center',
                    color: '#4B6095',
                    // textTransform: 'uppercase',
                  }}
                >
                  By Katie Bloom
                </p>
              </div>

              <p>
                Ash Ketchum – trainer of Pallet Town, winner of the Orange
                League and increasingly close runner up in five other regional
                tournaments – was... confused.
              </p>
              <p>
                He was floating in black, empty nothingness. No light, no sound,
                nothing to use as a reference point – and, at first, he wasn't
                sure how he'd ended up there.
              </p>
              <p>
                When he tried to remember, instead of the most recent moments he
                found something strange happening. His mind went straight back
                to the <em>earliest</em> moments he could remember – flicking
                past at astonishing speed, as though his whole life were
                flashing before his eyes on fast forward.
              </p>
              <p>
                A few things stood out, as though he was slowing down to think
                about them more clearly.
              </p>
              <p>
                The first time he saw a Pokémon, at barely two years of age,
                when Professor Oak – taking care of him when Ash's mother was
                shopping – was called away suddenly and Ash and Gary were left
                under the supervision of his distinguished old Arcanine, a
                gentle Pokémon, but a terror in battle decades before when
                Samuel Oak was the League Champion.
              </p>
              <p>
                Only reviewing this long forgotten past now did Ash truly
                realize that he had felt things differently. Other people, he
                knew, would feel the heat running under the Fire Pokémon's fur.
                But few would feel the surging, volcanic power in Arcanine's
                body just from being near – faintly, but still somehow there to
                be felt.
              </p>
              <p>
                Ash hadn't mentioned it at the time, or later. He simply assumed
                that was what people felt. But now, he was older – and made a
                connection which suddenly seemed obvious.
              </p>
              <p>
                <em>Aura</em>, he thought.{' '}
                <em>
                  I can feel his Aura. The gentle amusement, the tiny little
                  part of{' '}
                </em>
                <em>
                  <em>his</em>
                </em>
                <em> mind always on the ready for danger.</em>{' '}
                <em>
                  It's just like that Riolu back in Sinnoh... and Lucario.
                </em>
              </p>
              <p>
                The memory dissolved, and his life played itself out again,
                perhaps a little slower than before.
              </p>
              <p>
                The time he was five, at Cinnabar island on the black sand
                beaches, and a snatch of haunting song floated through the air.
              </p>
              <p>
                <em>I know that music…</em> Ash realized.
                <em>
                  {' '}
                  But how? What would Lugia have been doing this far north of
                  Shamouti? Could it be... because of me? The prophecy said I
                  was the Chosen One...
                </em>
              </p>
              <p>
                Eight, playing in the copse of trees at the end of the road that
                led to the sea. It was all one big argument with Gary, more than
                playing... but, as this memory played out like the others, there
                was a glimpse of something in the trees. Barely a flash, but the
                memory stopped. And Ash marvelled. This was not what he had
                expected to find in his childhood.
              </p>
              <p>
                For what was unmistakably <em>Suicune</em> was in the
                underbrush, observing for but a moment.
              </p>
              <div
                style={{
                  borderTop: '1px solid #CCDDEE',
                  marginTop: '48px',
                  paddingTop: '48px',
                }}
              >
                <p>Recommend fork</p>
                <p>Apply genre to fork</p>
                <p>Suggest this fork as an end of the story</p>
                <p>Bookmark fork</p>
                <p>Mark fork as mature</p>
              </div>
            </div>

            <Flex style={{ position: 'relative', justifyContent: 'center' }}>
              <Flex
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: '50%',
                  height: '256px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#AACCEE',
                    width: '3px',
                    height: '128px',
                  }}
                />
                {/* <Flex
                  style={{
                    // position: 'absolute',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Flex
                    style={{
                      flexShrink: 0,
                      // width: '600px',
                      // height: '48px',
                      borderRadius: '100px',
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '16px',
                    }}
                  >
                    Keep reading
                  </Flex>
                </Flex> */}
                <Flex
                  style={{
                    // position: 'absolute',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Flex
                    style={{
                      flexShrink: 0,
                      // width: '600px',
                      // height: '48px',
                      borderRadius: '8px',
                      // backgroundColor: 'white',
                      border: '3px solid #CCDDEE',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '16px',
                      flexDirection: 'column',
                    }}
                  >
                    {/* <span style={{ marginRight: '16px', marginLeft: '16px' }}>
                      Hide genres
                    </span> */}
                    To continue the story, select a fork below or write your own
                    fork.
                    <p>Filter Forks:</p>
                    <Flex>
                      <span style={{ marginRight: '16px', marginLeft: '16px' }}>
                        Genre: Any
                      </span>
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
                    {/* <span style={{ marginRight: '16px', marginLeft: '16px' }}>
                    Show more forks
                  </span> */}
                  </Flex>
                </Flex>
                <div
                  style={{
                    backgroundColor: '#AACCEE',
                    width: '3px',
                    height: '64px',
                  }}
                />
              </Flex>
            </Flex>
          </PageContentWrap>

          <Flex
            style={{
              // marginTop: '92px',
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
                  <div
                    style={{
                      // position: 'absolute',
                      // top: '-64px',
                      backgroundColor: '#AACCEE',
                      width: '3px',
                      height: '64px',
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
                </Flex>
              ))}

            {/* <Flex
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '20%',
                marginLeft: '24px',
                marginRight: '24px',
              }}
            >
              <div
                style={{
                  // position: 'absolute',
                  // top: '-64px',
                  backgroundColor: '#AACCEE',
                  width: '4px',
                  height: '64px',
                }}
              />
              <ForkCard>
                <Flex
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    // flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <p
                    style={{
                      fontSize: '40px',
                      margin: 0,
                      fontWeight: '700',
                    }}
                  >
                    +15
                    <span
                      style={{
                        color: '#6679AACC',
                        fontSize: '18px',
                        paddingLeft: '4px',
                        fontWeight: '400',
                      }}
                    >
                      forks
                    </span>
                  </p>
                </Flex>
              </ForkCard>
            </Flex> */}
            {/* <ForkCard>
              <ForkHeader>
                <ForkTitle>Katie Wood</ForkTitle>
                <ForkLabel>New</ForkLabel>
              </ForkHeader>
              <span style={{ fontSize: 14, opacity: 0.7 }}>+ 0 forks</span>
              <Flex
                style={{
                  justifyContent: 'flex-start',
                  flexGrow: 0,
                }}
              >
                <GenreChip>Unknown</GenreChip>
              </Flex>
            </ForkCard>
            <ForkCard>
              <ForkHeader>
                <ForkTitle>Katie Wood</ForkTitle>
                <ForkLabel>Forgotten</ForkLabel>
              </ForkHeader>
              <span style={{ fontSize: 14, opacity: 0.7 }}>+ 3 forks</span>
              <Flex
                style={{
                  justifyContent: 'flex-start',
                  flexGrow: 0,
                }}
              >
                <GenreChip>Mystery</GenreChip>
              </Flex>
            </ForkCard>
            <ForkCard
              style={{
                flexShrink: 0,
                // width: '600px',
                // height: '48px',
                borderRadius: '8px',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px',
              }}
            >
              <span>+ 15</span>
            </ForkCard> */}

            {/* <ForkCard>
              <ForkHeader>
                <ForkTitle>Katie Wood</ForkTitle>
                <ForkLabel>Divisive</ForkLabel>
              </ForkHeader>
              <span style={{ fontSize: 14, opacity: 0.7 }}>+ 5 forks</span>
              <Flex
                style={{
                  justifyContent: 'flex-start',
                  flexGrow: 0,
                }}
              >
                <GenreChip>Action</GenreChip>
                <GenreChip>Adventure</GenreChip>
              </Flex>
            </ForkCard> */}
          </Flex>
          <PageContentWrap>
            <Flex
              style={{
                paddingTop: '48px',
                justifyContent: 'center',
                opacity: 0.6,
              }}
            >
              <p>Show all forks</p>
            </Flex>
          </PageContentWrap>
        </div>
      </div>
    </Page>
  );
};

export default Example;
