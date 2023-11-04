import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchCategoriesData } from "../../redux/categoriesSlice";

import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";
import Category from "../category/Category";

import ReactGA from "react-ga4";  // For Google Analytics

function Shop() {

  const dispatch = useDispatch()

  useEffect(() => {   // Function of fetching the data from the firestore database
    const getCategoriesMap = async () => {
        dispatch(fetchCategoriesData())
    }

    getCategoriesMap()
  }, []);


  // Track the scroll to bottom event in Google Analysis
const trackScrollEvent = () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight - 450 >= documentHeight) {
    ReactGA.send({ hitType: "event", eventCategory: "Scroll", eventAction: "Scrolled to the Bottom in shop" });
  }
};

useEffect(() => {
  document.addEventListener("scroll", trackScrollEvent);
  return () => {
    document.removeEventListener("scroll", trackScrollEvent);
  };
}, []);


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} /> {/* This path means that category is variable (dynamic Routing) */}
    </Routes>
  );
}

export default Shop;
