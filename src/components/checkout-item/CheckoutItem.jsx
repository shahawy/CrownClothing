import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

function CheckoutItem(props) {

    const {cartItems, setCartItems} = useContext(CartContext)

  return (
    <div>
      <img src={props.image} alt="product-image" />

      <span>{props.name}</span>

      <span>
      <span onClick={decreaseQuantity}>{`<`}</span>
      <span>{props.quantity}</span>
      <span onClick={increaseQuantity}>{`>`}</span>
      </span>

      <p>{props.price}</p>

      <span onClick={removeItem}>x</span>
    </div>
  )
}

export default CheckoutItem
