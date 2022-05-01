import React, { useEffect, useState } from "react";

const useWindowWidthAndHeight = () => {
  const [windowSize, setWidowSize] = useState([]);

  useEffect(() => {
    const changeWindowSize = () => {
      setWidowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", changeWindowSize);

    return () => window.removeEventListener("resize", changeWindowSize);
  }, []);

  return windowSize;
};

export default useWindowWidthAndHeight;
