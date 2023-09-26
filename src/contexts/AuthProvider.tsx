import { createContext, useContext, useState } from 'react';
import { UserCredential } from 'firebase/auth';

interface IContext {
  user?: UserCredential;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<IContext | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('componet must be rendered as child of AuthContext');
  }
  return context;
};

export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState();
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
