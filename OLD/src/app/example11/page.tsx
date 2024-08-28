import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import s from './page.module.css';
import {
  Book,
  BookmarkEmpty,
  CheckCircle,
  EditPencil,
  Label,
  OpenBook,
  OpenInWindow,
  PasteClipboard,
  Star,
} from 'iconoir-react';
import ForkList from '@/components/ForkList';
import FocusBlock from '@/components/FocusBlock';
import Chapters from '@/components/Chapters';
import TransitionPageBlock from '@/components/TransitionPageBlock';
import Button from '@/components/Button';
import ForkListBlock from '@/components/ForksListBlock';
import ForkListTable from '@/components/ForkListTable';
import ButtonText from '@/components/ButtonText';

const Example = () => {
  const data = [
    {
      // title: 'A Hill To Die On',
      title: '17 Reasons Why',
      author: 'Katie Wood',
      // label: 'Recommended', // Ones that have many recommendations relative to aggregete stories average.
      // label: 'New', // Ones that are recent and don't have many recommendation
      // label: 'Undiscovered',  // Ones that don't have many views or recommendation. Time is irrelavent - essentially the default status
      // label: 'Feedback' // For ones with poor view to recommendation ratio
      label: 'Feedback',
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
    <Page>
      <Chapters />
      <TransitionPageBlock style={{ zIndex: 250 }}>
        <FocusBlock>
          <PageContentWrap>
            <div
              style={{
                padding: '160px',
                paddingTop: '160px',
                paddingBottom: '0px',
                backgroundColor: 'white',
                // fontFamily: 'RecoletaDemo
                fontFamily: 'Calluna',
              }}
            >
              <div
                // className={s.titleAnimate}
                style={{ paddingBottom: '24px', marginBottom: '48px' }}
              >
                <p
                  // className={s.titleAnimateLate}
                  style={{
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    color: 'var(--background-color-dark)',
                    marginBottom: '32px',
                    fontFamily: 'var(--heading-font-family)',
                  }}
                >
                  Chapter 2
                </p>
                <h2
                  // className={s.titleAnimate}
                  style={{
                    textAlign: 'center',
                    marginBottom: '32px',
                    fontSize: '48px',
                  }}
                >
                  {data[0].title}
                </h2>
                <Flex
                  // className={s.titleAnimateLate}
                  style={{
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: 'var(--background-color-dark)',
                  }}
                >
                  <span
                    style={{
                      // fontSize: '16px',
                      textAlign: 'center',
                      fontFamily: 'var(--heading-font-family)',
                    }}
                  >
                    By {data[0].author}
                  </span>
                </Flex>
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
              {/* <div
                className={s.titleAnimate}
                style={{ animationDelay: '300ms' }}
              > */}
              <p>
                Ash Ketchum – trainer of Pallet Town, winner of the Orange
                League and increasingly close runner up in fve other regional
                tournaments – was... confused.
              </p>
              <p>
                He was foating in black, empty nothingness. No light, no sound,
                nothing to use as a reference point – and, at frst, he wasn't
                sure how he'd ended up there.
              </p>
              <p>
                When he tried to remember, instead of the most recent moments he
                found something strange happening. His mind went straight back
                to the <em>earliest</em> moments he could remember – fcking past
                at astonishing speed, as though his whole life were fshing
                before his eyes on fast forward.
              </p>
              <p>
                A few things stood out, as though he was slowing down to think
                about them more clearly.
              </p>
              <p>
                The frst time he saw a Pokemon, at barely two years of age, when
                Professor Oak – taking care of him when Ash's mother was
                shopping – was called away suddenly and Ash and Gary were left
                under the supervision of his distinguished old Arcanine, a
                gentle Pokemon, but a terror in battle decades before when
                Samuel Oak was the League Champion.
              </p>
              <p>
                Only reviewing this long forgotten past now did Ash truly
                realize that he had felt things differently. Other people, he
                knew, would feel the heat running under the Flre Pokemon's fur.
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
                The time he was fve, at Cinnabar island on the black sand
                beaches, and a snatch of haunting song foated through the air.
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
                Eight, playing in the copse of 7 trees at the end of the road
                that led to the sea. It was all one big argument with Gary, more
                than playing... but, as this memory played out like the others,
                there was a glimpse of something in the trees. Barely a fash,
                but the memory stopped. And Ash marvelled. This was not what he
                had expected to fnd in his childhood.
              </p>
              <p>
                For what was unmistakably <em>Suicune</em> was in the
                underbrush, observing for but a moment.
              </p>
              {/* </div> */}
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
              <div
                style={{
                  marginTop: '96px',
                  paddingTop: '24px',
                  paddingBottom: '142px',
                }}
              >
                <Flex
                  style={{ justifyContent: 'center', paddingBottom: '48px' }}
                >
                  <Flex
                    style={{
                      justifyContent: 'space-between',
                      fontSize: '18px',
                      fontFamily: 'var(--heading-font-family)',
                    }}
                  >
                    <ButtonText
                      className={s.storyActionButtons}
                      hoverEffectClassName={s.storyActionButtonsWrap}
                    >
                      <Star style={{ marginRight: '8px' }} />
                      Recommend
                    </ButtonText>

                    <ButtonText
                      className={s.storyActionButtons}
                      hoverEffectClassName={s.storyActionButtonsWrap}
                    >
                      <BookmarkEmpty style={{ marginRight: '8px' }} />
                      Bookmark
                    </ButtonText>
                    <ButtonText
                      className={s.storyActionButtons}
                      hoverEffectClassName={s.storyActionButtonsWrap}
                    >
                      <Label style={{ marginRight: '8px' }} />
                      Label
                    </ButtonText>
                    <ButtonText
                      className={s.storyActionButtons}
                      hoverEffectClassName={s.storyActionButtonsWrap}
                    >
                      <OpenInWindow style={{ marginRight: '8px' }} />
                      Share
                    </ButtonText>
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
                    alignItems: 'center',
                  }}
                >
                  <Button
                    href=""
                    style={{ width: '100%', marginRight: '16px' }}
                  >
                    <EditPencil style={{ marginRight: '8px' }} /> Write next
                    chapter
                  </Button>
                  <Button href="" style={{ width: '100%', marginLeft: '16px' }}>
                    <OpenBook style={{ marginRight: '8px' }} /> Read next
                    chapter
                  </Button>
                </Flex>
              </div>
            </div>
          </PageContentWrap>
        </FocusBlock>
      </TransitionPageBlock>
      <TransitionPageBlock>
        <Flex
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '48px',
            borderTop: '2px solid var(--background-color-dark)',
            paddingTop: '128px',
            // position: 'relative',
            // zIndex: 100,
          }}
        >
          <h2 style={{ textAlign: 'center', fontSize: '40px' }}>Chapter 3</h2>
          <p style={{ textAlign: 'center', margin: 0 }}>
            Choose a fork in the story below to continue reading.
          </p>
        </Flex>
        <Flex
          style={{
            justifyContent: 'center',
            marginBottom: '64px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '24px',
            paddingRight: '24px',
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
                    margin: '24px',
                    flexDirection: 'column',
                    padding: '48px 48px',
                    flexBasis: 1,
                    flexShrink: 0,
                    flexGrow: 1,
                    backgroundColor: 'white',
                    border: '2px solid var(--background-color-dark)',
                  }}
                >
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      color: 'var(--background-color-dark)',
                      marginBottom: '16px',
                    }}
                  >
                    Chapter 3
                  </p>
                  <h3
                    style={{
                      textAlign: 'center',
                      marginBottom: '16px',
                      fontSize: '32px',
                      lineHeight: 1.4,
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </h3>
                  <Flex
                    style={{
                      justifyContent: 'center',
                      marginBottom: '24px',
                      color: 'var(--background-color-dark)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '16px',
                        textAlign: 'center',
                      }}
                    >
                      By {item.author}
                    </span>
                    <span
                      style={{
                        margin: '0 8px',
                        fontSize: '16px',
                      }}
                    >
                      |
                    </span>
                    <span
                      style={{
                        fontSize: '16px',
                        textAlign: 'center',
                      }}
                    >
                      {item.label}
                    </span>
                  </Flex>
                  <div style={{ flexGrow: 1 }}>
                    <p style={{ fontSize: '18px', fontFamily: 'Calluna' }}>
                      {item.sample.slice(0, 300).trim()}...
                    </p>
                  </div>
                  <Button href="" style={{ width: '100%', marginTop: '24px' }}>
                    Keep reading
                  </Button>
                </Flex>
              );
            })}
        </Flex>

        <PageContentWrap style={{ marginBottom: '128px' }}>
          <ForkListBlock>
            <ForkList />
            <ForkListTable
              forks={[...data, ...data, ...data, ...data, ...data, ...data]}
            />
            {/* <ForkList
              forks={[...data, ...data, ...data, ...data, ...data, ...data]}
            /> */}
          </ForkListBlock>
        </PageContentWrap>
      </TransitionPageBlock>
    </Page>
  );
};

export default Example;
