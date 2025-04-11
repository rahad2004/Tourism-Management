import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../config/Firebase.config";

export const AuthContext = createContext(null);

// firebase provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthContextProvider = ({ children }) => {
  //    Sign up user
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin user
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signin with google

  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // signin with Facebook

  const FacebookSignin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  //   contex data
  const value = {
    signupUser,
    signinUser,
    googleSignin,
    FacebookSignin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
