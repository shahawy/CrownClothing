import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

import "./cartDropdown.css";

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.value);

  return (
    <div className="cart-dropdown-container">
      {cartItems.length > 0 ? (
        <>
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
        </>
      ) : (
        <p className="empty-message">Your Cart is empty</p>
      )}

      <Link to="/checkout">
        <Button buttonName="Go To Checkout" />
      </Link>
    </div>
  );
}

export default CartDropdown;
