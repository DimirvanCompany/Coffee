import { combineSlices } from "@reduxjs/toolkit";
import { coffeeSlice } from "./coffees";
import { cartSlice } from "./cart";
import { menuSlice } from "./menu";
const rootReducer = combineSlices(cartSlice, coffeeSlice , menuSlice);
export default rootReducer;
