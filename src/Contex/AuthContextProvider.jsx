import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
    return (
        <AuthContext.Provider value={"I am Rahad Mondal"}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthContextProvider;