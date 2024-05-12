import { useEffect, useRef, useState } from "react";
import usePlayer from "../../zustand/usePlayer";
import useKeyPress from "../../hooks/useKeyPress";

const getPixel = (thumbRef, value) => {
  const thumb = thumbRef.current.getBoundingClientRect().width;
  let pixel = (value / 100) * thumb;
  return pixel;
};
const SoundSeekbar = () => {
  const { volume, setVolume, isMute, setMute } = usePlayer();
  const [pixel, setPixel] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const rangeRef = useRef();
  const thumbRef = useRef();
  const handleSoundSeekbar = () => {
    if (rangeRef.current) {
      const value = rangeRef.current.value;
      setVolume(value / 100);
      if (value) setMute(false);
    }
  };

  useEffect(() => {
    if (rangeRef.current && thumbRef.current) {
      const pixel = getPixel(thumbRef, volume * 100);
      setPixel(pixel);
      setPercentage(volume * 100);
    }
    if (isMute) {
      setPixel(0);
      setPercentage(0);
    }
  }, [volume, isMute]);

  useKeyPress(38, () => {
    volume < 1 && setVolume(Math.min((volume + 0.1).toFixed(2), 1));
    if (isMute) {
      setMute(false);
    }
  });
  useKeyPress(40, () => {
    volume > 0 && setVolume(Math.max((volume - 0.1).toFixed(2), 0));
  });

  return (
    <div className="ml-3 sound-slider-container">
      <div
        className="sound-progress-bar-cover"
        style={{ width: `${percentage}%` }}
      />
      <div
        className="sound-thumb"
        ref={thumbRef}
        style={{ left: `calc(${percentage}% - ${pixel}px)` }}
      />
      <input
        type="range"
        ref={rangeRef}
        value={volume * 100}
        step={1}
        min={0}
        max={100}
        className="appearance-none sound-seekbar"
        onChange={handleSoundSeekbar}
        // onMouseDown={() => {
        //   setMute(false);
        // }}
      />
    </div>
  );
};

export default SoundSeekbar;
