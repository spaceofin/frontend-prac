import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ClockState {
  time: string;
}
const initialState: ClockState = {
  time: new Date().toLocaleTimeString(),
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
  },
});

export const { updateTime } = clockSlice.actions;

export const selectClock = (state: RootState) => state.clock.time;

export default clockSlice.reducer;
