import "./Navbar.css";
import { ReactElement } from "react";
import Link from "next/link";
import { SvgIcon, Icon, Box } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = (): ReactElement => {
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
        <Link href="/">
          <Icon fontSize="medium">
            <AiOutlineShoppingCart />
          </Icon>
        </Link>
      </Box>
    </nav>
  );
};
