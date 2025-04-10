import React, { useContext } from "react";
import { AuthContext } from "../Contex/AuthContextProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
