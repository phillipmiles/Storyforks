'use client';

import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from 'react';

interface Props {
  /** An array of carosel slides */
  children: React.ReactNode;
  /** Specifies which carosel item should be in view */
  currentIndex: number;
  /** Controls whether content should transition with a fade effect */
  applyFadeEffect?: boolean;
  /** Set the resize animation duration in milliseconds */
  animationResizeDuration?: number;
  /** Set the fade animation duration in milliseconds */
  animationFadeDuration?: number;
  /** Set the transiton slide animation duration in milliseconds */
  animationSlideDuration?: number;
  /** Will cause hidden slides to unmount from the DOM. */
  unmountWhenHidden?: boolean;
}

const CardExpander = ({
  children,
  currentIndex = 0,
  applyFadeEffect = true,
  animationResizeDuration = 500,
  animationFadeDuration = 400,
  animationSlideDuration = 400,
  unmountWhenHidden = true,
  ...props
}: Props) => {
  const refs = useRef(Array.from(Array(children.length).keys()));
  const [refNaturalHeights, setRefNaturalHeights] = useState([]);
  const [refNaturalWidths, setRefNaturalWidths] = useState([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, children.length);
  }, [children]);

  useEffect(() => {
    refs.current.map((ref, index) => {
      setRefNaturalHeights((heights) => {
        const newArray = [...heights];
        newArray[index] = refs.current[index].scrollHeight;
        return newArray;
      });
      setRefNaturalWidths((widths) => {
        const newArray = [...widths];
        newArray[index] = refs.current[index].scrollWidth;
        return newArray;
      });
    });
  }, []);

  /* Height of the carosel track */
  const [height, setHeight] = useState('auto');

  const [width, setWidth] = useState('auto');
  /* Flag for if the the carosel is currently animating a transition */
  const [isAnimating, setIsAnimating] = useState(false);
  /* Reference to the previous index for transitioning away from */
  const [previousIndex, setPreviousIndex] = useState(currentIndex);
  /* Holds the timeout that runs the duraction of a transition animation */

  const [transitionToIndex, setTransitionToIndex] = useState(currentIndex);

  const animationEndTimeout = useRef<any>();
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // const setRefDimensions = () => {
    //   refs.current.map((ref, index) => {
    //     console.log(index);
    //     setRefNaturalHeights(refs.current[index].scrollHeight);
    //     setRefNaturalWidths(refs.current[index].scrollWidth);
    //   });
    //   console.log(refNaturalWidths);
    // };

    const endAnimation = () => {
      setPreviousIndex(currentIndex);
      setHeight('auto');
      setWidth('auto');
      setIsAnimating(false);
    };

    const updateCaroselHeight = () => {
      if (!trackRef.current) {
        console.log('ERROR');
        return;
      }

      const currentRefItem = refs.current[currentIndex];
      const previousRefItem = refs.current[previousIndex];

      // const currentCaroselItem =
      //   trackRef.current.children[currentIndex].children[0];
      // const transitionedCaroselItem =
      //   trackRef.current.children[previousIndex].children[0];

      // Request animation frame caused flashes
      // requestAnimationFrame(() => {
      // Set current height ready for animating from
      setHeight(`${previousRefItem.scrollHeight}px`);
      setWidth(`${previousRefItem.scrollWidth}px`);

      requestAnimationFrame(() => {
        // Set new height for animating to
        setHeight(`${currentRefItem.scrollHeight}px`);
        setWidth(`${currentRefItem.scrollWidth}px`);
        animationEndTimeout.current = setTimeout(
          endAnimation,
          animationResizeDuration
        );
      });
      // });
    };

    if (!isAnimating && previousIndex !== currentIndex) {
      clearTimeout(animationEndTimeout.current);
      // setRefDimensions();
      setTransitionToIndex(currentIndex);
      setIsAnimating(true);
      updateCaroselHeight();
    }
  }, [
    isAnimating,
    currentIndex,
    height,
    previousIndex,
    animationResizeDuration,
    animationEndTimeout,
  ]);

  useEffect(() => {
    return () => {
      clearTimeout(animationEndTimeout.current);
    };
  }, []);

  // Checks if number (n) is between values (a) and (b).
  const isBetween = (n: number, a: number, b: number) => {
    return (n - a) * (n - b) <= 0;
  };

  const findItemPosition = (index: number) => {
    return `${(index - transitionToIndex) * 100}%`;
  };

  const getWidth = (index) => {
    console.log(refs.current[index]);
    return `${refs.current[index].scrollWidth}px`;
  };

  return (
    <>
      {/* THis array is used to get natural child sizes */}
      {React.Children.map(children, (item, index) => (
        <div
          ref={(el) => (refs.current[index] = el)}
          style={{
            position: 'absolute',
            overflow: 'hidden',
            left: 0,
            top: 0,
            height: 0,
            // width: '100%',
          }}
        >
          <Fragment>{item}</Fragment>
        </div>
      ))}

      <div
        {...props}
        style={{
          overflow: unmountWhenHidden && !isAnimating ? 'visible' : 'hidden',
          // width: '100%',
          // height,
          width: `${refNaturalWidths[currentIndex]}px`,
          height: `${refNaturalHeights[currentIndex]}px`,
          // width,
          position: 'relative',
          transition: `height ${animationResizeDuration}ms, width ${animationResizeDuration}ms`,
        }}
        ref={trackRef}
      >
        {React.Children.map(children, (item, index) => (
          // <div
          //   style={{
          //     position: 'relative',
          //     // width: '100%',
          //     // transition: `opacity ${animationFadeDuration}ms`,
          //     // opacity: applyFadeEffect && transitionToIndex !== index ? 0 : 1,
          //   }}
          // >
          <div
            style={{
              // Used to stop collapsing margins on children content. It clashes overflow hidden on root div
              // already does this but unMountWhenHidden toggles it on an off so we need this hard kill
              // on the effect here.
              overflow: 'hidden',
              transition: `opacity ${animationFadeDuration}ms`,
              opacity: currentIndex === index ? 1 : 0,
              width: `${refNaturalWidths[index]}px`,
              height: `${refNaturalHeights[index]}px`,

              // position: transitionToIndex === index ? 'static' : 'absolute',
              position: 'absolute',
              // width: '100%',
              // transition: `transform ${animationSlideDuration}ms cubic-bezier(0.21, 0.61, 0.15, 1)`,
              // transform:
              //   !isAnimating && transitionToIndex === index
              //     ? 'translateX(0)'
              //     : `translateX(${findItemPosition(index)})`,
            }}
          >
            {/* {isBetween(index, previousIndex, transitionToIndex) && ( */}
            <Fragment>{item}</Fragment>
            {/* )} */}
          </div>
          // </div>
        ))}
      </div>
    </>
  );
};

export default CardExpander;
