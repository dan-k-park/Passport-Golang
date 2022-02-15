import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { isServer } from "../utils/isServer";

interface AuthInterface {
  user: {};
  login: () => void;
  logout: () => void;
}

const INITIAL_STATE: AuthInterface = {
  user: isServer() ? JSON.parse(localStorage.getItem("user") || "{}") : "{}", // This is absurd
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthInterface>(INITIAL_STATE);

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (isServer()) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
