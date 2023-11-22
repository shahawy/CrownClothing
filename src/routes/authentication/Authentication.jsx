import { useEffect } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";

import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

import ReactGA from "react-ga4";  // For Google Analytics

import "./authentication.css";


function Authentication() {
  const currentUser = useSelector((state) => state.user.value);


  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Authentication Page Mounted"});
  }, [])

  // Track the scroll to bottom event in Google Analysis
  const trackScrollEvent = () => {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
      ReactGA.event({
        category: "Scroll",
        action: "Scrolled to bottom in Authentication",
      });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScrollEvent);
    return () => {
      document.removeEventListener("scroll", trackScrollEvent);
    };
  }, []);


  return (
    <div className="authentication-container">
      {currentUser ? (
        <h1 className="already-signed-in">You are already signed in</h1>
      ) : (
        <>
          <SignInForm />
          <SignUpForm />
        </>
      )}
    </div>
  );
}

export default Authentication;
