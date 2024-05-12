import { TbRewindForward10 } from "react-icons/tb";
import usePlayerRef from "../../zustand/usePlayerRef";
import useKeyPress from "../../hooks/useKeyPress";

const Forward = () => {
  const { playerRef } = usePlayerRef();
  const handleForward = () => {
    if (playerRef) {
      playerRef.current.currentTime += 10;
    }
  };
  useKeyPress(39, handleForward);
  return (
    <div className="cursor-pointer">
      <TbRewindForward10
        className="w-6 h-6 outline-none hover:scale-110 transition-all"
        onClick={handleForward}
      />
    </div>
  );
};

export default Forward;
