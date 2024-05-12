import { create } from "zustand";
import { media } from "../utils/media";

const useMedia = create((set) => ({
  mediaList: media,
  insertMedia: (newDoc)=> {set((state)=>state.push(newDoc))}
}))

export default useMedia