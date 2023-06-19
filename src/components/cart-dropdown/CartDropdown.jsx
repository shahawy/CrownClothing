import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { Link } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

import "./cartDropdown.css";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => {
          return (
            <CartItem
              key={product.id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          );
        })}
      </div>

      <Link to="/checkout">
        <Button buttonName="Go To Checkout" />
      </Link>
    </div>
  );
}

export default CartDropdown;
