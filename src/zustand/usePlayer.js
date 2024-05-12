import { create } from "zustand";

const usePlayer = create((set) => ({
  mediaIndex: 0,
  setMediaIndex: (mediaIndex) => {
    set({ mediaIndex });
  },
  isLoading: true,
  setLoading: (isLoading) => {
    set({ isLoading });
  },
  isPlaying: false,
  setPlay: (isPlaying) => {
    set({ isPlaying });
  },
  isFullscreen: false,
  setFullscreen: (isFullscreen) => {
    set({ isFullscreen });
  },
  volume: 0.5,
  setVolume: (volume) => {
    set({ volume });
  },
  isMute: false,
  setMute: (isMute) => {
    set({ isMute });
  },
  speed: 1,
  setSpeed: (speed) => {
    set({ speed });
  },
  currentTime: 0,
  setCurrentTime: (currentTime) => {
    set({ currentTime });
  },
  duration: 0,
  setDuration: (duration) => {
    set({ duration });
  },
  isMinimize: false,
  setMinimize: (isMinimize) => {
    set({ isMinimize });
  },
  // isClose: false,
  // setClose: (isClose) => {
  //   set({ isClose });
  // },
  controlsVisible: true,
  setVisibility: (controlsVisible) => {
    set({ controlsVisible });
  },
  setDefault: (obj) => {
    set({ ...obj });
  },
}));

export default usePlayer;
