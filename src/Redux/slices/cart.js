import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: { addedToCart: 0, addedProducts: [], totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.addedProducts.push(action.payload);
      state.addedToCart += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const filteredProduct = state.addedProducts.filter(
        (item) => item.id !== action.payload.id
      );
      state.addedToCart -= 1;
      state.totalPrice -= action.payload.price;
      state.addedProducts = filteredProduct;
    },
  },
});

export const { addToCart, increaseInCart, decreaseInCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
