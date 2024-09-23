import { createContext, useContext, useEffect, useState } from "react";

const PasswordContext = createContext<{
  password: string;
  savePassword: (newPassword: string) => void;
  isLogged: boolean;
  login: () => void;
  logout: () => void;
} | null>(null);

export const PasswordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
    <PasswordContext.Provider
      value={{ password, savePassword, isLogged, login, logout }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => {
  const context = useContext(PasswordContext);
  if (context === null) {
    throw new Error("usePassword must be used within a PasswordProvider");
  }
  return context;
};
