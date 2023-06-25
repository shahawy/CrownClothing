import { useSelector, useDispatch } from "react-redux";
import { toggleCartDropdown } from "../../redux/cartSlice";

import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

import "./cartDropdown.css";

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.value);
  const currentUser = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    dispatch(toggleCartDropdown());
    currentUser ? navigate("/checkout") : navigate("/authentication");
  };

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

      <Button buttonName="Go To Checkout" onClick={handleCheckoutClick} />
    </div>
  );
}

export default CartDropdown;
