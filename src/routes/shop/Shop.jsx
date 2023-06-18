import { useState, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

import ProductCard from "../../components/product-card/ProductCard";

import "./shop.css";

function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default Shop;
