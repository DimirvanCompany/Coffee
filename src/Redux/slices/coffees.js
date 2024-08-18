import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchDataFromShop = createAsyncThunk(
  "cart/fetchDataFromShopStatus",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch("");
      const data = response.json();
      return data;
    } catch (err) {
      return rejectWithValue("دریافت اطلاعات با خطا مواجه شد");
    }
  }
);
export const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    data: [],
    inPending: true,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataFromShop.fulfilled, (state, action) => {
      // code
    });
    builder.addCase(fetchDataFromShop.pending, (state, action) => {
      // code
    });
    builder.addCase(fetchDataFromShop.rejected, (state, action) => {
      // code
    });
  },
});
export default coffeeSlice.reducer;
