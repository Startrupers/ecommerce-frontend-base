"use client";

import "./Navbar.css";
import { ReactElement } from "react";
import Link from "next/link";
import { SvgIcon, Icon, Box } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import routes from "@/config/routes";

export const Navbar = (): ReactElement => {
  const cartProducts = useSelector((state: any) => state.cart.products);

  return (
    <nav className="navbar">
      <Box className="home-icon">
        <Link href={routes.home}>Candleaf</Link>
      </Box>

      <Box className="links">
        <ul>
          <li>
            <Link href={routes.products}>Products</Link>
          </li>
          <li>
            <Link href={routes.about}>About</Link>
          </li>
          <li>
            <Link href={routes.contactus}>Contact us</Link>
          </li>
        </ul>
      </Box>

      <Box className="icons">
        <Link href={routes.user}>
          <SvgIcon>
            <BsPerson />
          </SvgIcon>
        </Link>
        <Link href={routes.cart}>
          <Icon fontSize="medium">
            <AiOutlineShoppingCart />
          </Icon>
          <span className="product-number"> {cartProducts.length} </span>
        </Link>
      </Box>
    </nav>
  );
};
