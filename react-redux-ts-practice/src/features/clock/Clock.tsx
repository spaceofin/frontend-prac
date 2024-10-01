import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { updateTime, selectClock } from "./clockSlice";

export const Clock = () => {
  const dispatch = useAppDispatch();
  const time = useAppSelector(selectClock);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-blue-600 bg-opacity-90 py-7">
      <div className="text-4xl font-bold font-mono m-1 text-blue-950">
        CURRENT TIME
      </div>
      <div className="text-3xl font-mono font-bold text-blue-100">{time}</div>
    </div>
  );
};
