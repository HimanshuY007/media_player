import { useEffect, useRef, useState } from "react";
import usePlayer from "../../zustand/usePlayer";
import usePlayerRef from "../../zustand/usePlayerRef";

const Speed = () => {
  const { speed, setSpeed } = usePlayer();
  const { playerRef } = usePlayerRef();
  const [percentage, setPercentage] = useState(0);
  const rangeRef = useRef(null);
  const containerRef = useRef(null);

  const handleSpeed = (e) => {
    if (playerRef) {
      setSpeed(e.target.value);
      playerRef.current.playbackRate = e.target.value;
    }
  };

  useEffect(() => {
    if (rangeRef.current && containerRef.current) {
      const rangeMin = rangeRef.current.min;
      const rangeMax = rangeRef.current.max;
      const rangeWidth = rangeRef.current.getBoundingClientRect().width;
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const fraction = ((speed - rangeMin) * 100) / (rangeMax - rangeMin);
      console.log(
        "The fraction is",
        fraction,
        rangeWidth,
        containerWidth,
        rangeMin,
        rangeMax,
        speed
      );
      console.log(
        "The percentage is ",
        (rangeWidth / containerWidth) * (100 - fraction)
      );
      setPercentage((rangeWidth / containerWidth) * (100 - fraction));
    }
  }, [speed]);
  return (
    <div
      ref={containerRef}
      className="flex-grow flex justify-end items-center mr-10 relative"
    >
      <div
        className="tooltip tooltip-open absolute mb-3 before:bg-gray-200/10"
        data-tip={speed + "x"}
        style={{ right: `${percentage}%` }}
      ></div>
      <input
        type="range"
        ref={rangeRef}
        className="speed-container w-3/5 outline-none"
        value={speed}
        min={0.5}
        max={4}
        step={0.25}
        onChange={handleSpeed}
      />
    </div>
  );
};

export default Speed;
