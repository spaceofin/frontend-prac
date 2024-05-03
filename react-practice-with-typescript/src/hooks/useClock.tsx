import { useState } from "react";
import { useInterval } from "./useInterval";

export const useClock = () => {
  const [date, setDate] = useState(new Date());
  useInterval(() => {
    setDate(new Date());
    console.log(new Date().toLocaleTimeString());
  });
  return date;
};
