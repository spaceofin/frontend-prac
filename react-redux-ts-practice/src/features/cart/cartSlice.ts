import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  price: number;
}

const initialState: { searchTerm: string; items: CartItem[] } = {
  searchTerm: "",
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload
      );
      state.items.splice(index, 1);
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addItem, removeItem, changeSearchTerm } = cartSlice.actions;
export const selectCart = createSelector(
  [
    (state: RootState) => state.cart.items,
    (state: RootState) => state.cart.searchTerm,
  ],
  (items, searchTerm) => {
    const filteredItems = items.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPrice = filteredItems.reduce((acc, item) => acc + item.price, 0);
    return { items: filteredItems, searchTerm, totalPrice };
  }
);
export default cartSlice.reducer;
