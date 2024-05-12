import { TbRewindBackward10 } from "react-icons/tb";
import usePlayerRef from "../../zustand/usePlayerRef";
import useKeyPress from "../../hooks/useKeyPress";

const Backward = () => {
  const { playerRef } = usePlayerRef();
  const handleBackward = () => {
    if (playerRef) {
      playerRef.current.currentTime -= 10;
    }
  };
  useKeyPress(37, handleBackward);
  return (
    <div className="cursor-pointer">
      <TbRewindBackward10
        className="w-6 h-6 outline-none hover:scale-110 transition-all"
        onClick={handleBackward}
      />
    </div>
  );
};

export default Backward;
