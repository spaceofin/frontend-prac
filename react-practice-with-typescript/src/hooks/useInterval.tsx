import { useEffect } from "react";

export const useInterval = (callback: () => void) => {
  useEffect(() => {
    // console.log("useEffect called.");
    const id = setInterval(callback, 1000);
    return () => clearInterval(id);
  }, [callback]);
};
