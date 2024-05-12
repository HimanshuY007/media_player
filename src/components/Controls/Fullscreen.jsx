import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import usePlayerRef from "../../zustand/usePlayerRef";
import useKeyPress from "../../hooks/useKeyPress";
import usePlayer from "../../zustand/usePlayer";

const Fullscreen = () => {
  const { displayRef } = usePlayerRef();
  const { isFullscreen, setFullscreen, setMinimize } = usePlayer();
  const handleFullscreen = () => {
    if (displayRef) {
      if (!isFullscreen) {
        if (displayRef.current.requestFullscreen) {
          displayRef.current.requestFullscreen();
        } else if (displayRef.current.webkitRequestFullscreen) {
          //For Safari
          displayRef.current.webkitRequestFullscreen();
        }
        setFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        }
        setMinimize(false);
        setFullscreen(false);
      }
    }
  };
  useKeyPress(70, handleFullscreen);
  return (
    <div className="cursor-pointer" onClick={handleFullscreen}>
      {!isFullscreen ? (
        <BsFullscreen className="w-5 h-5 outline-none hover:scale-110 transition-all" />
      ) : (
        <BsFullscreenExit className="w-5 h-5 outline-none hover:scale-110 transition-all" />
      )}
    </div>
  );
};

export default Fullscreen;
