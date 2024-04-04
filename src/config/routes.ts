const routes = {
  about: "/about",
  cart: "/cart",
  contactus: "/contactus",
  checkout: "/checkout",
  home: "/",
  products: "/products",
  productDetail: (productId: string) => `/products/${productId}`,
  user: "/user",
};

export default routes;
