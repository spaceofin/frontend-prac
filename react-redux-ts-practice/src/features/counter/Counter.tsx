import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [delayTime, setDelayTime] = useState("5");

  const incrementValue = Number(incrementAmount) || 0;
  const delayTimeMS = Number(delayTime) * 1000;

  return (
    <div className="flex w-full justify-between bg-purple-400 bg-opacity-30 p-10 rounded-md">
      <div className="flex flex-col justify-end items-center">
        <label className={styles.label}>VALUE</label>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <label className={styles.label}>DELAY TIME</label>
        <input
          className={styles.textbox}
          aria-label="Set async time amount"
          value={delayTime}
          onChange={(e) => setDelayTime(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-start items-end">
        <div className={styles.row}>
          <div className={styles.value}>{count}</div>
          <div className="flex flex-col">
            <button
              className={styles.button}
              style={{ fontSize: "30px", height: "40px", paddingBottom: "5px" }}
              aria-label="Increment value"
              onClick={() => dispatch(increment())}>
              +
            </button>
            <button
              className={styles.button}
              style={{
                fontSize: "44px",
                height: "40px",
                paddingBottom: "10px",
              }}
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}>
              -
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(incrementValue))}>
            Add Amount
          </button>
        </div>
        <div className={styles.row}>
          <button
            className={styles.asyncButton}
            style={
              {
                "--transition-duration": `${delayTime}s`,
              } as React.CSSProperties
            }
            onClick={() =>
              dispatch(
                incrementAsync({ amount: incrementValue, delay: delayTimeMS })
              )
            }>
            Add Async
          </button>
        </div>
        <div className={styles.row}>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}>
            Add If Odd
          </button>
        </div>
      </div>
    </div>
  );
}
