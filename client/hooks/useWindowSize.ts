import { useState, useEffect } from "react";

const useWindowSize = () => {
  // guh
  const [windowWidth, setWindowWidth] = useState<{ width: null | number }>({
    width: null,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
};

export default useWindowSize;
