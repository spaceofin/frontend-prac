import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface CartItem {
  name: string;
  value: number;
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
// export const selectCart = (state: RootState) => state.cart;
export const selectCart = ({ cart: { searchTerm, items } }: RootState) => {
  const filteredItems = items.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalValue = filteredItems.reduce((acc, item) => acc + item.value, 0);
  return { items: filteredItems, searchTerm, totalValue };
};

export default cartSlice.reducer;
