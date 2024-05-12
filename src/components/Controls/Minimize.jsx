import { TbArrowsDiagonalMinimize, TbArrowsDiagonal2 } from "react-icons/tb";
import usePlayer from "../../zustand/usePlayer";
import useKeyPress from "../../hooks/useKeyPress";

const Minimize = () => {
  const { isMinimize, setMinimize } = usePlayer();

  const handleMinimize = () => {
    setMinimize(!isMinimize);
  };
  useKeyPress(87, handleMinimize);
  return (
    <div
      onClick={handleMinimize}
      className=" rounded-full p-2 hover:bg-gray-500/20 transition-all"
    >
      {!isMinimize ? (
        <TbArrowsDiagonalMinimize className="w-5 h-5 stroke-2 cursor-pointer hover:scale-110 transition-all" />
      ) : (
        <TbArrowsDiagonal2 className="w-5 h-5 stroke-2 cursor-pointer hover:scale-110 transition-all" />
      )}
    </div>
  );
};

export default Minimize;
