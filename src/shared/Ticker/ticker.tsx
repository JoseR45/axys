import React, { useEffect, useRef, useState } from "react";
import "./ticker.css"; // Importing the CSS file for styling
import iTickerProps from "./ticker.d"; // Importing the interface for the component props

/**
 * Ticker component that continuously scrolls its children elements.
 *
 * @param {iTickerProps} props - The properties passed to the component, including children and speed.
 * @returns {JSX.Element} The rendered ticker component.
 */
export const Ticker: React.FC<iTickerProps> = ({
  children,
  speed,
  from,
}: iTickerProps): JSX.Element => {
  // Ref to access the ticker div element.
  const tickerRef = useRef<HTMLDivElement>(null);

  // State to store the duration of the animation in seconds.
  const [duration, setDuration] = useState(0);

  // State to store the CSS keyframes for the animation.
  const [animation, setAnimation] = useState(``);

  // useEffect to calculate the duration and animation keyframes on component mount and whenever children or speed change.
  useEffect(() => {
    const calculateDuration = () => {
      if (tickerRef.current) {
        // Calculate the total distance the ticker needs to travel.
        const distance = window.innerWidth + tickerRef.current.offsetWidth;

        // Calculate the animation duration based on the distance and speed.
        const newDuration = distance / speed;
        setDuration(newDuration);

        // Define the CSS keyframes for the ticker animation based on the `from` property.
        const newAnimation = `@keyframes ticker-animation-${from} { 
          0% { 
            transform: translateX(${
              from === "right"
                ? window.innerWidth
                : -tickerRef.current.offsetWidth
            }px); 
          } 
          100% { 
            transform: translateX(${
              from === "right"
                ? -tickerRef.current.offsetWidth
                : window.innerWidth
            }px);
            } 
          }`;

        setAnimation(newAnimation); // Set the new animation keyframes in state.
      }
    };

    calculateDuration(); // Initial calculation of duration and animation.

    // Event listener to recalculate duration on window resize.
    window.addEventListener("resize", calculateDuration);

    // Cleanup event listener on component unmount.
    return () => window.removeEventListener("resize", calculateDuration);
  }, [children, speed, from]); // Re-run the effect when children, speed, or from change.

  // Wrap each child in a div with class 'ticker-item' for styling.
  const modifiedChildren = React.Children.map(children, (child) => (
    <div className="ticker-item">{child}</div>
  ));

  return (
    <div>
      <style>{animation}</style> {/* Inject the animation CSS dynamically */}
      <div id="ticker-container">
        {/* Container to hold the ticker */}
        <div
          id="ticker"
          ref={tickerRef}
          style={{
            animation: `ticker-animation-${from} ${duration}s linear infinite`, // Apply the animation to the ticker element.
          }}
        >
          {modifiedChildren} {/* Render the modified children elements */}
        </div>
      </div>
    </div>
  );
};
