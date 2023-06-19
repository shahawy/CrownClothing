// context of the products selected by the user in the cart

import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});
/* Expecting the elements of this array to be an object like this {
      id: "",
      name: "",
      imageUrl: "",
      price: "",
      quantity: ""
}  */

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const value = {cartItems, setCartItems}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
