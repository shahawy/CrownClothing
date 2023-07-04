import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./cartIcon.css";

function CartIcon(props) {
  const cartItems = useSelector(state => state.cart.value)
  const [cartItemsNumber, setCartItemsNumber] = useState(0);

  useEffect(() => {   // Function in which we used .reduce method to get the total quantity of the in the cart
      const quantity = cartItems?.reduce((accumulator, currentItem) =>  accumulator + currentItem.quantity, 0); // 0: the initial value while using .reduce method
      setCartItemsNumber(quantity);   
  }, [cartItems]);

  return (
    <div className="cart-icon-container" onClick={props.handleDisplayCart}>
      <svg    // svg of the cart icon
        className="shopping-icon"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 407.453 407.453"
        style={{ enableBackground: "new 0 0 407.453 407.453" }}
      >
        <g>
          <path
            style={{ fill: "#010002" }}
            d="M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486
		c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"
          />
          <path
            style={{ fill: "#010002" }}
            d="M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243
		v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391
		c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386
		C375.191,103.891,371.557,100.258,367.062,100.258z"
          />
          <path
            style={{ fill: "#010002" }}
            d="M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0
		c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394
		c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274
		C274.461,131.163,278.095,134.796,282.59,134.796z"
          />
          <path
            style={{ fill: "#010002" }}
            d="M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907
		c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65
		c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"
          />
          <path
            style={{ fill: "#010002" }}
            d="M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129
		c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65
		c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"
          />
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>

      <span className="item-count">{cartItemsNumber}</span>
    </div>
  );
}

export default CartIcon;
