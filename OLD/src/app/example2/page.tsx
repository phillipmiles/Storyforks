'use client';

import CardExpander from '@/components/CardExpander';
import ForkCard from '@/components/ForkCard';
import ContentSlider from '@/components/generic/ContentSlider';
import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import { useState } from 'react';

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

  const [index, setIndex] = useState(0);

  const changeIndex = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <Page>
      <div style={{ flexGrow: 1, marginTop: '92px' }}>
        <PageContentWrap>
          <Flex style={{ justifyContent: 'center' }}>
            <h1 style={{ marginBottom: '96px' }}>Start a story</h1>
          </Flex>

          <Flex
            style={{
              // background: 'pink',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                background: 'white',
                // position: 'relative',
                // width: '100%',
                // height: '400px',
                // flexShrink: 0,
                borderRadius: '32px',
                // flexDirection: 'column',
              }}
            >
              <CardExpander currentIndex={index} unmountWhenHidden={false}>
                <ForkCard
                  style={{ maxWidth: '320px', height: '400px' }}
                  onClick={changeIndex}
                >
                  <ForkHeader>
                    <ForkTitle>{data[0].label}</ForkTitle>
                    <Flex>
                      <ForkLabel>{data[0].author}</ForkLabel>
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
                      {data[0].sample}
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
                    <p
                      style={{ margin: 0, alignSelf: 'flex-end' }}
                      onClick={changeIndex}
                    >
                      Keep reading
                    </p>
                  </Flex>
                </ForkCard>
                <div
                  style={{
                    //background: 'green',

                    padding: '64px',
                    // maxWidth: '700px',
                  }}
                >
                  <div
                    style={{
                      borderBottom: '1px solid #CCDDEE',
                      paddingBottom: '24px',
                      marginBottom: '48px',
                    }}
                  >
                    <p style={{ margin: 0 }}>By Katie Bloom</p>
                  </div>

                  <p>
                    Ash Ketchum – trainer of Pallet Town, winner of the Orange
                    League and increasingly close runner up in five other
                    regional tournaments – was... confused.
                  </p>
                  <p>
                    He was floating in black, empty nothingness. No light, no
                    sound, nothing to use as a reference point – and, at first,
                    he wasn't sure how he'd ended up there.
                  </p>
                  <p>
                    When he tried to remember, instead of the most recent
                    moments he found something strange happening. His mind went
                    straight back to the <em>earliest</em> moments he could
                    remember – flicking past at astonishing speed, as though his
                    whole life were flashing before his eyes on fast forward.
                  </p>
                  <p>
                    A few things stood out, as though he was slowing down to
                    think about them more clearly.
                  </p>
                  <p>
                    The first time he saw a Pokémon, at barely two years of age,
                    when Professor Oak – taking care of him when Ash's mother
                    was shopping – was called away suddenly and Ash and Gary
                    were left under the supervision of his distinguished old
                    Arcanine, a gentle Pokémon, but a terror in battle decades
                    before when Samuel Oak was the League Champion.
                  </p>
                  <p>
                    Only reviewing this long forgotten past now did Ash truly
                    realize that he had felt things differently. Other people,
                    he knew, would feel the heat running under the Fire
                    Pokémon's fur. But few would feel the surging, volcanic
                    power in Arcanine's body just from being near – faintly, but
                    still somehow there to be felt.
                  </p>
                  <p>
                    Ash hadn't mentioned it at the time, or later. He simply
                    assumed that was what people felt. But now, he was older –
                    and made a connection which suddenly seemed obvious.
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
                      But how? What would Lugia have been doing this far north
                      of Shamouti? Could it be... because of me? The prophecy
                      said I was the Chosen One...
                    </em>
                  </p>
                  <p>
                    Eight, playing in the copse of trees at the end of the road
                    that led to the sea. It was all one big argument with Gary,
                    more than playing... but, as this memory played out like the
                    others, there was a glimpse of something in the trees.
                    Barely a flash, but the memory stopped. And Ash marvelled.
                    This was not what he had expected to find in his childhood.
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
              </CardExpander>
            </div>
          </Flex>
          <p onClick={changeIndex}>Click</p>
        </PageContentWrap>
      </div>
    </Page>
  );
};

export default Example;
