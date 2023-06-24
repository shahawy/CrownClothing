import "./checkoutItem.css";

function CheckoutItem(props) {
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={props.image} alt={props.name} />
      </div>
      <span className="name">{props.name}</span>
      <span className="quantity">
        <div onClick={props.decreaseQuantity} className="arrow">{`<`}</div>
        <span className="value">{props.quantity}</span>
        <div onClick={props.increaseQuantity} className="arrow">{`>`}</div>
      </span>
      <span className="price">{props.price}</span>
      <div onClick={props.clearItem} className="remove-button">x</div>
    </div>
  );
}

export default CheckoutItem;
