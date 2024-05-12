import { useEffect, useRef } from "react";
import usePlayerRef from "../../zustand/usePlayerRef";
import usePlayer from "../../zustand/usePlayer";

const Video = ({ source }) => {
  const videoRef = useRef(null);
  const { isPlaying, setCurrentTime, setDuration, setLoading } = usePlayer();
  const { setPlayerRef } = usePlayerRef();

  const handleUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };
  const handleMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      setPlayerRef(videoRef);
    }
  }, [videoRef, setPlayerRef]);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <video
        ref={videoRef}
        className="w-full h-full object-cover "
        src={source}
        autoPlay
        onLoadedMetadata={handleMetadata}
        onTimeUpdate={handleUpdate}
        onLoadStart={() => {
          setLoading(true);
        }}
        onCanPlay={() => {
          setLoading(false);
        }}
        onSeeking={() => {
          setLoading(true);
        }}
        onPlaying={() => {
          setLoading(false);
        }}
      />
    </>
  );
};

export default Video;
