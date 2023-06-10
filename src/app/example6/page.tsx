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
import HeroBackground from '@/components/HeroBackground';

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
      <div style={{ flexGrow: 1 }}>
        <Flex
          style={{
            justifyContent: 'stretch',
            alignItems: 'stretch',
            position: 'relative',
            minHeight: '100vh',

            // background: 'blue',
          }}
        >
          {/* <div
            style={{
              position: 'absolute',
              width: '128px',
              height: '128px',
              left: '32px',
              top: '32px',
            }}
          >
            <svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 9 96
           a 24 24 0 0 1 24 -24
         "
                stroke="black"
                // fill="green"
                stroke-width="2"
                fill-opacity="0"
              />
            </svg>
          </div> */}
          <Flex
            style={{
              margin: '32px',
              width: '100%',
              // height: '100%',
              // backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              // border: '3px solid var(--primary-color)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '32px',
                height: '32px',
                borderRadius: '0 0 32px 0',
                borderBottom: '2px solid #4B6095',
                borderRight: '2px solid #4B6095',
                left: '8px',
                top: '8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '32px',
                height: '32px',
                borderRadius: '0 0 0 32px',
                borderBottom: '2px solid #4B6095',
                borderLeft: '2px solid #4B6095',
                right: '8px',
                top: '8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '32px',
                height: '32px',
                borderRadius: '32px 0 0 0',
                borderTop: '2px solid #4B6095',
                borderLeft: '2px solid #4B6095',
                right: '8px',
                bottom: '8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '32px',
                height: '32px',
                borderRadius: '0 32px 0 0',
                borderTop: '2px solid #4B6095',
                borderRight: '2px solid #4B6095',
                left: '8px',
                bottom: '8px',
              }}
            />
            {/* Borders */}

            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '40px',
                right: '40px',
                backgroundColor: 'var(--primary-color)',
                height: '2px',
              }}
            />

            {/*  */}
            <div
              style={{
                position: 'absolute',
                bottom: '8px',
                left: '40px',
                right: '40px',
                backgroundColor: 'var(--primary-color)',
                height: '2px',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '8px',
                bottom: '40px',
                backgroundColor: 'var(--primary-color)',
                width: '2px',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '40px',
                right: '8px',
                bottom: '40px',
                backgroundColor: 'var(--primary-color)',
                width: '2px',
              }}
            />

            {/* <HeroBackground /> */}
            {/* <PageContentWrap> */}
            <Flex style={{ justifyContent: 'center' }}>
              <Flex
                style={{
                  width: '40%',
                  // justifyContent: 'center',
                  // marginTop: '160px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '8%',
                  // marginRight: '8%',
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
              <Flex
                style={{
                  width: '50%',
                  padding: '72px',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <StoryOption
                  option={data[0]}
                  isStory
                  style={{ maxHeight: 'none' }}
                />
                {/* <StoryOptionLineOut /> */}
              </Flex>
            </Flex>
            {/* </PageContentWrap> */}
          </Flex>
        </Flex>

        <Flex
          className={s.callToActionLineOut}
          style={{
            // marginTop: '-114px',
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
        <PageContentWrap>
          <p>
            Start a story, read a story or continue writing someone elses story
          </p>

          <Flex
            style={{ justifyContent: 'space-between', textAlign: 'center' }}
          >
            <span>
              <strong>Chapter 1</strong>
            </span>
            <span>
              <strong>Chapter 2</strong>
            </span>
            <span>
              <strong>Chapter 3</strong>
            </span>
            <span>
              <strong>Chapter 4</strong>
            </span>
          </Flex>
          <Flex
            style={{
              justifyContent: 'stretch',
              alignItems: 'center',
              flexDirection: 'row',
              fontSize: '12px',
            }}
          >
            <Flex
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexGrow: 1,
                flexShrink: 0,
                width: '10%',
              }}
            >
              <Flex
                style={{
                  width: '100%',
                  alignItems: 'stretch',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    width: '80%',
                    borderRadius: '8px',
                    padding: '24px',
                    border: '1px solid var(--primary-color)',
                    margin: '16px 0',
                  }}
                >
                  <span>By Kim</span>
                </div>
                <Flex
                  style={{
                    flexDirection: 'column',
                    width: '20%',
                  }}
                >
                  <div style={{ flexGrow: 1 }} />
                  <div
                    style={{
                      borderTop: '1px solid var(--primary-color)',
                      flexGrow: 1,
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
            <Flex
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexGrow: 1,
                flexShrink: 0,
                width: '10%',
              }}
            >
              <Flex
                style={{
                  width: '100%',
                  alignItems: 'stretch',
                }}
              >
                <Flex
                  style={{
                    flexDirection: 'column',
                    width: '20%',
                  }}
                >
                  <div style={{ flexGrow: 1 }} />
                  <div
                    style={{
                      borderLeft: '1px solid var(--primary-color)',
                      borderTop: '1px solid var(--primary-color)',
                      borderRadius: '8px 0 0 0',
                      flexGrow: 1,
                    }}
                  />
                </Flex>
                <div
                  style={{
                    backgroundColor: 'white',
                    width: '80%',
                    borderRadius: '8px',
                    padding: '24px',
                    border: '1px solid var(--primary-color)',
                    margin: '16px 0',
                  }}
                >
                  <span>By Helmut</span>
                </div>
                <Flex
                  style={{
                    flexDirection: 'column',
                    width: '20%',
                  }}
                >
                  <div style={{ flexGrow: 1 }} />
                  <div
                    style={{
                      borderTop: '1px solid var(--primary-color)',
                      flexGrow: 1,
                    }}
                  />
                </Flex>
              </Flex>
              <Flex
                style={{
                  width: '100%',
                  alignItems: 'stretch',
                }}
              >
                <Flex
                  style={{
                    flexDirection: 'column',
                    width: '20%',
                  }}
                >
                  <div
                    style={{
                      borderLeft: '1px solid var(--primary-color)',
                      flexGrow: 1,
                    }}
                  />
                  <div
                    style={{
                      borderLeft: '1px solid var(--primary-color)',
                      borderTop: '1px solid var(--primary-color)',
                      flexGrow: 1,
                    }}
                  />
                </Flex>
                <div
                  style={{
                    backgroundColor: 'white',
                    width: '80%',
                    borderRadius: '8px',
                    padding: '24px',
                    border: '1px solid var(--primary-color)',
                    margin: '16px 0',
                  }}
                >
                  <span>By Kahn</span>
                </div>
                <Flex
                  style={{
                    flexDirection: 'column',
                    width: '20%',
                  }}
                >
                  <div style={{ flexGrow: 1 }} />
                  <div
                    style={{
                      borderTop: '1px solid var(--primary-color)',
                      flexGrow: 1,
                    }}
                  />
                </Flex>
              </Flex>
              <Flex
                style={{
                  width: '100%',
                  alignItems: 'stretch',
                }}
              >
                <Flex
                  style={{
                    flexDirection: 'column',
                    width: '20%',
                  }}
                >
                  <div
                    style={{
                      borderLeft: '1px solid var(--primary-color)',
                      borderBottom: '1px solid var(--primary-color)',
                      borderRadius: '0 0 0 8px',
                      flexGrow: 1,
                    }}
                  />
                  <div style={{ flexGrow: 1 }} />
                </Flex>
                <div
                  style={{
                    backgroundColor: 'white',
                    width: '80%',
                    borderRadius: '8px',
                    padding: '24px',
                    border: '1px solid var(--primary-color)',
                    margin: '16px 0',
                  }}
                >
                  <span>By Josie</span>
                </div>
                <Flex
                  style={{
                    flexDirection: 'column',
                    width: '20%',
                  }}
                >
                  <div style={{ flexGrow: 1 }} />
                  <div
                    style={{
                      borderTop: '1px solid var(--primary-color)',
                      flexGrow: 1,
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>

            <Flex
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexGrow: 1,
                width: '10%',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  height: '50px',
                  borderRadius: '4px',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  height: '50px',
                  borderRadius: '4px',
                }}
              ></div>
            </Flex>
            <Flex
              style={{
                flexDirection: 'row',
                flexGrow: 1,
                width: '10%',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--primary-color)',
                  width: '100%',
                  height: '1px',
                }}
              />
              <div
                style={{
                  border: '1px solid var(--primary-blue',
                  width: '100%',
                }}
              />
            </Flex>
            <Flex
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexGrow: 1,
                width: '10%',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  height: '50px',
                  borderRadius: '4px',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  height: '50px',
                  borderRadius: '4px',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  height: '50px',
                  borderRadius: '4px',
                }}
              ></div>
            </Flex>
          </Flex>
        </PageContentWrap>
        <Flex
          style={{
            marginTop: '48px',
            marginBottom: '80px',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Flex
            style={{
              color: 'var(--primary-color)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Filter style={{ marginRight: '8px' }} /> */}

            <span style={{ fontSize: '24px' }}>
              Try one of these stories...
            </span>
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
          <p
            style={{
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
