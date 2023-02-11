import { animated, useSpring } from "react-spring";
import HerroTitle from "./HerroTitle";
import HireButton from "./HireButton";
import Social from "./Social";

// mouse over animation with Spring
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function Herro() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className="flex relative h-77vh items-center justify-center"
      id="herro-section"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="container px-3 z-10">
        {/*-- Herro section title --*/}
        <HerroTitle />
        <div className="mt-3 md:mt-5">
          {/*-- social component --*/}
          <ul className="flex justify-center md:justify-start">
            <Social />
          </ul>
        </div>

        {/*-- hire button --*/}
        <HireButton />
      </div>
      <animated.h3
        style={{ transform: props.xy.interpolate(trans1) }}
        className="bg-text-landing left-auto top-20 text-gray-100  dark:text-gray-700 dark:text-opacity-40 text-9xl"
      >
        Fabian
      </animated.h3>
      <animated.h3
        style={{ transform: props.xy.interpolate(trans1) }}
        className="bg-text-landing right-10 md:bottom-40 text-gray-100 text-9xl dark:text-gray-700 dark:text-opacity-40"
        data-depth="0.07"
      >
        Santos
      </animated.h3>
    </div>
  );
}
