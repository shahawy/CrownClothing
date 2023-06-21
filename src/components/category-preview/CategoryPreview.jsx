import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { Link } from "react-router-dom";

import ProductCard from "../product-card/ProductCard";

import "./categoryPreview.css";

function CategoryPreview(props) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCartClick = (productData) => {
    const existingProduct = cartItems.find(
      (product) => product?.id === productData.id
    );

    if (existingProduct) {
      setCartItems((prev) =>
        prev.map((product) => {
          return product.id === productData.id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        })
      );
    } else {
      setCartItems([...cartItems, { ...productData, quantity: 1 }]);
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
