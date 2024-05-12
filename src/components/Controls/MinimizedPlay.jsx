import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import usePlayer from "../../zustand/usePlayer";
const MinimizedPlay = () => {
  const { isPlaying } = usePlayer();
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-none select-none outline-none p-2 rounded-full hover:bg-gray-500/20">
      {isPlaying ? (
        <IoPauseOutline className="w-5 h-5 outline-none" />
      ) : (
        <IoPlayOutline className="w-5 h-5 outline-none" />
      )}
    </div>
  );
};

export default MinimizedPlay;
