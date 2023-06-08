import Flex from '@/components/generic/Flex';
import Page from '@/components/generic/Page';
import PageContentWrap from '@/components/generic/PageContentWrap';
import Link from 'next/link';
import s from './page.module.css';
import StoryOption from '@/components/StoryOption';
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

            <Flex
              style={{
                height: '48px',
                width: '100%',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <Button
                href="/"
                className={s.callToAction1}
                textClassName={s.callToAction1Inner}
              >
                {/* <EditPencil /> */}
                Write a story
              </Button>
            </Flex>
            <Flex
              style={{
                height: '48px',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button
                className={s.callToAction2}
                textClassName={s.callToAction1Inner}
                outline
              >
                {/* <Book /> */}
                Read a story
              </Button>
            </Flex>
          </Flex>
        </PageContentWrap>
        <Flex
          className={s.callToActionLineOut}
          style={{
            justifyContent: 'center',
            position: 'relative',
            height: '256px',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--primary-color)',
              width: '2px',
              height: 'inherit',
            }}
          />
          <StoryOptionLineOut />
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
            marginTop: '64px',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '96px',
          }}
        >
          <Flex
            style={{
              position: 'absolute',
              // flexDirection: 'row',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              // width: '50%',
              justifyContent: 'center',
              // justifyContent: 'space-between',
              alignItems: 'center',
              // flexDirection: 'column',
              color: 'var(--primary-color)',
              zIndex: 1,
              borderRadius: '8px 8px 0 0',
              backgroundColor: 'white',
              backgroundColor: 'var(--background-color)',
              // border: '2px solid var(--primary-color)',
              padding: '64px 96px',
            }}
          >
            {/* <span
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '18px',
                margin: 0,

                // padding: '8px 24px',
                // backgroundColor: 'var(--background-color)',

                // borderRadius: '80px',
                minWidth: '220px',
                textAlign: 'center',
              }}
            > */}
            {/* <Filter style={{ marginRight: '8px' }} />  */}
            {/* <span>Select a story to start</span> */}
            <span style={{ fontSize: '24px' }}>
              Try one of these stories...
            </span>
            {/* <span>Show filters</span> */}
            {/* <span style={{ margin: '0 16px' }}>Labels</span>
            <span style={{ margin: '0 16px' }}>Show visited</span>
            <span style={{ margin: '0 16px' }}>Show mature content (MATURE CONTENT GOES INTO ACCOUT SETTINGS)</span> */}
            {/* <span>
              Filter stories <NavArrowRight style={{ marginLeft: '4px' }} />
            </span> */}
            {/* </span> */}
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
                  Show mature content (MATURE CONTENT GOES INTO ACCOUT SETTINGS)
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
                  {/* <StoryOptionLineIn curveDirection={curveDirection} /> */}
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
              color: 'var(--primary-color)',
            }}
          >
            <p
              style={{
                marginTop: '16px',
                paddingLeft: '124px',
                paddingRight: '124px',
                textDecoration: 'underline',
              }}
            >
              Browse all 1274 stories
            </p>
          </Flex>
          {/* <Flex
            style={{
              height: '48px',
              width: '100%',
              justifyContent: 'center',
              marginTop: '64px',
              marginBottom: '24px',
            }}
          >
            <Button
              href="/"
              outline
              className={s.callToAction1}
              textClassName={s.callToAction1Inner}
            >
              Browse all 1246 stories
            </Button>
          </Flex> */}
          <p
            style={{
              // marginTop: '16px',
              paddingLeft: '124px',
              paddingRight: '124px',
              textAlign: 'center',
              color: 'var(--primary-color)',
              marginBottom: '24px',
            }}
          >
            Or
          </p>
          <Flex
            style={{
              height: '48px',
              width: '100%',
              justifyContent: 'center',
              marginBottom: '164px',
            }}
          >
            <Button
              href="/"
              className={s.callToAction1}
              textClassName={s.callToAction1Inner}
            >
              Write a story
            </Button>
          </Flex>
        </PageContentWrap>
      </div>
    </Page>
  );
};

export default Example;
