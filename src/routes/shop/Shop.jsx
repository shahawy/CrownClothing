import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchCategoriesData } from "../../redux/categoriesSlice";

import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";
import Category from "../category/Category";

function Shop() {

  const dispatch = useDispatch()

  useEffect(() => {   // Function of fetching the data from the firestore database
    const getCategoriesMap = async () => {
        dispatch(fetchCategoriesData())
    }

    getCategoriesMap()
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} /> {/* This path means that category is variable (dynamic Routing) */}
    </Routes>
  );
}

export default Shop;
