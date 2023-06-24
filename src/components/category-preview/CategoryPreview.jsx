import { useDispatch, useSelector } from "react-redux";
import {
  addPresentItemsToCart,
  addNewItemsToCart,
} from "../../redux/cartSlice";

import { Link } from "react-router-dom";

import ProductCard from "../product-card/ProductCard";

import "./categoryPreview.css";

function CategoryPreview(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  const addToCartClick = (productData) => {
    const existingProduct = cartItems.find(
      (product) => product?.id === productData.id
    );

    if (existingProduct) {
      dispatch(addPresentItemsToCart(productData));
    } else {
      dispatch(addNewItemsToCart(productData));
    }
  };

  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${props.title}`} className="title">
          {props.title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {props.products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
            addToCartClick={() => addToCartClick(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
