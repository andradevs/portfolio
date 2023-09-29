import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { User } from '../types/login';

interface IContext {
  currentUser: FirebaseUser | null;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<IContext>({ currentUser: null });

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('componet must be rendered as child of AuthContext');
  }
  return context;
};

export const AuthProvider = ({ children }: IProps) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = () => {
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        console.log(user, 'mudou');
      });
    };

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
