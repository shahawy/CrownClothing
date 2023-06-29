import { useEffect, lazy, Suspense } from "react";
import { onAuthStateChangedListener } from "./utilities/firebase/firebase";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, stopUserLoading } from "./redux/userSlice"; 

import { Routes, Route } from "react-router-dom";

import Spinner from "./components/spinner/Spinner";

const NavigationBar = lazy(() => import("./routes/navigationBar/NavigationBar"))
const Home = lazy(() => import("./routes/home/Home"))
const Authentication = lazy(() => import("./routes/authentication/Authentication"))
const Shop = lazy(() => import("./routes/shop/Shop"))
const Checkout = lazy(() => import("./routes/checkout/Checkout"))


const App = () => {

const dispatch = useDispatch()
const isLoading = useSelector((state) => state.user.loading)

useEffect(() => {  // The firebase method that watches the Authentication state in the application should be in the <App /> component to be triggered directly when the application starts and watches the Authentication state
   const unsubscribe = onAuthStateChangedListener((user) => {
    dispatch(setCurrentUser(user))
    dispatch(stopUserLoading())  // to set loading to false after setting the current user on refreshing the page
   })

   return unsubscribe  // To make the code run once when the component mounts to avoid memory leaks as onAuthStateChanged() method already listens for any changes in the user's Authentication state
}, [])

  return (
    <Suspense fallback={<Spinner />}>
     {!isLoading && (   // to enhance UX and control changing from sign out to sign in at the moment of refreshing the page and make it false after (onAuthChanged) method is triggered and sets the current user
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />    {/* index: means that this component is displayed with the the parent Route by default */}
          <Route path="authentication" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />  {/* This path means that whatever has path of shop/(anything) render the <Shop /> component */}
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    )}
    </Suspense>
  );
};

export default App;
