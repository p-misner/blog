"use client";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 100,
    height: 100,
  });

  useEffect(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
