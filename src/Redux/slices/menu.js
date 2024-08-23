import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchDataMenu = createAsyncThunk("menu/fetchDataMenuStatus" , 
    async (arg, { rejectWithValue }) => {
    try{
        const response = await fetch('http://localhost:9000/menuItems')
    const menuItems = await response.json()
    return menuItems
    }catch(err){
        return rejectWithValue("خطا در دریافت اطلاعات") // کار نمیکند
    }
})
export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        data: [],
        total : 0,
        productCount : 0
    },
    reducers: {
        addToMenuCart: (state, action) => {
            state.total += action.payload.price
            state.productCount += 1
        },
    },

    extraReducers : (builder) => {
        builder.addCase(fetchDataMenu.fulfilled , (state , action) => {
            state.data = action.payload
        })
    }
        
})
export const {addToMenuCart} = menuSlice.actions
export default menuSlice.reducer