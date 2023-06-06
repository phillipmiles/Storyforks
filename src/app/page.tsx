import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import Link from 'next/link';
import s from './page.module.css';
import StoryOption from '@/components/StoryOption';
import StoryOptionLineIn from '@/components/StoryOptionLineIn';
import StoryOptionLineOut from '@/components/StoryOptionLineOut';

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
                color: 'var(--primary-color)',
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
                color: 'var(--primary-color)',
              }}
            >
              develop it together
            </p>

            <span
              style={{
                color: '#ecf4fa',
                background: 'var(--primary-color)',
                border: '2px solid var(--primary-color)',
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
                color: 'var(--primary-color)',
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
              backgroundColor: 'var(--primary-color)',
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
                  <StoryOption option={item} isStory />
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
            <p>Show all stories</p>
          </Flex>
        </PageContentWrap>
      </div>
    </Page>
  );
};

export default Example;
