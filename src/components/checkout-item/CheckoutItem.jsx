

function CheckoutItem(props) {

  return (
    <div>
      <img src={props.image} alt="product-image" />

      <span>{props.name}</span>

      <span>
      <span onClick={props.decreaseQuantity}>{`<`}</span>
      <span>{props.quantity}</span>
      <span onClick={props.increaseQuantity}>{`>`}</span>
      </span>

      <p>{props.price}</p>

      <span onClick={props.removeItem}>x</span>
    </div>
  )
}

export default CheckoutItem
