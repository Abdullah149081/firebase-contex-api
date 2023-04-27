/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useMemo, useState } from "react";
import app from "../firebase/firebase.config";

export const userContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state change", currentUser);
      setUsers(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = useMemo(() => ({ users, createUser, signInUser }), []);
  // const authInfo = { user, createUser };

  return <userContext.Provider value={authInfo}>{children}</userContext.Provider>;
};

export default AuthProvider;
