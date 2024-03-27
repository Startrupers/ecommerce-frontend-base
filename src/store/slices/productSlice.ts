import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCTS } from "@/services/routes";
import client from "@/services/client";

interface Product {
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;
    }

const initialState = {
    products: [] as Product[],
    status: "idle",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = "idle";
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = "failed";
        });
    },
});

export default productSlice.reducer;

export const getProducts = createAsyncThunk(
    "product/getProducts", 
    async () => { 
    
        const data = await client.get(`${PRODUCTS}`);
        const result = await data.json();
        return result;
       
    });
