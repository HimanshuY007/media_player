import { useRef, useEffect } from "react";
import usePlayer from "../zustand/usePlayer";
import usePlayerRef from "../zustand/usePlayerRef";
import Audio from "./Audio";
import Video from "./Video";
import Error from "./Error";

const Media = ({ source, format }) => {
  const mediaRef = useRef(null);
  const {
    isPlaying,
    setPlay,
    setCurrentTime,
    setDuration,
  } = usePlayer();
  const { setPlayerRef } = usePlayerRef();

  const handlePlay = () => {
    if (mediaRef.current) {
      setPlay(!isPlaying);
    }
  };
  const handleUpdate = () => {
    setCurrentTime(mediaRef.current.currentTime);
  };
  const handleMetadata = () => {
    if (mediaRef.current) {
      setDuration(mediaRef.current.duration);
    }
  };
  useEffect(() => {
    if (mediaRef.current) {
      setPlayerRef(mediaRef);
    }
  }, [mediaRef, setPlayerRef]);
  useEffect(() => {
    if (mediaRef.current) {
      isPlaying ? mediaRef.current.play() : mediaRef.current.pause();
    }
  }, [isPlaying]);
  return (
    <>
      <div onClick={handlePlay}>
        {format === "video" ? (
          <Video
            source={source}
            videoRef={mediaRef}
            handleMetadata={handleMetadata}
            handleUpdate={handleUpdate}
          />
        ) : format === "audio" ? (
          <Audio
            source={source}
            audioRef={mediaRef}
            handleMetadata={handleMetadata}
            handleUpdate={handleUpdate}
          />
        ) : (
          <Error />
        )}
      </div>
    </>
  );
};

export default Media;
