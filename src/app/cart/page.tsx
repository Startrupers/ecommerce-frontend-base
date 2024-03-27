"use client"

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import "./page.css";
import { remove } from "@/store/slices/cartSlice"; 

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

function CartPage() {
  const products: Product[] = useSelector((state: any) => state.cart.products);
 
  const dispatch = useDispatch();

  const removeToCart = (id: string) => {
    dispatch(remove(id));
  };

  const renderProductCard = (product: Product) => (
    <div className="container-cart-detail" key={product.id}>
      <section>
        <Image
          className="product-img-detail"
          key={product.id}
          src={product.image}
          alt={product.title}
          width={90}
          height={90}
        />

        <Box className="quote">
          <Typography className="shipping">🍕 FREE SHIPPING</Typography>
        </Box>
      </section>

      <section>
        <Box>
          <Typography className="title-detail">{product.title}</Typography>
          <Typography className="price-cart-detail">${product.price}</Typography>
          

          <section className="container-button-subtract-cart">
            <button className="button-subtract-cart" onClick={() => removeToCart(product.id)}>🛒 - Remove from cart </button>
          </section>
        </Box>
      </section>
    </div>
  );

  return (
    <div>
      <Box>
        <h1 className="title">Your cart items</h1>
        <p className="subtitle">
          You have {products.length} items in your cart 
          <Button className="shipping-button" href="/shipping">🛒</Button>
        </p>

        <div>{products.map(renderProductCard)}</div>

        <Link href="/" className="subtitle">
          Back to shopping
        </Link>

        <div className="conteiner-button-checkout"><Button className="checkout-button" href="/shipping">Check-out</Button></div>
      </Box>
    </div>
  );
}

export default CartPage;
