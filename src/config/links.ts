import { BsPerson } from "react-icons/bs";
import routes from "./routes";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const navbarMainLinks = [
  {
    name: "Products",
    href: routes.products,
  },
  {
    name: "About",
    href: routes.about,
  },
  {
    name: "Contact us",
    href: routes.contactus,
  },
];

export const navbarSideLinks = [
  {
    name: "User",
    href: routes.user,
    icon: BsPerson,
  },
  {
    name: "Cart",
    href: routes.cart,
    icon: AiOutlineShoppingCart,
  },
];
