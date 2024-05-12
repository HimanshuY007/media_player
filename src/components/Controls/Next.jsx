import { BsSkipEndCircle } from "react-icons/bs";
import usePlayer from "../../zustand/usePlayer";
import useMedia from "../../zustand/useMedia";
import useKeyPress from "../../hooks/useKeyPress";
const Next = () => {
  const { mediaIndex, setDefault } = usePlayer();
  const { mediaList } = useMedia();
  const isDisable = mediaIndex === mediaList.length - 1;
  const handleNext = () => {
    if (!isDisable) {
      // setMediaIndex(mediaIndex + 1);
      // setPlay(true);
      setDefault({
        mediaIndex: mediaIndex + 1,
        isPlaying: true,
        isMute: false,
        volume: 1,
        speed: 1,
      });
    }
  };
  useKeyPress(78, handleNext);
  return (
    <div className="cursor-pointer">
      <BsSkipEndCircle
        className={`w-6 h-6 outline-none ${isDisable ? "text-gray-600" : ""} hover:scale-110 transition-all`}
        onClick={handleNext}
      />
    </div>
  );
};

export default Next;
