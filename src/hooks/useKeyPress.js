import { useEffect } from "react";

const useKeyPress = (targetCode, action) => {
  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.keyCode === targetCode) {
        action();
      }
    };
    document.addEventListener("keydown", onKeyPress);
    // Adding additional eventlistener in case of any reference passed

    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [targetCode, action]);
};

export default useKeyPress;
