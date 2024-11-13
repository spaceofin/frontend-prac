import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import clockReducer from "../features/clock/clockSlice";
import weatherReducer from "../features/weather/weatherSlice";
import userReducer from "../features/user/userSlice";
import { todosReducer, doneReducer } from "../features/todos/todosSlice";
import cartReducer from "../features/cart/cartSlice";
import logUserUpdates from "../middleware/logUserUpdates";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
    weather: weatherReducer,
    user: userReducer,
    todos: todosReducer,
    done: doneReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logUserUpdates),
});

// console.log(store.getState());
// console.log(JSON.stringify(store.getState()));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
