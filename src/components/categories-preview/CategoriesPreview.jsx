import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";

import CategoryPreview from "../category-preview/CategoryPreview";

import "./categoriesPreview.css";

function CategoriesPreview() {

  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((category) => (
        <CategoryPreview
          key={category}
          title={category}
          products={categoriesMap[category]}
        />
      ))}
    </div>
  )
}

export default CategoriesPreview
