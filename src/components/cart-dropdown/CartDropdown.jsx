import Button from "../button/Button"

import "./cartDropdown.css"

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      <img src="" alt="product-image" />
        <p></p>
        <p></p>
      </div>

      <Button buttonName="Go To Checkout" />
    </div>
  )
}

export default CartDropdown
