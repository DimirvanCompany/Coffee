import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchDataFromShop = createAsyncThunk(
  "cart/fetchDataFromShopStatus",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:9000/shop");
      const coffee = response.json();
      return coffee;
    } catch (err) {
      return rejectWithValue("دریافت اطلاعات با خطا مواجه شد");
    }
  }
);
export const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    data: [],
    isPending: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataFromShop.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isPending = false;
    });
    builder.addCase(fetchDataFromShop.pending, (state, action) => {
      state.isPending = true
    });
    builder.addCase(fetchDataFromShop.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isPending = false;
    });
  },
});
export default coffeeSlice.reducer;
