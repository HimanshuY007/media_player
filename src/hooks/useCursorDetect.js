import usePlayer from "../zustand/usePlayer";

const useCursorDetect = () => {
  const { setVisibility, isPlaying } = usePlayer();
  let mouseTimer;
  const handleMouseStop = () => {
    if (isPlaying) setVisibility(false);
  };
  const handleMouseMove = () => {
    clearTimeout(mouseTimer);
    setVisibility(true);
    mouseTimer = setTimeout(handleMouseStop, 3000);
  };
  const handleMouseLeave = () => {
    clearTimeout(mouseTimer);
  };
  return { handleMouseMove, handleMouseLeave };
};

export default useCursorDetect;
