import { useDispatch, useSelector } from "react-redux";
import {
  addPresentItemsToCart,
  addNewItemsToCart,
} from "../../redux/cartSlice";

import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import "./productCard.css";


function ProductCard(props) {

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const currentUser = useSelector((state) => state.user.value);

  const addToCartClick = (productData) => {
    if (currentUser) {
      const existingProduct = cartItems.find(
        (product) => product?.id === productData.id
      );
  
      if (existingProduct) {
        dispatch(addPresentItemsToCart(productData));
      } else {
        dispatch(addNewItemsToCart(productData));
      }
    } else {
      navigate("/authentication")
    }
    
  };

  return (
    <div className="product-card-container">
      <img loading="lazy" src={props.image} alt="product-image" />
      <div className="footer">
        <span className="name">{props.name}</span>
        <span className="price">${props.price}</span>
      </div>

      <Button onClick={addToCartClick} buttonName="Add To Cart" buttonType="inverted" />
    </div>
  );
}

export default ProductCard;
