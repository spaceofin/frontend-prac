import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface itemInput {
  name: string;
  price: number;
}

const initialState: itemInput = { name: "", price: 0 };

const itemInputSlice = createSlice({
  name: "itemInput",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changePrice(state, action: PayloadAction<string>) {
      state.price = parseInt(action.payload) || 0;
    },
  },
});

export const { changeName, changePrice } = itemInputSlice.actions;

export const selectItemInput = (state: RootState) => state.itemInput;

export default itemInputSlice.reducer;
