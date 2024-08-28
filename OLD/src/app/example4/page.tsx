import DetachedHoverEffect from '@/components/generic/DetachedHoverEffect';
import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import s from './page.module.css';
import StoryOptionLineIn from '@/components/StoryOptionLineIn';
import StoryOption from '@/components/StoryOption';
import Icon from '@/components/generic/Icon';
import IconPencil from '../../../public/icons/design/pencil-fill.svg';
// import IconPencil from '../../../public/iconoir/edit-pencil.svg';
import IconBookOpen from '../../../public/icons/document/book-open-line.svg';
import { EditPencil, OpenBook } from 'iconoir-react';
import StoryOptionLineOut from '@/components/StoryOptionLineOut';

const ForkTitle = ({ style, children }) => (
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
      ...style,
    }}
  >
    {children}
  </p>
);

const Example = () => {
  const data = [
    {
      title: 'derp',
      author: 'Katie Wood',
      label: 'Recommended fork',
      genres: ['Drama', 'Horror'],
      sample:
        'Eight, playing in the copse of trees at the end of the road that led to the sea. It was all one big argument with Gary, more than playing... but, as this memory played out like the others, there was a glimpse of something in the trees. Barely a flash, but the memory stopped. And Ash marvelled. This was not what he had expected to find in his childhood.',
    },
    {
      title: 'derp',
      author: 'Ashely Bate',
      label: 'New fork',
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
      label: 'Marathon fork',
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
            <Flex
              style={{
                justifyContent: 'center',

                alignItems: 'center',
                width: '16px',
                height: '16px',
                borderRadius: '32px',
                border: '2px solid var(--primary-color)',
                color: 'var(--primary-color)',
              }}
            ></Flex>
            <div
              style={{
                backgroundColor: 'var(--primary-color)',
                width: '2px',
                height: '80px',
                top: 0,
              }}
            />
          </Flex>
          <PageContentWrap>
            <div
              style={{
                background: 'white',
                border: '2px solid var(--primary-color)',
                borderRadius: '24px',
                // padding: '64px 128px',
                paddingBottom: 0,
              }}
            >
              <div style={{ padding: '64px 128px' }}>
                <div
                  style={{
                    marginTop: '48px',
                    paddingBottom: '24px',
                    marginBottom: '48px',
                    // padding: '64px 128px',
                  }}
                >
                  <ForkTitle style={{ marginBottom: '32px' }}>
                    New story
                  </ForkTitle>
                  <h3
                    style={{
                      textAlign: 'center',
                      fontSize: '32px',
                      // color: 'var(--primary-color)',
                    }}
                  >
                    by Katie Bloom
                  </h3>
                  {/* <p
                    style={{
                      margin: 0,
                      lineHeight: '16px',
                      marginTop: '1px',
                      textAlign: 'center',
                      opacity: 0.6,
                      padding: '16px',
                      color: 'var(--primary-color)',
                      fontSize: '18px',
                    }}
                  >
                    <span style={{ margin: '0 8px' }}>fork 1</span>
                  </p> */}
                </div>
                <div
                  style={{
                    // backgroundColor: 'var(--background-light-color)',
                    // borderTop: '1px solid var(--primary-light-color)',
                    borderBottom: '1px solid var(--primary-color)',
                    // borderRadius: '24px',
                    padding: '24px',
                    marginLeft: '-24px',
                    marginRight: '-24px',
                    marginBottom: '64px',
                  }}
                >
                  <p
                    style={{ color: 'var(--primary-color)', fontWeight: '500' }}
                  >
                    Story Prompt:
                  </p>
                  <p
                  // style={{ fontSize: '21px' }}
                  >
                    Ash Ketchum – trainer of Pallet Town, winner of the Orange
                    League and increasingly close runner up in five other
                    regional tournaments – was... confused.
                  </p>
                </div>
                {/* <div
                  style={{
                    height: '2px',
                    backgroundColor: 'var(--primary-color)',
                    width: '100%',
                    marginTop: '48px',
                    marginBottom: '48px',
                  }}
                /> */}
                <p style={{ textAlign: 'center', marginBottom: '48px' }}>
                  Chapter 1
                </p>
                <p>
                  Ash Ketchum – trainer of Pallet Town, winner of the Orange
                  League and increasingly close runner up in five other regional
                  tournaments – was... confused.
                </p>
                <p>
                  He was floating in black, empty nothingness. No light, no
                  sound, nothing to use as a reference point – and, at first, he
                  wasn't sure how he'd ended up there.
                </p>
                <p>
                  When he tried to remember, instead of the most recent moments
                  he found something strange happening. His mind went straight
                  back to the <em>earliest</em> moments he could remember –
                  flicking past at astonishing speed, as though his whole life
                  were flashing before his eyes on fast forward.
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
                  knew, would feel the heat running under the Fire Pokémon's
                  fur. But few would feel the surging, volcanic power in
                  Arcanine's body just from being near – faintly, but still
                  somehow there to be felt.
                </p>
                <p>
                  Ash hadn't mentioned it at the time, or later. He simply
                  assumed that was what people felt. But now, he was older – and
                  made a connection which suddenly seemed obvious.
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
                  beaches, and a snatch of haunting song floated through the
                  air.
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
                  Eight, playing in the copse of trees at the end of the road
                  that led to the sea. It was all one big argument with Gary,
                  more than playing... but, as this memory played out like the
                  others, there was a glimpse of something in the trees. Barely
                  a flash, but the memory stopped. And Ash marvelled. This was
                  not what he had expected to find in his childhood.
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
              <Flex
                style={{
                  justifyContent: 'center',
                  marginTop: '64px',
                  marginBottom: '24px',
                  color: 'var(--primary-color)',
                }}
              >
                <p>Continue this story?</p>
              </Flex>
              <Flex
                style={{
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '0 0 20px 20px',
                  justifyContent: 'center',
                }}
              >
                <Flex
                  style={{
                    justifyContent: 'center',
                    width: '50%',
                    borderRight: '1px solid white',
                    padding: '24px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '21px',
                      margin: 0,
                      color: 'white',
                      display: 'block',
                    }}
                  >
                    {/* <Icon style={{ fill: 'white' }} /> */}
                    <EditPencil
                      color="white"
                      height={24}
                      width={24}
                      style={{ marginRight: '8px', verticalAlign: 'middle' }}
                    />
                    {/* <IconPencil
                      style={{
                        color: 'white',
                        fill: 'white',
                        height: '24px',
                        marginRight: '16px',
                      }}
                    /> */}
                    Fork story
                  </span>
                </Flex>
                {/* <p style={{ textAlign: 'center' }}>or</p> */}
                <Flex
                  style={{
                    justifyContent: 'center',
                    width: '50%',
                    borderLeft: '1px solid white',
                  }}
                >
                  <p
                    style={{
                      fontSize: '21px',
                      margin: 0,
                      // backgroundColor: 'var(--background-color)',
                      textAlign: 'center',
                      color: 'white',
                      padding: '24px',
                      // marginTop: '24px',
                      // color: 'var(--primary-color)',
                    }}
                  >
                    {/* <IconBookOpen
                      style={{
                        color: 'white',
                        fill: 'white',
                        height: '24px',
                        strokeColor: 'transparent',
                        marginRight: '16px',
                      }}
                    /> */}
                    <OpenBook
                      color="white"
                      height={24}
                      width={24}
                      style={{ marginRight: '8px', verticalAlign: 'middle' }}
                    />
                    Keep reading
                  </p>
                </Flex>
                {/* <Flex style={{ justifyContent: 'center' }}>
                  <Flex
                    style={{
                      width: '2px',
                      height: '64px',
                      backgroundColor: 'var(--primary-color)',
                    }}
                  />
                </Flex> */}
              </Flex>
            </div>
          </PageContentWrap>
          {/* <Flex style={{ justifyContent: 'center' }}>
            <p
              style={{
                fontSize: '18px',
                margin: 0,
                border: '2px solid var(--primary-color)',
                padding: '8px 24px',
                backgroundColor: 'var(--primary-color)',
                borderRadius: '80px',
                minWidth: '220px',
                textAlign: 'center',
                color: 'white',
                marginTop: '64px',
              }}
            >
              Fork story
            </p>
          </Flex>
          <Flex style={{ justifyContent: 'center' }}>
            <p
              style={{
                fontSize: '18px',
                margin: 0,
                border: '2px solid var(--primary-color)',
                padding: '8px 24px',
                backgroundColor: 'var(--background-color)',
                borderRadius: '80px',
                minWidth: '220px',
                textAlign: 'center',
                marginTop: '24px',
                color: 'var(--primary-color)',
              }}
            >
              Continue reading
            </p>
          </Flex> */}

          <Flex style={{ justifyContent: 'center' }}>
            <Flex
              style={{
                width: '2px',
                height: '256px',
                backgroundColor: 'var(--primary-color)',
              }}
            />
          </Flex>
          <Flex
            style={{
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Flex
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: 'var(--primary-color)',
                zIndex: 1,
                borderRadius: '32px',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  margin: 0,
                  border: '2px solid var(--primary-color)',
                  padding: '8px 24px',
                  backgroundColor: 'var(--background-color)',
                  borderRadius: '80px',
                  minWidth: '220px',
                  textAlign: 'center',
                }}
              >
                Filter forks
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
              justifyContent: 'center',
            }}
          >
            {data &&
              data.map((item, index) => {
                let curveDirection = 'both';
                if (index == 0) curveDirection = 'right';
                else if (index == 2) curveDirection = 'left';
                return (
                  <Flex
                    key={index}
                    style={{
                      width: '28%',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <StoryOptionLineIn curveDirection={curveDirection} />
                    <StoryOption option={item} isStory={false} />
                    <StoryOptionLineOut />
                  </Flex>
                );
              })}
          </Flex>
          <PageContentWrap>
            <Flex
              style={{
                paddingTop: '64px',
                justifyContent: 'center',
                marginBottom: '64px',
                color: 'var(--primary-color)',
              }}
            >
              <p>Show all 43 forks</p>
            </Flex>
          </PageContentWrap>

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
        </div>
      </div>
    </Page>
  );
};

export default Example;
