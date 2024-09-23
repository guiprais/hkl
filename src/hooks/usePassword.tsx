import { createContext, useContext, useState } from "react";

const PasswordContext = createContext<{
  password: string;
  savePassword: (newPassword: string) => void;
  isLogged: boolean;
  login: () => void;
} | null>(null);

export const PasswordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [password, setPassword] = useState("123456");
  const [isLogged, setIsLogged] = useState(false);

  const savePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const login = () => {
    setIsLogged(true);
  };

  return (
    <PasswordContext.Provider
      value={{ password, savePassword, isLogged, login }}
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
