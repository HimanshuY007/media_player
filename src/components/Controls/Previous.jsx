import { BsSkipStartCircle } from "react-icons/bs";
import usePlayer from "../../zustand/usePlayer";
import useKeyPress from "../../hooks/useKeyPress";

const Previous = () => {
  const { mediaIndex, setDefault } = usePlayer();
  const isDisable = mediaIndex === 0;
  const handlePrevious = () => {
    if (!isDisable) {
      // setMediaIndex(mediaIndex - 1);
      // setPlay(true);
      setDefault({
        mediaIndex: mediaIndex - 1,
        isPlaying: true,
        isMute: false,
        volume: 1,
        speed: 1,
      });
    }
  };
  useKeyPress(80, handlePrevious);
  return (
    <div className="cursor-pointer">
      <BsSkipStartCircle
        className={`w-6 h-6 outline-none ${isDisable ? "text-gray-600" : ""} hover:scale-110 transition-all`}
        onClick={handlePrevious}
      />
    </div>
  );
};

export default Previous;
