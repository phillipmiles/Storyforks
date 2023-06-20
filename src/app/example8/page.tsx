import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import Link from 'next/link';
import s from './page.module.css';
import StoryOption2 from '@/components/StoryOption2';
import StoryOptionLineIn from '@/components/StoryOptionLineIn';
import StoryOptionLineOut from '@/components/StoryOptionLineOut';
import {
  ArrowEmailForward,
  ArrowRight,
  Book,
  BookmarkEmpty,
  BrightStar,
  Check,
  CheckCircle,
  EditPencil,
  Facebook,
  Filter,
  Heart,
  MoreHoriz,
  NavArrowRight,
  OpenBook,
  Star,
  Suggestion,
  Twitter,
} from 'iconoir-react';
import Button from '@/components/Button';
import GenericButton from '@/components/generic/Button';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';
import ButtonText from '@/components/generic/ButtonText';
import ForkList from '@/components/ForkList';

const Example = () => {
  const data = [
    {
      title: 'A Hill To Die On',
      author: 'Katie Wood',
      label: 'Recommended',
      chapter: 'Chapter 2',
      genres: ['Drama', 'Horror'],
      sample:
        'Eight, playing in the copse of trees at the end of the road that led to the sea. It was all one big argument with Gary, more than playing... but, as this memory played out like the others, there was a glimpse of something in the trees. Barely a flash, but the memory stopped. And Ash marvelled. This was not what he had expected to find in his childhood.',
    },
    {
      title: 'The birth of something desirable',
      author: 'Ashely Bate',
      label: 'New',
      chapter: 'Chapter 2',
      genres: ['Romance'],
      sample:
        'The memory dissolved, and his life played itself out again, perhaps a little slower than before.  The time he was five, at Cinnabar island on the black sand beaches, and a snatch of haunting song floated through the air. I know that music… Ash realized. But how? What would Lugia have been doing this far north of Shamouti? Could it be... because of me?',
    },
    {
      title: 'Consequences',
      author: 'Kirk Hancock',
      // label: 'Forgotten',
      // label: 'Author continues',
      // label: 'Initial author continued',
      label: 'Long',
      chapter: 'Chapter 2',
      genres: ['Unknown'],
      sample:
        "Only reviewing this long forgotten past now did Ash truly realize that he had felt things differently. Other people, he knew, would feel the heat running under the Fire Pokémon's fur. But few would feel the surging, volcanic power in Arcanine's body just from being near – faintly, but still somehow there to be felt.",
    },
  ];

  return (
    <Page style={{ backgroundColor: 'white' }}>
      <PageContentWrap>
        <div
          style={{
            backgroundColor: 'white',
            padding: '128px',
            paddingBottom: '0px',
          }}
        >
          <div
            style={{
              marginTop: '48px',
              paddingBottom: '24px',
              marginBottom: '48px',
              // padding: '64px 128px',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                // fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: 1,
                color: '#445464',
                marginBottom: '32px',
              }}
            >
              {/* {item.label} */}
              Chapter 2
            </p>
            <h2
              style={{
                textAlign: 'center',
                marginBottom: '32px',
                fontSize: '48px',
                // color: 'var(--primary-color)',
              }}
            >
              {data[0].title}
            </h2>
            <Flex
              style={{
                justifyContent: 'center',
                marginBottom: '24px',
                color: '#445464',
              }}
            >
              <span
                style={{
                  // fontSize: '16px',
                  textAlign: 'center',
                }}
              >
                By {data[0].author}
              </span>
              {/* <span
                style={{
                  margin: '0 8px',
                  // fontSize: '16px',
                }}
              >
                |
              </span>
              <span
                style={{
                  // fontSize: '16px',
                  textAlign: 'center',
                }}
              >
                {data[0].label}
              </span> */}
            </Flex>

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
          {/* <div
            style={{
              // backgroundColor: 'var(--background-light-color)',
              // borderTop: '1px solid var(--primary-light-color)',
              borderTop: '2px solid #A4B4C4',
              borderBottom: '2px solid #A4B4C4',
              // borderRadius: '24px',
              padding: '32px 48px',
              marginLeft: '-48px',
              marginRight: '-48px',
              marginBottom: '64px',
            }}
          >
            <p style={{ fontWeight: '500' }}>Story Prompt:</p>
            <p style={{ margin: 0 }}>
              Ash Ketchum – trainer of Pallet Town, winner of the Orange League
              and increasingly close runner up in five other regional
              tournaments – was... confused.
            </p>
          </div> */}
          <p>
            Ash Ketchum – trainer of Pallet Town, winner of the Orange League
            and increasingly close runner up in five other regional tournaments
            – was... confused.
          </p>
          <p>
            He was floating in black, empty nothingness. No light, no sound,
            nothing to use as a reference point – and, at first, he wasn't sure
            how he'd ended up there.
          </p>
          <p>
            When he tried to remember, instead of the most recent moments he
            found something strange happening. His mind went straight back to
            the <em>earliest</em> moments he could remember – flicking past at
            astonishing speed, as though his whole life were flashing before his
            eyes on fast forward.
          </p>
          <p>
            A few things stood out, as though he was slowing down to think about
            them more clearly.
          </p>
          <p>
            The first time he saw a Pokémon, at barely two years of age, when
            Professor Oak – taking care of him when Ash's mother was shopping –
            was called away suddenly and Ash and Gary were left under the
            supervision of his distinguished old Arcanine, a gentle Pokémon, but
            a terror in battle decades before when Samuel Oak was the League
            Champion.
          </p>
          <p>
            Only reviewing this long forgotten past now did Ash truly realize
            that he had felt things differently. Other people, he knew, would
            feel the heat running under the Fire Pokémon's fur. But few would
            feel the surging, volcanic power in Arcanine's body just from being
            near – faintly, but still somehow there to be felt.
          </p>
          <p>
            Ash hadn't mentioned it at the time, or later. He simply assumed
            that was what people felt. But now, he was older – and made a
            connection which suddenly seemed obvious.
          </p>
          <p>
            <em>Aura</em>, he thought.{' '}
            <em>
              I can feel his Aura. The gentle amusement, the tiny little part of{' '}
            </em>
            <em>
              <em>his</em>
            </em>
            <em> mind always on the ready for danger.</em>{' '}
            <em>It's just like that Riolu back in Sinnoh... and Lucario.</em>
          </p>
          <p>
            The memory dissolved, and his life played itself out again, perhaps
            a little slower than before.
          </p>
          <p>
            The time he was five, at Cinnabar island on the black sand beaches,
            and a snatch of haunting song floated through the air.
          </p>
          <p>
            <em>I know that music…</em> Ash realized.
            <em>
              {' '}
              But how? What would Lugia have been doing this far north of
              Shamouti? Could it be... because of me? The prophecy said I was
              the Chosen One...
            </em>
          </p>
          <p>
            Eight, playing in the copse of trees at the end of the road that led
            to the sea. It was all one big argument with Gary, more than
            playing... but, as this memory played out like the others, there was
            a glimpse of something in the trees. Barely a flash, but the memory
            stopped. And Ash marvelled. This was not what he had expected to
            find in his childhood.
          </p>
          <p>
            For what was unmistakably <em>Suicune</em> was in the underbrush,
            observing for but a moment.
          </p>
          {/* <div
            style={{
              marginLeft: '-48px',
              marginRight: '-48px',
              borderTop: '1.5px solid black',
              marginTop: '48px',
              paddingTop: '48px',
            }}
          ></div> */}
          {/* <Flex
            style={{
              justifyContent: 'center',
              // marginBottom: '14px',
            }}
          >
            <p
              style={{
                display: 'inline-block',
                marginTop: '96px',
                paddingBottom: '8px',
                paddingLeft: '8px',
                paddingRight: '8px',
                borderBottom: '1px solid #445464',
              }}
            >
              Chapter Actions
            </p>
          </Flex> */}

          <Flex
            style={{
              justifyContent: 'center',
              // marginBottom: '64px',
              marginTop: '96px',
            }}
          >
            <Flex
              style={{
                justifyContent: 'space-between',
              }}
            >
              <Flex style={{ marginRight: '24px', marginLeft: '24px' }}>
                {/* <Suggestion style={{ marginRight: '8px' }} /> */}
                <Star style={{ marginRight: '8px' }} />
                Recommend
              </Flex>
              <Flex
                style={{
                  marginRight: '24px',
                  marginLeft: '24px',
                }}
              >
                <BookmarkEmpty style={{ marginRight: '8px' }} />
                Bookmark
              </Flex>
              <Flex
                style={{
                  marginRight: '24px',
                  marginLeft: '24px',
                }}
              >
                <CheckCircle style={{ marginRight: '8px' }} />
                Mark as read
              </Flex>

              {/* <Flex style={{ marginRight: '48px' }}>
                <MoreHoriz style={{ marginRight: '8px' }} />
                More
              </Flex> */}
            </Flex>
            {/* <Flex>
              <Twitter />
              <Facebook style={{ marginLeft: '8px' }} />
              <ArrowEmailForward style={{ marginLeft: '8px' }} />
            </Flex> */}
            {/* <p>Suggest this chapter as an end of the story</p>
          <p>Mark chapter as mature</p> */}
          </Flex>
          <Flex
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '64px',
              // marginBottom: '64px',
            }}
          >
            <Flex
              style={{
                maxWidth: '400px',
                width: '100%',
                justifyContent: 'center',
                // color: '#445464',
                backgroundColor: '#445464',
                color: 'white',
                border: '2px solid #445464',
                textAlign: 'center',
                // padding: '16px 24px',
                padding: '8px 16px',
                marginLeft: '48px',
                marginRight: '48px',
                // marginTop: '64px',
                // marginBottom: '64px',
                // marginTop: '16px',
              }}
            >
              <EditPencil style={{ marginRight: '8px' }} />
              Write the next chapter
            </Flex>
            <Flex
              style={{
                maxWidth: '400px',
                width: '100%',
                justifyContent: 'center',
                color: '#445464',
                border: '2px solid #445464',
                textAlign: 'center',
                // padding: '16px 24px',
                padding: '8px 16px',
                marginLeft: '48px',
                marginRight: '48px',
                // marginTop: '64px',
                marginTop: '16px',
                // marginBottom: '64px',
              }}
            >
              <OpenBook style={{ marginRight: '8px' }} />
              Keep reading
            </Flex>
            <div
              style={{
                width: '2px',
                backgroundColor: '#445464',
                height: '160px',
              }}
            />
          </Flex>
        </div>
      </PageContentWrap>
      <div
        style={{
          background: '#445464',
          // borderTop: '2px solid #748494',
          // paddingTop: '92px',
        }}
      >
        <h2 style={{ textAlign: 'center', color: 'white', marginTop: '96px' }}>
          Chapter 2
        </h2>

        <Flex
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '24px',
            flexDirection: 'column',
            marginBottom: '64px',
          }}
        >
          <p style={{ textAlign: 'center', color: 'white', marginTop: '24px' }}>
            Choose a fork in the story below to continue reading.
          </p>

          {/* <Flex
            style={{
              justifyContent: 'center',
              color: 'white',
              border: '2px solid white',
              textAlign: 'center',
              // padding: '16px 24px',
              padding: '8px 16px',
              marginLeft: '48px',
              marginRight: '48px',
              marginBottom: '64px',
              marginTop: '24px',
            }}
          >
            <EditPencil style={{ marginRight: '8px' }} />
            Write the next chapter
          </Flex> */}
        </Flex>
        {/* <p style={{ color: 'white', textAlign: 'center' }}>Or</p> */}
        {/* <p style={{ textAlign: 'center', color: 'white', marginTop: '24px' }}>
          Or choose a fork in the story below to continue reading.
        </p> */}
        {/* <PageContentWrap>
          <Flex
            style={{
              color: 'white',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '48px',
            }}
          >
            <h3 style={{ fontSize: '24px' }}>Forks</h3>
            <div>Filters</div>
          </Flex>
        </PageContentWrap> */}

        <Flex
          style={{
            justifyContent: 'center',
            paddingLeft: '48px',
            paddingRight: '48px',
            marginBottom: '64px',
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
                    width: '100%',
                    // margin: '4px',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    padding: '48px',
                    flexBasis: 1,
                    flexShrink: 0,
                    flexGrow: 1,
                    // backgroundColor: '#CCDDEE',
                    backgroundColor: 'white',
                    border: '1px solid #445464',
                    // maxHeight: '580px',
                  }}
                >
                  {/* <Flex> */}
                  {/* <p
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      marginBottom: 0,
                      // lineHeight: 1,
                      opacity: 0.5,
                    }}
                  >
                    By
                  </p> */}

                  {/* <p
                    style={{
                      fontSize: '16px',
                      // fontWeight: 700,
                      lineHeight: '16px',
                      marginBottom: '32px',
                      textTransform: 'uppercase',
                      color: '#777',
                      letterSpacing: 4,
                    }}
                  >
                    Recommended
                  </p> */}

                  {/* <p
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      lineHeight: '16px',
                      marginBottom: '32px',
                    }}
                  >
                    Timothy Bate
                  </p> */}
                  {/* </Flex> */}
                  {/* <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      lineHeight: '16px',
                      marginBottom: '32px',
                      textAlign: 'center',
                    }}
                  >
                    Chapter 2
                  </h3> */}
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      color: '#445464',
                      marginBottom: '16px',
                    }}
                  >
                    {/* {item.label} */}
                    Chapter 2
                  </p>
                  <h3
                    style={{
                      textAlign: 'center',
                      marginBottom: '16px',
                      fontSize: '28px',
                      lineHeight: 1.4,
                      // color: '#445464',
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                    {/* by {item.author} */}
                  </h3>
                  <Flex
                    style={{
                      justifyContent: 'center',
                      marginBottom: '24px',
                      color: '#445464',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '14px',
                        textAlign: 'center',
                      }}
                    >
                      By {item.author}
                    </span>
                    <span
                      style={{
                        margin: '0 8px',
                        fontSize: '14px',
                      }}
                    >
                      |
                    </span>
                    <span
                      style={{
                        fontSize: '14px',
                        textAlign: 'center',
                      }}
                    >
                      {item.label}
                    </span>
                  </Flex>
                  {/* <p style={{ textAlign: 'center' }}>by {item.author}</p> */}
                  <div style={{ flexGrow: 1 }}>
                    <p
                      style={
                        {
                          // flexGrow: 0,
                          // display: '-webkit-box',
                          // WebkitBoxOrient: 'vertical',
                          // WebkitLineClamp: '6',
                          // whiteSpace: 'pre-wrap',
                          // margin: 0,
                        }
                      }
                    >
                      {item.sample.slice(0, 300).trim()}...
                    </p>
                  </div>
                  <Flex
                    style={{
                      justifyContent: 'center',
                      // justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'var(--primary-color)',
                      textAlign: 'center',
                      marginTop: '24px',
                    }}
                  >
                    {/* <Image
                      src="/bold.png"
                      width={220}
                      height={38}
                      style={{ marginBottom: '24px' }}
                    /> */}
                    {/* <p
                      style={{
                        fontSize: '18px',
                        // fontWeight: 700,
                        lineHeight: '16px',
                        // marginBottom: '32px',
                        marginTop: 24,
                      }}
                    >
                      By {item.author}
                    </p> */}
                    <span
                      style={{
                        padding: '14px 16px',
                        border: '2px solid #445464',
                        // textTransform: 'uppercase',
                        // fontWeight: 500,
                        // fontSize: '16px',
                        color: '#445464',
                        lineHeight: '16px',
                        width: '100%',
                        // letterSpacing: '1px',
                        // textDecoration: 'underline',
                      }}
                    >
                      Keep reading
                    </span>
                    {/* <Flex
                      style={{
                        alignItems: 'flex-end',
                        flexDirection: 'column',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '14px' }}>
                        {item.label}
                      </p>
                      <p style={{ margin: 0, fontSize: '14px' }}>
                        By {item.author}
                      </p>
                    </Flex> */}
                  </Flex>

                  {/* <StoryOptionLineOut /> */}
                </Flex>
              );
            })}
        </Flex>
        <PageContentWrap>
          {/* <Flex
            style={{
              paddingTop: '64px',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <p
              style={{
                marginTop: '16px',
                paddingLeft: '124px',
                paddingRight: '124px',
                textDecoration: 'underline',
                // marginBottom: '96px',
              }}
            >
              Browse all 1274 forks
            </p>
          </Flex> */}
          <ForkList
            forks={[...data, ...data, ...data, ...data, ...data, ...data]}
            style={{ marginTop: '64PX', marginBottom: '96px' }}
          />
        </PageContentWrap>
      </div>
    </Page>
  );
};

export default Example;
