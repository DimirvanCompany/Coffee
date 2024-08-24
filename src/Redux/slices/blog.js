import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchDataBlog = createAsyncThunk(
  "blog/fetchDataBlogStatus",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:9000/blog");
      const blogItems = await response.json();
      return blogItems;
    } catch (err) {
      return rejectWithValue("خطا در دریافت اطلاعات"); // کار نمیکند
    }
  }
);
export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataBlog.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default blogSlice.reducer;
