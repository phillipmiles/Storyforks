'use client';
import { getRandomInt } from '@/util/math';
import s from './HeroBackground.module.css';
import { useEffect, useRef, useState } from 'react';

const phrases = [
  'Once upon a time...',
  '...happily ever after.',
  'In the beginning...',
  'A long time ago...',
  'There once was a...',
  '...dark and stormy night.',
  'It was all a dream',
  'Little did he know...',
  'The end.',
];

// const phrases = ['O', 'L', 'I', 'A', 'T', 'S', 'D', 'H', 'E'];
// const phrases = [
//   'Over',
//   'Love',
//   'Beginning',
//   'Analysed',
//   'Take',
//   'Said',
//   'Down',
//   'Hurried',
//   'End',
// ];

const leftInts = [23, 12, 66, 20, 78, 53, 23, 69, 73, 14, 1, 74, 76, 8];
const topInts = [73, 54, 24, 12, 35, 4, 35, 68, 31, 65, 70, 15, 81, 12];
const animationDelay = [-0, -500, -1000, -2000, -3000, -4000, -5000, -6000];
const rotationInts = [-20, -4, 15, -8, 14, 24, -18, 5];
const transformOrigins = [
  '130% -150%',
  '100% -50%',
  '-0% 150%',
  '100% 200%',
  '-100% 200%',
  '50% 250%',
  '80% 200%',
  '-100% -200%',
  '-200% 200%',
];
// const rotationInts = [30, 12, 20, 66, 78, 50, 18, 69, 73, 14, 1, 74, 76, 8];

// const getPhrase = () => {
//   const phraseInt = getRandomInt(phrases.length);
//   const leftInt = getRandomInt(100);
//   const topInt = getRandomInt(100);
//   let rotationInt = getRandomInt(20);
//   let animationInt = getRandomInt(6000);

//   return (
//     <span
//       className={s.phrase}
//       style={{
//         position: 'absolute',
//         top: `${topInt}%`,
//         left: `${leftInt}%`,
//         transform: `rotate(${rotationInt}deg) scale(140%)`,
//         animationDelay: `-${animationInt}ms`,
//       }}
//     >
//       {phrases[phraseInt]}
//     </span>
//   );
// };

const generatePhrase = (index): JSX.Element => {
  // const phraseInt = getRandomInt(phrase.length);
  // const leftInt = getRandomInt(100);
  // const topInt = getRandomInt(100);
  // let rotationInt = getRandomInt(20);
  // let animationInt = getRandomInt(6000);

  // if (getRandomInt(2) === 1) {
  //   rotationInt = rotationInt * -1;
  // }

  return (
    <span
      key={index}
      style={{
        position: 'absolute',
        top: `${topInts[index]}%`,
        left: `${leftInts[index]}%`,
        transform: `rotate(${rotationInts[index]}deg)`,
      }}
    >
      <span
        className={s.phrase}
        style={{
          position: 'absolute',

          transformOrigin: transformOrigins[index],
          // transform: `rotate(${rotationInts[index]}deg) translateX(-50px) scale(140%)`,
          // animationDelay: `${animationDelay[index]}ms`,
        }}
      >
        {phrases[index]}
      </span>
    </span>
  );
};

const HeroBackground = () => {
  const [globalIndex, setGlobalIndex] = useState(1);
  // const [genPhrases, setGenphrases] = useState([]);
  const genPhrases = useRef([generatePhrase(0)]);
  const NUMSHOWN = 9;
  // generatePhrase();

  const getPhrases = () => {
    const phrases: JSX.Element[] = [];

    for (var i = 0; i < NUMSHOWN; i++) {
      phrases.push(generatePhrase(i));
    }

    return <>{phrases}</>;
  };

  useEffect(() => {
    const getPhrase = () => {
      console.log(globalIndex);

      const newGenPhrases = genPhrases.current;
      console.log('splice', newGenPhrases);
      // newGenPhrases.splice(2, 0);
      if (genPhrases.current.length === 8) {
        newGenPhrases.shift();
      }
      genPhrases.current = [...newGenPhrases, generatePhrase(globalIndex)];

      clearInterval(interval);
      setGlobalIndex((prev) => {
        if (prev === NUMSHOWN) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    };

    const interval = setInterval(getPhrase, 750);

    return () => {
      clearInterval(interval);
    };
  }, [globalIndex]);

  // useEffect(() => {
  //   const getPhrase = () => {
  //     const phraseInt = getRandomInt(phrase.length);
  //     const leftInt = getRandomInt(100);
  //     const topInt = getRandomInt(100);
  //     let rotationInt = getRandomInt(20);
  //     let animationInt = getRandomInt(6000);
  //     console.log('phrase');
  //     setHtml(['her']);
  //   };

  //   const interval = setInterval(getPhrase, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // const phrase = getPhrase();

  return (
    <div className={s.container}>
      {genPhrases.current.map((p) => p)}
      {/* <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 10%)',
        }}
      ></div> */}
      {/* {phrase} */}
      {/* {html.map((item) => item)} */}
      {/* {getPhrases()} */}
      {/* <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '0%',
          left: '0%',
          transform: 'rotate(20deg) scale(180%)',
          animationDelay: '-600ms',
        }}
      >
        Once upon a time...
      </span>
      <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '36%',
          left: '15%',
          transform: 'rotate(-15deg) scale(140%)',
          animationDelay: '-4600ms',
        }}
      >
        Little did he know...
      </span>
      <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '6%',
          right: '15%',
          transform: 'rotate(-15deg) scale(140%)',
          animationDelay: '-1600ms',
        }}
      >
        In the beginning...
      </span>
      <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '50%',
          right: '0%',
          transform: 'rotate(-6deg) scale(120%)',
        }}
      >
        ...happily ever after.
      </span>
      <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '80%',
          right: '10%',
          transform: 'rotate(-40deg) scale(90%)',
        }}
      >
        A long time ago...
      </span>

      <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '100%',
          left: '17%',
          transform: 'rotate(-5deg) scale(120%)',
        }}
      >
        It was a dark and stormy night.
      </span>
      <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '11%',
          left: '35%',
          transform: 'rotate(10deg) scale(150%)',
        }}
      >
        There once was a...
      </span>
      <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '70%',
          left: '0%',
          transform: 'rotate(2deg) scale(100%)',
        }}
      >
        It was all a dream
      </span>
      <span
        className={s.phrase}
        style={{
          position: 'absolute',
          top: '80%',
          left: '20%',
          transform: 'rotate(-15deg) scale(110%)',
        }}
      >
        The end.
      </span> */}
    </div>
  );
};

export default HeroBackground;
