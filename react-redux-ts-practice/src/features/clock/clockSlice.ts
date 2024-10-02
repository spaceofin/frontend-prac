import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface ClockState {
  time: string;
  status: "running" | "paused";
  mode: "day" | "night";
}

const initialState: ClockState = {
  time: new Date().toLocaleTimeString(),
  status: "running",
  mode: "day",
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
    setMode: (state, action: PayloadAction<"day" | "night">) => {
      state.mode = action.payload;
    },
  },
});

export const { updateTime, resumeClock, pauseClock, setMode } =
  clockSlice.actions;

export const selectClock = (state: RootState) => state.clock;

export const updateMode = (): AppThunk => (dispatch) => {
  const currentHour = new Date().getHours();
  console.log("curHour:", currentHour);
  if (currentHour < 6 || currentHour >= 18) {
    dispatch(setMode("night"));
  } else {
    dispatch(setMode("day"));
  }
};

export default clockSlice.reducer;
