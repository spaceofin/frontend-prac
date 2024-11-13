import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const reset = createAction("app/reset");

// console.log(reset.toString());

const initialState: string[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

const doneSlice = createSlice({
  name: "done",
  initialState,
  reducers: {
    addDone: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export const { addDone } = doneSlice.actions;
export const selectTodo = (state: RootState) => state.todos;
export const selectDone = (state: RootState) => state.done;

export const todosReducer = todosSlice.reducer;
export const doneReducer = doneSlice.reducer;
