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
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
