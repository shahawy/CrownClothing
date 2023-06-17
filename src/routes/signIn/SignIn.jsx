import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utilities/folder/Firebase";


function SignIn() {
  const logUserGoogle = async () => {
    const { user } = await signInWithGooglePopup()    // user: is the user information returned when the user sign in
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logUserGoogle}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
