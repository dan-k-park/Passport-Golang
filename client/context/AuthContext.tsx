import React, { createContext, useState } from "react";

interface AuthContextInterface {
  auth: object;
  setAuth: (state: AuthInterface) => void;
}

interface AuthInterface {
  userId: string;
  getAuth: boolean;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [auth, setAuth] = useState({ userId: "", getAuth: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
