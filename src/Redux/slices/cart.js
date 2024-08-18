import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: { addedToCart: 0, addedProducts: [], totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      // code
    },
    increaseInCart: (state, action) => {
      // code
    },
    decreaseInCart: (state, action) => {
      // code
    },
    removeFromCart: (state, action) => {
      // code
    },
  },
});

export const { addToCart, increaseInCart, decreaseInCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
