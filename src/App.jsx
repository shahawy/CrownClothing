import { useEffect } from "react";
import { onAuthStateChangedListener } from "./utilities/folder/Firebase";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/userSlice"; 

import { Routes, Route } from "react-router-dom";

import NavigationBar from "./routes/navigationBar/NavigationBar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";


const App = () => {

const dispatch = useDispatch()

useEffect(() => {
   const unsubscribe = onAuthStateChangedListener((user) => {
    dispatch(setCurrentUser(user))
   })

   return unsubscribe  // To make the code run once when the component mounts to avoid memory leaks as onAuthStateChanged() method already listens for any changes in the user's Authentication state
}, [])

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />    {/* index: means that this component is displayed with the the parent Route by default */}
        <Route path="authentication" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />  {/* This path means that whatever has path of shop/(anything) render the <Shop /> component */}
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
