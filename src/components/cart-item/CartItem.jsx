// Component of a single product in the cart

import "./cartItem.css";

function CartItem(props) {
  return (
    <div className="cart-item-container">
     <img src={props.image} alt="product-image" />
     <div className="item-details">
      <span className="name">{props.name}</span>
      <span className="price">{props.quantity} x ${props.price}</span>
      </div>
    </div>
  );
}

export default CartItem;
