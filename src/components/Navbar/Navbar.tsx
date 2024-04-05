"use client";

import "./Navbar.css";
import { ReactElement } from "react";
import Link from "next/link";
import { SvgIcon, Icon, Box } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import routes from "@/config/routes";
import { usePathname } from "next/navigation";
import { navbarMainLinks, navbarSideLinks } from "@/config/links";
import clsx from "clsx";

export const Navbar = (): ReactElement => {
  const cartProducts = useSelector((state: any) => state.cart.products);
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Box className="home-icon">
        <Link href={routes.home}>Candleaf</Link>
      </Box>

      {navbarMainLinks.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("link", pathname === link.href && "active")}
          >
            {link.name}
          </Link>
        );
      })}

      <Box className="icons">
        {navbarSideLinks.map((link) => {
          const LinkIcon = link.icon;

          if (link.name === "Cart") {
            return (
              <Link key={link.name} href={link.href}>
                <LinkIcon />
                <span className="product-number"> {cartProducts.length} </span>
              </Link>
            );
          }

          return (
            <Link key={link.name} href={link.href}>
              <LinkIcon />
            </Link>
          );
        })}
      </Box>
    </nav>
  );
};
