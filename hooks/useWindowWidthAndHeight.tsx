import React, { useEffect, useState } from "react";

let initialState: never[];

const useWindowWidthAndHeight = () => {
  const [windowSize, setWidowSize] = useState([]);

  useEffect(() => {
    const changeWindowSize = () => {
      setWidowSize(initialState);
    };

    window.addEventListener("resize", changeWindowSize);

    return () => window.removeEventListener("resize", changeWindowSize);
  }, []);

  return windowSize;
};

export default useWindowWidthAndHeight;
