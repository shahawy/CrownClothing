import { useSelector } from "react-redux";

import CategoryPreview from "../category-preview/CategoryPreview";
import Spinner from "../spinner/Spinner";

import "./categoriesPreview.css";

function CategoriesPreview() {
  const categories = useSelector((state) => state.categories.items);
  const isLoading = useSelector((state) => state.categories.status);

  return (
    <div className="shop-container">
      {isLoading === "loading" ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((category) => (
          <CategoryPreview
            key={category}
            title={category}
            products={categories[category]}
          />
        ))
      )}
    </div>
  );
}

export default CategoriesPreview;
