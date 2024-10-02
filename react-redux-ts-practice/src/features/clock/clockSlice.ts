import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ClockState {
  time: string;
  status: "running" | "paused";
}

const initialState: ClockState = {
  time: new Date().toLocaleTimeString(),
  status: "running",
};

export const getCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    updateTime: (state) => {
      state.time = getCurrentTime();
    },
    resumeClock: (state) => {
      state.status = "running";
    },
    pauseClock: (state) => {
      state.status = "paused";
    },
  },
});

export const { updateTime, resumeClock, pauseClock } = clockSlice.actions;

export const selectClock = (state: RootState) => state.clock;

export default clockSlice.reducer;
