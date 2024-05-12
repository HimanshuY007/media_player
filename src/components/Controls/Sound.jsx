import { FaVolumeUp, FaVolumeDown, FaVolumeMute } from "react-icons/fa";
import SoundSeekbar from "./SoundSeekbar";
import usePlayer from "../../zustand/usePlayer";
import usePlayerRef from "../../zustand/usePlayerRef";
import useKeyPress from "../../hooks/useKeyPress";
import { useEffect } from "react";

const Sound = () => {
  const { volume, isMute, setMute } = usePlayer();
  const { playerRef } = usePlayerRef();
  const handleMute = () => {
    if (playerRef) {
      playerRef.current.muted = !isMute;
      setMute(!isMute);
    }
  };
  useKeyPress(77, handleMute);
  useEffect(() => {
    if (volume === 0) {
      setMute(true);
    }
    if (playerRef) {
      if (!isMute) {
        playerRef.current.volume = volume;
      } else playerRef.current.volume = 0;
    }
  }, [volume, setMute, isMute, playerRef]);
  return (
    <>
      <div className="cursor-pointer" onClick={handleMute}>
        {!isMute ? (
          volume >= 0.5 ? (
            <FaVolumeUp className="w-5 h-5 outline-none hover:scale-110 transition-all" />
          ) : (
            <FaVolumeDown className="w-5 h-5 outline-none hover:scale-110 transition-all" />
          )
        ) : (
          <FaVolumeMute className="w-5 h-5 outline-none hover:scale-110 transition-all" />
        )}
      </div>
      <SoundSeekbar />
    </>
  );
};

export default Sound;
