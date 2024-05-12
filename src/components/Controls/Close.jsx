import { IoMdClose } from "react-icons/io";
import usePlayer from "../../zustand/usePlayer";
import usePlayerRef from "../../zustand/usePlayerRef";
import { defaultStates } from "../../utils/defaultGlobalStates";
import toast from "react-hot-toast";

const Close = () => {
  const { isMinimize, setDefault } = usePlayer();
  const { displayRef } = usePlayerRef();
  const handleClose = () => {
    if (displayRef) {
      setDefault(defaultStates);
      // setClose(true);
      toast.error("Please refresh the page! As player has been removed");
      displayRef.current.style.display = "none";
    }
  };
  return (
    <div
      className={`cursor-pointer m-1 p-2 rounded-full hover:bg-gray-500/20 transition-all ${
        !isMinimize ? "hidden" : ""
      }`}
      onClick={handleClose}
    >
      <IoMdClose className="w-5 h-5 stroke-2 outline-none hover:scale-110 transition-all" />
    </div>
  );
};

export default Close;
