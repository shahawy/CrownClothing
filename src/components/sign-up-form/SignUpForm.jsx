import { useState } from "react";

import FormInput from "../form-input/FormInput";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilities/folder/Firebase";

function SignUpForm() {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formFields.password === formFields.confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          // user: is the user information returned when the user sign in
          formFields.email,
          formFields.password
        );
        const userDocRef = await createUserDocumentFromAuth(user, {
          displayName: formFields.displayName,
        }); // The object in the second argument: To add information when using setDocs() as while Signing Up with email and password the displayName will be null it only comes with value with the Providers like Google, so we have to add the displayName value while Signing Up with email and password as we will see while using setDocs()

        setFormFields({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          // .code method returns the code of the error and we can know the code from logging the error
          alert("Email already in use");
        } else {
          console.error(err);
        }
      }
    } else {
      alert("Passwords doesn't match");
    }
  };

  return (
    <div>
      <h1>Sign Up With Email and Password</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          handleChange={handleChange}
          type="text"
          name="displayName"
          value={formFields.displayName}
        />

        <FormInput
          label="Email"
          handleChange={handleChange}
          type="email"
          name="email"
          value={formFields.email}
        />

        <FormInput
          label="Password"
          handleChange={handleChange}
          type="password"
          name="password"
          value={formFields.password}
        />

        <FormInput
          label="Confirm Password"
          handleChange={handleChange}
          type="password"
          name="confirmPassword"
          value={formFields.confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
