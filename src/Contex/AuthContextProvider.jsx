import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/Firebase.config";

export const AuthContext = createContext(null);

// firebase provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthContextProvider = ({ children }) => {
  // user state
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  //    Sign up user
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin user
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signin with google

  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // signin with Facebook

  const FacebookSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // sign out

  const signout = () => {
    setLoading(true);
    return signOut(auth).then(() => setuser(null));
  };

  // update user

  const updateUser = (obj) => {
    return updateProfile(auth.currentUser, obj);
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
      setLoading(false);
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
    loading,
    signout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
