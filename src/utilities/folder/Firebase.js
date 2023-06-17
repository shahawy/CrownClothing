import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // doc: used to specify the document in which collection by the id, getDoc: used to retrieve the required document, setDoc: used to addDoc

const firebaseConfig = {
  apiKey: "AIzaSyDcvap-Yg5Kb7AMyLUShqVrQ6g9q5lTPR0",
  authDomain: "crownclothing-6f94a.firebaseapp.com",
  projectId: "crownclothing-6f94a",
  storageBucket: "crownclothing-6f94a.appspot.com",
  messagingSenderId: "646358267333",
  appId: "1:646358267333:web:b03ec11f4d1559358b47ac",
};

const firebaseApp = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(firebaseApp);
export const googleAuth = new GoogleAuthProvider();

googleAuth.setCustomParameters({
  prompt: "select_account", // To force users to select an account when interacting with GoogleAuthProvider
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuth);  // Function used to sign in with Google Popup

export const createAuthUserWithEmailAndPassword = async (email, password) => {  // Function used to Sign Up a new user with email and password
  if (!email || !password) return;  // To return nothing and doesn't complete the function if there is no user information

  return await createUserWithEmailAndPassword(auth, email, password)
}


// Storing the Authenticated users in the database
export const database = getFirestore(firebaseApp);

// The function responsible for storing new signing in users in the database
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {  // userAuth: is the user information returned when the user sign in, additionalInformation: To add information when using setDocs() as while Signing Up with email and password the displayName will be null it only comes with value with the Providers like Google, so we have to add the displayName value while Signing Up with email and password as we will see while using setDocs()
  if (!userAuth) return;  // To return nothing and doesn't complete the function if there is no user information (as if the user clicked the button and then he go back and didn't sign in)

  const userDocRef = doc(database, "users", userAuth.uid); // users: is the name of the collection that we want to dsve the users documents in, userAuth.uid: the user's information returned when the user sign in has a unique id called (uid) we use it to identify the document
  
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {   // Check if the user that signed in doesn't exist in the collection (the user signed in in with Google for the first time), if so create a document for the user in the collection with the name and email which we destructured from the returned user information and add the date that the user sign in for the first time
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef; // To return the user document if he signed in before or it is the first time and we created a document for him, return the document anyway
};
