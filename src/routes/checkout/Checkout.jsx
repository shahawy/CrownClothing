import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import "./checkout.css";

function Checkout() {
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const { cartItems, setCartItems } = useContext(CartContext);

  const removeItem = (product) => {
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== product.id;
    });
    setCartItems(newCartItems);
  };

  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      const newCartItems = cartItems.map((cartItem) => {
        return cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem;
      });
      setCartItems(newCartItems);
    } else {
      removeItem(product);
    }
  };

  const increaseQuantity = (product) => {
    const newCartItems = cartItems.map((cartItem) => {
      return cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
    setCartItems(newCartItems);
  };

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, currentElement) => {
      return accumulator + currentElement.quantity * currentElement.price;
    }, 0);    // In .reduce, the second argument (0) is the initial state of the accumulator

    setTotalCartPrice(totalPrice);
  }, [cartItems]);


  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
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

      <span className="total">Total: ${totalCartPrice}</span>
    </div>
  );
}

export default Checkout;
