import React, { createContext } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const authinfo = {
    name: "hello",
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
