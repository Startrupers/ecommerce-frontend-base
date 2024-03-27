import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

const initialState = {
  products: [] as CartProduct[],
  shippingAddress: {} as { fullName: string; address: string; city: string; postalCode: string; country: string },
};

const cartSlice = createSlice({
  name: "cart",
  initialState, 
  reducers: {
    add: (state, action: PayloadAction<CartProduct>) => {
      state.products.push(action.payload); 
    },

    remove: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },

    saveShippingAddress: (state, action: PayloadAction<{ fullName: string; address: string; city: string; postalCode: string; country: string }>) => {
      state.shippingAddress = action.payload;
    },
  },
});

export const { add, remove, saveShippingAddress } = cartSlice.actions;
export default cartSlice.reducer;
