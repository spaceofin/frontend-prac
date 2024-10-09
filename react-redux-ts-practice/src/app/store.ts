import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import clockReducer from "../features/clock/clockSlice";
import weatherReducer from "../features/weather/weatherSlice";
import userReducer from "../features/user/userSlice";
import logUserUpdates from "../middleware/logUserUpdates";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
    weather: weatherReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logUserUpdates),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
