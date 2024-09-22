import { createSlice } from "@reduxjs/toolkit";

export const Register = createSlice({
    name: "register",
    initialState : {phone : ''},
    reducers : {
        getDataForm : (state , action) => {
            state.phone = action.payload;
            localStorage.setItem('user' , JSON.stringify(action.payload));
        }
    }
})

export const {getDataForm} = Register.actions;
export default Register.reducer;