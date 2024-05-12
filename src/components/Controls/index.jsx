// import React from 'react'
import usePlayer from "../../zustand/usePlayer";
import Backward from "./Backward";
import Close from "./Close";
import Forward from "./Forward";
import Fullscreen from "./Fullscreen";
import Minimize from "./Minimize";
import MinimizedPlay from "./MinimizedPlay";
import Next from "./Next";
import Play from "./Play";
import Previous from "./Previous";
import Seekbar from "./Seekbar";
import Sound from "./Sound";
import Speed from "./Speed";

const Index = () => {
  const { isMinimize, controlsVisible, isFullscreen } = usePlayer();
  return (
    <>
      <div
        className={`${!controlsVisible ? "invisible" : ""} transition-all z-30`}
      >
        <div
          className={`w-full h-auto absolute bottom-0 flex flex-col justify-center items-center bg-gradient-to-t from-black via-black/20 via-80% to-black/0 ${
            isMinimize ? "hidden" : ""
          }`}
        >
          <div className="w-full px-3 pt-4">
            <Seekbar />
          </div>
          <div className="w-full px-8 py-3 flex justify-center items-center">
            <div className="flex w-full items-center">
              <Sound />
            </div>
            <div className="flex w-full justify-around items-center">
              <Previous />
              <Backward />
              <Play />
              <Forward />
              <Next />
            </div>
            <div className="flex w-full justify-end items-center">
              <Speed />
              <Fullscreen />
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full top-0 p-4 flex justify-end items-center bg-gradient-to-b from-black/80 ${
            isFullscreen ? "hidden" : ""
          }`}
        >
          <Minimize />
          <Close />
        </div>
        {isMinimize ? <MinimizedPlay /> : <></>}
      </div>
    </>
  );
};

export default Index;
