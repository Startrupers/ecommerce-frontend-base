import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import cartSlice from "../store/slices/cartSlice";
import productSlice from "../store/slices/productSlice";
import counterSlice from "../store/slices/counterSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartSlice,
  product: productSlice,
  counter: counterSlice,
});

export default rootReducer;
