import { useEffect, useRef } from "react";
import usePlayer from "../../zustand/usePlayer";
import usePlayerRef from "../../zustand/usePlayerRef";
import getTimeFormat from "../../utils/getTimeFormat";

const Seekbar = () => {
  const { currentTime, setCurrentTime, duration } = usePlayer();
  const { playerRef } = usePlayerRef();
  const rangeRef = useRef(null);
  const handleSeekbar = (e) => {
    if (playerRef) {
      setCurrentTime((e.target.value * duration) / 100);
      playerRef.current.currentTime = (e.target.value * duration) / 100;
    }
  };
  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.value = duration
        ? ((currentTime / duration) * 100).toFixed(3)
        : 0;
    }
  }, [currentTime, duration]);
  return (
    <div className="slider-container">
      <input
        type="range"
        ref={rangeRef}
        min={0}
        max={100}
        step={0.001}
        className="range seekbar"
        onChange={handleSeekbar}
      />
      <div className="flex font-sans font-extralight text-sm antialiased">
        <div>{getTimeFormat(currentTime)}</div>
        <div className=" flex-grow"></div>
        <div>{getTimeFormat(duration)}</div>
      </div>
    </div>
  );
};

export default Seekbar;
