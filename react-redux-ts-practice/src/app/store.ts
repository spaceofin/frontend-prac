import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import clockReducer from "../features/clock/clockSlice";
import weatherReducer from "../features/weather/weatherSlice";
import userReducer from "../features/user/userSlice";
import { todosReducer, doneReducer } from "../features/todos/todosSlice";
import cartReducer from "../features/cart/cartSlice";
import itemInputReducer from "../features/cart/itemInputSlice";
import logUserUpdates from "../middleware/logUserUpdates";
// import sectionsReducer from "../features/library/sectionsSlice";
// import booksReducer from "../features/library/booksSlice";
// import commentsReducer from "../features/library/commentsSlice";
import { sectionsApi } from "../features/library/sectionsApi";
import { booksApi } from "../features/library/booksApi";
import { commentsApi } from "../features/library/commentsApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
    weather: weatherReducer,
    user: userReducer,
    todos: todosReducer,
    done: doneReducer,
    cart: cartReducer,
    itemInput: itemInputReducer,
    // sections: sectionsReducer,
    // books: booksReducer,
    // comments: commentsReducer,
    sections: sectionsApi.reducer,
    books: booksApi.reducer,
    comments: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logUserUpdates)
      .concat(sectionsApi.middleware)
      .concat(booksApi.middleware)
      .concat(commentsApi.middleware),
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
