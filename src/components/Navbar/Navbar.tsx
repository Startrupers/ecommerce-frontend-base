"use client";

import "./Navbar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import routes from "@/config/routes";
import { navbarMainLinks, navbarSideLinks } from "@/config/links";
import { Sidebar } from "@components/ui";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const cartProducts = useSelector((state: any) => state.cart.products);
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsSidebarOpen(isOpen);
    };

  return (
    <nav className="navbar">
      <Box>
        <Link href={routes.home}>Candleaf</Link>
      </Box>

      <Box className="navbar__sections">
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
      </Box>

      <Box className="navbar__icons">
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

      <Button className="navbar__menu--responsive" onClick={openSidebar(true)}>
        <IoMenu size={24} />
      </Button>

      <Sidebar isOpen={isSidebarOpen} onOpen={openSidebar} />
    </nav>
  );
};
