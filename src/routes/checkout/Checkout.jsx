import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addPresentItemsToCart, removeItemsFromCart, clearItemsFromCart, setCartTotalPrice } from "../../redux/cartSlice";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import PaymentForm from "../../components/payment-form/PaymentForm";

import ReactGA from "react-ga4";  // For Google Analytics

import "./checkout.css";



ReactGA.send({ hitType: "pageview", title: "Checkout Page Mounted"});

function Checkout() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);


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

    dispatch(setCartTotalPrice(totalPrice));
  }, [cartItems]);



  // Track the scroll to bottom event in Google Analysis
const trackScrollEvent = () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight >= documentHeight) {
    ReactGA.send({ hitType: "event", eventCategory: "Scroll", eventAction: "Scrolled to the Bottom in Checkout" });
  }
};

useEffect(() => {
  document.addEventListener("scroll", trackScrollEvent);
  return () => {
    document.removeEventListener("scroll", trackScrollEvent);
  };
}, []);


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

      <span className="total">Total: ${cartTotalPrice}</span>

      <PaymentForm />
    </div>
  );
}

export default Checkout;
