"use-client";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseAuth/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../assets/google_signin.png"; // Adjust the path as needed

const NavBar: React.FC = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="flex items-center justify-between p-2.5 bg-blue-300 text-blue-900 h-15 fixed left-0 top-0 w-full z-10">
      <h1 className="text-lg font-bold">React Chat</h1>
      {user ? (
        <button
          onClick={signOut}
          className="sign-out px-2.5 py-1.5 rounded-md text-blue-300 border border-blue-900 bg-blue-900 font-semibold"
        >
          Sign Out
        </button>
      ) : (
        <button className="sign-in border-none bg-transparent">
          <img
            onClick={googleSignIn}
            src={GoogleSignin.src} // Use .src to get the string URL
            alt="sign in with google"
            className="h-7 w-auto"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
