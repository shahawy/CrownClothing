import { useParams } from "react-router-dom"; // useParams() hook gives you the access to URL parameters in React component in the form of Object

import { useState, useEffect, useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import { useDispatch, useSelector } from "react-redux";
import {
  addPresentItemsToCart,
  addNewItemsToCart,
} from "../../redux/cartSlice";

import ProductCard from "../../components/product-card/ProductCard";

import "./category.css";

function Category() {
  const { category } = useParams(); // Destructure category property from the object returned from useParams()

  const { categoriesMap } = useContext(CategoriesContext);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

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
    <>
      <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
      <div className="category-container">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              addToCartClick={() => addToCartClick(product)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Category;
