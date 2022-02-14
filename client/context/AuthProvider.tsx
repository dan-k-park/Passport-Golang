import React, { createContext, useState } from "react";

interface IAuth {
  userId: string;
  getAuth: boolean;
}

interface IAuthContext {
  auth: IAuth;
  setAuth: (state: IAuth) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [auth, setAuth] = useState({ userId: "", getAuth: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
