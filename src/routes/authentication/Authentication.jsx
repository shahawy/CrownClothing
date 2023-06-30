import { useSelector } from "react-redux/es/hooks/useSelector";

import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

import "./authentication.css";

function Authentication() {
  const currentUser = useSelector((state) => state.user.value);

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
