import { combineSlices } from "@reduxjs/toolkit";
import { coffeeSlice } from "./coffees";
import { cartSlice } from "./cart";
import { menuSlice } from "./menu";
import { blogSlice } from "./blog";
const rootReducer = combineSlices(cartSlice, coffeeSlice, menuSlice, blogSlice);
export default rootReducer;
