"use client";

import "./Addbutton.css";
import { useDispatch } from "react-redux";
import { add } from "@/store/slices/cartSlice";
import { getProducts } from "@/store/slices/productSlice";
import { Button } from "@mui/material";

export function AddToCartButton({ product }: { product: any }) {
  const dispatch = useDispatch();

  const addToCart = (product: any) => {
    dispatch(add(product));
    dispatch<any>(getProducts());
  };

  return (
    <Button className="button-add-cart" onClick={() => addToCart(product)}>
      🛒 +Add to cart
    </Button>
  );
}
