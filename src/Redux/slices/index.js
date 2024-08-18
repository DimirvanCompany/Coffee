import { combineSlices } from "@reduxjs/toolkit";
import { coffeeSlice } from "./coffees";
import { cartSlice } from "./cart";
const rootReducer = combineSlices(cartSlice, coffeeSlice);
export default rootReducer;
