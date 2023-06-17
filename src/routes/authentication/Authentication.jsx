import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";


function Authentication() {

  return (
    <div>
      <h1>Sign In page</h1>

      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
