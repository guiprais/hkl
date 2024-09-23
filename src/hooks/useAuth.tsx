import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  password: string;
  savePassword: (newPassword: string) => void;
  isLogged: boolean;
  login: () => void;
  logout: () => void;
} | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [password, setPassword] = useState("123456");
  const [isLogged, setIsLogged] = useState(() => {
    const isLogged = localStorage.getItem("hkl@isLogged");
    return isLogged === "true";
  });

  useEffect(() => {
    localStorage.setItem("hkl@isLogged", isLogged.toString());
  }, [isLogged]);

  const savePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const login = () => {
    setIsLogged(true);
  };

  const logout = () => {
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{ password, savePassword, isLogged, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
