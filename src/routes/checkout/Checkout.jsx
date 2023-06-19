import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
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
          />
        );
      })}
    </div>
  );
}

export default Checkout;
