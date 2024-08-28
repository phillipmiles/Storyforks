import { Transition } from 'react-transition-group';
import Tether from './Tether';

/** TetherExpander wraps a tethered component with a transition handler allowing for smooth
 * transitions between visible and hidden states.
 *
 * __Further possible dev work:__
 *
 * - Pull out expanding transition styles and turn component into a TetherTransition component allowing
 * for custom transition animations.
 * - Update ```menuOriginX``` and ```menuOriginY``` to handle percentage values and pixel values.
 */

const TetherExpander = ({
  visible,
  tetherComponent,
  sourceAnchorCoord,
  menuOriginX,
  menuOriginY,
  transitionDuration,
  fitInViewport,
  children,
  ...props
}) => {
  const transitionStyles = {
    exited: {
      opacity: 0,
      visibility: 'hidden',
      transform: 'scale(0.8)',
      transition: `visibility ${transitionDuration}ms, opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
    },
    entering: {
      opacity: 0,
      visibility: 'hidden',
      transform: 'scale(0.8)',
      transition: `visibility ${transitionDuration}ms, opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
    },
    entered: {
      opacity: 1,
      visibility: 'visible',
      transform: 'scale(1)',
      transition: `visibility ${transitionDuration}ms, opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
    },
    exiting: {
      opacity: 0,
      visibility: 'hidden',
      transform: 'scale(0.8)',
      transition: `visibility ${transitionDuration}ms, opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
    },
  };

  return (
    <Tether
      shouldUpdatePosition={visible}
      fitInViewport={fitInViewport}
      sourceAnchorCoord={sourceAnchorCoord}
      tetherAnchorCoord={{
        x: menuOriginX === 'right' ? '100%' : '0',
        y: menuOriginY === 'bottom' ? '100%' : '0',
      }}
      tetherComponent={({ flippedX, flippedY }) => (
        <Transition
          in={visible}
          timeout={{
            enter: 0,
            exit: transitionDuration,
          }}
          appear
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div
                // {...props}
                style={{
                  transformOrigin: `${
                    flippedX
                      ? menuOriginX === 'right'
                        ? 'left'
                        : 'right'
                      : menuOriginX
                  } ${
                    flippedY
                      ? menuOriginY === 'bottom'
                        ? 'top'
                        : 'bottom'
                      : menuOriginY
                  }`,
                  ...transitionStyles[state],
                }}
              >
                {tetherComponent}
              </div>
            );
          }}
        </Transition>
      )}
    >
      {children}
    </Tether>
  );
};

// TetherExpander.propTypes = {
//   visible: PropTypes.bool.isRequired,
//   tetherComponent: PropTypes.node.isRequired,
//   children: PropTypes.node.isRequired,
//   sourceAnchorCoord: PropTypes.shape({
//     x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//     y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   }),
//   menuOriginX: PropTypes.oneOf(['left', 'right']),
//   menuOriginY: PropTypes.oneOf(['top', 'bottom']),
//   transitionDuration: PropTypes.number,
//   fitInViewport: PropTypes.bool,
// };

// TetherExpander.defaultProps = {
//   sourceAnchorCoord: { x: '100%', y: '100%' },
//   menuOriginX: 'right',
//   menuOriginY: 'top',
//   transitionDuration: 250,
//   fitInViewport: false,
// };

export default TetherExpander;
