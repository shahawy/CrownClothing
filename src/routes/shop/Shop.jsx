import { useState, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";

import ProductCard from "../../components/product-card/ProductCard";

import "./shop.css";

function Shop() {
  const { products } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCartClick = (productData) => {
   const existingProduct = cartItems.find(product => product?.id === productData.id)
   
   if (existingProduct) {
    setCartItems((prev) => prev.map(product => { return (
        product.id === productData.id ? {...product, quantity: product.quantity + 1} :
        product )}
      )
    )
   } else {
    setCartItems([...cartItems, {...productData, quantity: 1}])
   }

  };

  return (
    <div className="products-container">
      {products.map((product) => {
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
  );
}

export default Shop;
