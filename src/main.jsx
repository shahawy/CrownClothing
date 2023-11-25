import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import ReactGA from "react-ga4";  // For Google Analytics

// import { UserProvider } from "./contexts/UserContext";
// import { CategoriesProvider } from "./contexts/CategoriesContext";
// import { CartProvider } from "./contexts/CartContext.jsx";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react"; // This component wraps <App /> inside <Provider /> to apply persisting for redux

import { Elements } from "@stripe/react-stripe-js" // The component that gives the payment card UI of stripe in React
import { stripePromise } from "./utilities/stripe/stripe.js";

import "./main.css";


// This key should be in .env
ReactGA.initialize("G-9SMSBNBJ50");

// Tracking the scroll to bottom event of Google Analysis is in the App component because it needs useEffect hook, so it should be in a react component
ReactGA.send({ hitType: "pageview", page: window.location.pathname});

// console.log( window.location.pathname);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
          <Elements stripe={stripePromise}>
           <App />
          </Elements>
          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
