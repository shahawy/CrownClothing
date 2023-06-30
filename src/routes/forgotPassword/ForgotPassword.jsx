import { useState } from "react";

import FormInput from "../../components/form-input/FormInput"
import Button from "../../components/button/Button";

import { resetPassword } from "../../utilities/firebase/firebase";

import "./forgotPassword.css"

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false)  // To disable the button after submitting until submission is completed

  const handleChange = (e) => {
    setEmail(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await resetPassword(email);
      alert("Message sent, check your mail inbox")

      setEmail("")
    } catch (err) {
      // .code method returns the code of the error and we can know the code from logging the error
      if (err.code === "auth/user-not-found") {
        alert("Email doesn't exist");
      } else {
        console.error(err);
      }
    }

    setLoading(false)
  };

  return (
    <div className="sign-up-container">
      <h2>Forgot Your Password ?</h2>
      <span>Enter Your Email</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          handleChange={handleChange}
          type="email"
          name="email"
          value={email}
        />

        <div className="buttons-container">
          <Button buttonName="Reset Password" type="submit" disabled={loading} />
        </div>
      </form>

    </div>
  );
}

export default ForgotPassword;


