import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/Firebase.config";

export const AuthContext = createContext(null);

// firebase provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthContextProvider = ({ children }) => {
  // user state
  const [user, setuser] = useState({});
  const [loading, setLoading] = useState(true);
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

  // login observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setLoading(false);
        setuser(user);
      } else {
        setLoading(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //   contex data
  const value = {
    signupUser,
    signinUser,
    googleSignin,
    FacebookSignin,
    user,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
