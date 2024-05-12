import { create } from "zustand";

const usePlayerRef = create((set) => {
  return {
    playerRef: null,
    setPlayerRef: (playerRef) => {
      set({ playerRef });
    },
    displayRef:null,
    setDisplayRef:(displayRef)=>{
      set({displayRef});
    }
  };
});

export default usePlayerRef;
