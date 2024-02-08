"use client";

import "./Addbutton.css";
import { useDispatch } from "react-redux";
import { add } from "@/store/slices/cartSlice";

export function AddToCartButton({ product }: { product: any }) {
  const dispatch = useDispatch();

  const addToCart = (product: any) => {
    dispatch(add(product));
  };

  return (
    <button className="button-add-cart" onClick={() => addToCart(product)}>
      🛒 +Add to cart
    </button>
  );
}
