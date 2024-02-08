import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import cartSlice from '../store/slices/cartSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartSlice
});

export default rootReducer;
