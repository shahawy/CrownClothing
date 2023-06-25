import { useContext, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addPresentItemsToCart, removeItemsFromCart, clearItemsFromCart } from "../../redux/cartSlice";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import "./checkout.css";

function Checkout() {
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);


  const clearItem = (productData) => {
    dispatch(clearItemsFromCart(productData))
  };

  const decreaseQuantity = (productData) => {
    if (productData.quantity > 1) {
      dispatch(removeItemsFromCart(productData))
    } else {
      dispatch(clearItemsFromCart(productData))
    }
  };

  const increaseQuantity = (productData) => {
    dispatch(addPresentItemsToCart(productData));
  };

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, currentElement) => {
      return accumulator + currentElement.quantity * currentElement.price;
    }, 0); // In .reduce, the second argument (0) is the initial state of the accumulator

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
            clearItem={() => clearItem(product)}
          />
        );
      })}

      <span className="total">Total: ${totalCartPrice}</span>
    </div>
  );
}

export default Checkout;