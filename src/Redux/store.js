import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/index";
const store = configureStore({
  reducer: rootReducer,
});
console.log(store.getState());

export default store;
