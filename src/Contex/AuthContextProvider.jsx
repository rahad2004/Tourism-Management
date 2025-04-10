import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../config/Firebase.config";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  //    Sign up user
  const signinUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   contex data
  const value = {
    signinUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
