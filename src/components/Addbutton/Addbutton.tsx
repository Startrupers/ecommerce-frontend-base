"use client";

import "./Addbutton.css";
import { useDispatch } from "react-redux"; 
import { add } from "@/store/slices/cartSlice";
import { getProducts } from "@/store/slices/productSlice";


export function AddToCartButton({ product }: { product: any }) {
  const dispatch = useDispatch();
 

  const addToCart = (product: any) => {
    dispatch(add(product));
    dispatch<any>(getProducts());
  };

  return (
    <button className="button-add-cart" onClick={() => addToCart(product)}>
      🛒 +Add to cart
    </button>
  );
}
