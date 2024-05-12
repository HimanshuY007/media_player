import Loader from "./components/Loader";
import useMedia from "./zustand/useMedia";
import usePlayer from "./zustand/usePlayer";
import Controls from "./components/Controls/index";
import usePlayerRef from "./zustand/usePlayerRef";
import { useEffect, useRef } from "react";
import useCursorDetect from "./hooks/useCursorDetect";
import { audioFormats, videoFormats } from "./utils/formats";
import Media from "./components/Media";
import { Toaster } from "react-hot-toast";

function App() {
  const { mediaList } = useMedia();
  const { mediaIndex, isMinimize, isLoading } = usePlayer();
  const displayRef = useRef();
  const { setDisplayRef } = usePlayerRef();
  const { handleMouseMove, handleMouseLeave } = useCursorDetect();
  const source = mediaList[mediaIndex]["source"];
  const extension = source.split(".").slice(-1)[0];
  const format = videoFormats.includes(extension)
    ? "video"
    : audioFormats.includes(extension)
    ? "audio"
    : null;
  useEffect(() => {
    if (displayRef.current) {
      setDisplayRef(displayRef);
    }
  }, [displayRef, setDisplayRef]);
  return (
    <>
      <Toaster />
      <div className="w-screen h-screen flex flex-col justify-between items-center ">
        <div className="flex justify-center items-center py-8">
          <img
            src="/assignment.png"
            alt="Title"
            className="w-1/2 select-none"
            draggable={false}
          />
        </div>
        <div
          className={`w-1/2 h-3/5 flex justify-center items-center ${
            isMinimize ? "minimize-player" : ""
          } `}
        >
          <div
            ref={displayRef}
            className="w-full h-full relative rounded-lg overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {isLoading ? <Loader /> : <></>}
            <Media source={source} format={format} />
            <Controls />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/submission.png"
            alt="Himanshu Yadav"
            className="w-1/2 py-7 opacity-30"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}

export default App;
