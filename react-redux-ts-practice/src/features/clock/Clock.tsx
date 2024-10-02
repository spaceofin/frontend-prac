import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { updateTime, selectClock, resumeClock, pauseClock } from "./clockSlice";

export const Clock = () => {
  const dispatch = useAppDispatch();
  const { time, status } = useAppSelector(selectClock);

  useEffect(() => {
    const interval = setInterval(() => {
      if (status === "running") {
        dispatch(updateTime());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch, status]);

  const handleToggle = () => {
    dispatch(status === "running" ? pauseClock() : resumeClock());
  };
  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center bg-blue-600 bg-opacity-90 py-7">
      <button
        className={`absolute flex justify-center items-center top-8 right-10  w-28 h-20 text-2xl rounded-md font-mono text-white active:scale-95  ${
          status === "running" ? "bg-pink-500" : "bg-green-600"
        }`}
        onClick={handleToggle}>
        {status === "running" ? "PAUSE" : "RESUME"}
      </button>
      <div className="text-4xl font-bold font-mono m-1 text-blue-950">
        CURRENT TIME
      </div>
      <div className="text-3xl font-mono font-bold text-blue-100">{time}</div>
    </div>
  );
};
