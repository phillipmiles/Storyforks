import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import Link from 'next/link';
import s from './page.module.css';
import StoryOption2 from '@/components/StoryOption2';
import StoryOptionLineIn from '@/components/StoryOptionLineIn';
import StoryOptionLineOut from '@/components/StoryOptionLineOut';
import {
  ArrowRight,
  Book,
  EditPencil,
  Filter,
  NavArrowRight,
} from 'iconoir-react';
import Button from '@/components/Button';
import GenericButton from '@/components/generic/Button';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

const Example = () => {
  const data = [
    {
      title: 'derp',
      author: 'Katie Wood',
      label: 'Recommended',
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
      label: 'Long',
      genres: ['Unknown'],
      sample:
        "Only reviewing this long forgotten past now did Ash truly realize that he had felt things differently. Other people, he knew, would feel the heat running under the Fire Pokémon's fur. But few would feel the surging, volcanic power in Arcanine's body just from being near – faintly, but still somehow there to be felt.",
    },
  ];

  return (
    <Page style={{ backgroundColor: 'white' }}>
      <PageContentWrap>
        <div style={{ backgroundColor: 'white', padding: '96px' }}>
          <div
            style={{
              marginTop: '48px',
              paddingBottom: '24px',
              marginBottom: '48px',
              // padding: '64px 128px',
            }}
          >
            <p style={{ marginBottom: '32px' }}>New story</p>
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
            <p style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
              Story Prompt:
            </p>
            <p>
              Ash Ketchum – trainer of Pallet Town, winner of the Orange League
              and increasingly close runner up in five other regional
              tournaments – was... confused.
            </p>
          </div>

          <p style={{ textAlign: 'center', marginBottom: '48px' }}>Chapter 1</p>
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
      </PageContentWrap>
      <div
        style={
          {
            // backgroundColor: '#445464',
            // borderTop: '2px solid #748494',
            // paddingTop: '92px',
          }
        }
      >
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
            padding: '48px',
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
                    border: '1px solid #445464',
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
                  <Flex style={{}}>
                    <p>By</p>
                    <Image
                      src="/bold.png"
                      width={220}
                      height={38}
                      style={{ marginBottom: '24px' }}
                    />
                  </Flex>
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
                  <p>{item.sample}</p>
                  {/* <StoryOptionLineOut /> */}
                </Flex>
              );
            })}
        </Flex>
        <PageContentWrap>
          <Flex
            style={{
              // paddingTop: '64px',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <p
              style={{
                // marginTop: '16px',
                paddingLeft: '124px',
                paddingRight: '124px',
                textDecoration: 'underline',
                marginBottom: '48px',
              }}
            >
              Browse all 1274 stories
            </p>
          </Flex>
        </PageContentWrap>
      </div>
    </Page>
  );
};

export default Example;
