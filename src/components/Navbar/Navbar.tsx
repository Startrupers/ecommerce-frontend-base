"use client"

import "./Navbar.css";
import { ReactElement } from "react";
import Link from "next/link";
import { SvgIcon, Icon, Box } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Navbar = (): ReactElement => {
  const cartProducts = useSelector((state: any) => state.cart.products);

  return (
    <nav className="navbar">
      <Box className="home-icon">
        <Link href="/">Candleaf</Link>
      </Box>

      <Box className="links">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </Box>

      <Box className="icons">
        <Link href="/">
          <SvgIcon>
            <BsPerson />
          </SvgIcon>
        </Link>
        <Link href="/cart">
          <Icon fontSize="medium"> 
            <AiOutlineShoppingCart />  
          </Icon>
          <span className="product-number"> {cartProducts.length} </span>
        </Link>
      </Box>
    </nav>
  );
};
