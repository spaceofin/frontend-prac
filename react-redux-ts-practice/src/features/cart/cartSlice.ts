import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface CartItem {
  name: string;
  value: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.name === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
