// import React from 'react'
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import usePlayerRef from "../../zustand/usePlayerRef";
import usePlayer from "../../zustand/usePlayer";
import useKeyPress from "../../hooks/useKeyPress";
import { useEffect } from "react";

const Play = () => {
  const { playerRef } = usePlayerRef();
  const {
    isPlaying,
    setPlay,
    currentTime,
    duration,
    setCurrentTime,
    setVisibility,
  } = usePlayer();

  const handlePlay = () => {
    if (playerRef) {
      setPlay(!isPlaying);
      setVisibility(isPlaying);
    }
  };
  useEffect(() => {
    if (currentTime.toFixed(3) === duration.toFixed(3)) {
      if (isPlaying) {
        setPlay(false);
        setCurrentTime(0);
      }
    }
  }, [currentTime, setCurrentTime, setPlay, isPlaying, duration]);
  useKeyPress(32, handlePlay);

  return (
    <div className="cursor-pointer" onClick={handlePlay}>
      {isPlaying ? (
        <FaRegCirclePause className="w-8 h-8 outline-none hover:scale-110 transition-all" />
      ) : (
        <FaRegCirclePlay className="w-8 h-8 outline-none hover:scale-110 transition-all" />
      )}
    </div>
  );
};

export default Play;
