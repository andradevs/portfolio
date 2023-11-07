import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { User as FirebaseUser } from 'firebase/auth';

interface IContext {
  currentUser: FirebaseUser | null | undefined;
  signed: boolean;
  loading: boolean;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<IContext>({ currentUser: null, loading: true, signed: true });

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('componet must be rendered as child of AuthContext');
  }
  return context;
};

export const AuthProvider = ({ children }: IProps) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = () => {
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        if (user) {
          setSigned(true);
          setLoading(false);
        } else {
          setSigned(false);
          setLoading(true);
        }
      });
    };

    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   console.log(currentUser, 'avocado');
  // }, [currentUser?.email]);

  return <AuthContext.Provider value={{ currentUser, signed, loading }}>{children}</AuthContext.Provider>;
};
