import { auth, googleAuth } from "../../utilities/folder/Firebase";
import { signInWithPopup } from "firebase/auth";

function SignIn() {
  const signInWithGooglePopup = async () => {
    const response = await signInWithPopup(auth, googleAuth);
    console.log(response);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={signInWithGooglePopup}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
