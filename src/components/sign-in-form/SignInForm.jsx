import { useState } from "react";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import {
  loginUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utilities/folder/Firebase";

import "./signInForm.css";

function SignInForm() {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUserWithEmailAndPassword(
        inputFields.email,
        inputFields.password
      );

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
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup(); // user: is the user information returned when the user sign in
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign In With Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          handleChange={handleChange}
          type="text"
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
          <Button buttonName="Sign In" type="submit" />
          <Button
            onClick={signInWithGoogle}
            buttonName="Sign In with Google"
            buttonType="google"
          />
        </div>
      </form>
      
    </div>
  );
}

export default SignInForm;
