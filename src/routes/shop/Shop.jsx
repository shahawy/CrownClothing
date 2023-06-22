import { useEffect, useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";

import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";
import Category from "../category/Category";

import { getCategoriesAndDocuments } from "../../utilities/folder/Firebase";

function Shop() {

  const {setCategoriesMap} = useContext(CategoriesContext)

  useEffect(() => {   // Function of fetching the data from the firestore database
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        setCategoriesMap(categoryMap);
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
