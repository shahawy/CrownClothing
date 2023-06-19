import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const decreaseQuantity = (product) => {
    const newCartItems = cartItems.map(cartItem => {
        if (cartItem.quantity > 0) {
        return (
        cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity - 1} :
        cartItem
    )} else {
        return cartItem;
    }})
     setCartItems(newCartItems)
  }

  const increaseQuantity = (product) => {
    const newCartItems = cartItems.map(cartItem => { return (
        cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem
    )})
     setCartItems(newCartItems)
  }

  const removeItem = (product) => {
    const newCartItems = cartItems.filter(cartItem => { return (
      cartItem.id !== product.id
     )})
     setCartItems(newCartItems)
  }


  return (
    <div>
      <div>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>

      {cartItems.map((product) => {
        return (
          <CheckoutItem
            key={product.id}
            image={product.imageUrl}
            name={product.name}
            quantity={product.quantity}
            price={product.price}
            decreaseQuantity={() => decreaseQuantity(product)}
            increaseQuantity={() => increaseQuantity(product)}
            removeItem={() => removeItem(product)}
          />
        );
      })}
    </div>
  );
}

export default Checkout;
