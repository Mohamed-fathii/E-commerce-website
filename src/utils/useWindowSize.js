import { useState, useEffect } from "react";

function useWindowSize() {
  // Initialize state with the current window size
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handler immediately to update state with initial window size
    handleResize();

    // Cleanup: Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return windowSize;
}

export default useWindowSize;
