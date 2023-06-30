import { useState } from "react";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/userSlice";

import { useNavigate, Link } from "react-router-dom";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import {
  loginUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase";

import "./signInForm.css";

function SignInForm() {

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)  // To disable the button after submitting until submission is completed

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const { user } = await loginUserWithEmailAndPassword(
        inputFields.email,
        inputFields.password
      );

      navigate("/")
      dispatch(setCurrentUser(user));
      
      setInputFields({
        email: "",
        password: "",
      });
    } catch (err) {
      // .code method returns the code of the error and we can know the code from logging the error
      if (err.code === "auth/user-not-found") {
        alert("Email doesn't exist");
      } else if (err.code === "auth/wrong-password") {
        alert("Wrong Password");
      } else {
        console.error(err);
      }
    }

    setLoading(false)
  };

  const signInWithGoogle = async () => {
    setLoading(true)
    const { user } = await signInWithGooglePopup(); // user: is the user information returned when the user sign in
    
    navigate("/")
    dispatch(setCurrentUser(user));

    await createUserDocumentFromAuth(user);
 
    setLoading(false)
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign In With Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          handleChange={handleChange}
          type="email"
          name="email"
          value={inputFields.email}
        />

        <FormInput
          label="Password"
          handleChange={handleChange}
          type="password"
          name="password"
          value={inputFields.password}
        />

        <div className="buttons-container">
          <Button buttonName="Sign In" type="submit" disabled={loading} />
          <Button
            type="button" // The button inside a form element by default has the type of submit, so if we have a button inside the form that we don't want to submit the form like the Sign In with Google button, we change its type by giving it type="button"
            onClick={signInWithGoogle}
            buttonName="Sign In with Google"
            buttonType="google"
            disabled={loading}
          />
        </div>
      </form>

      <Link to="forgot-password" className="forgot-password">Forgot Password ?</Link>
    </div>
  );
}

export default SignInForm;
