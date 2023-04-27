/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useMemo, useState } from "react";
import app from "../firebase/firebase.config";

export const userContext = createContext(null); // 1st
const auth = getAuth(app);

// children
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = useMemo(() => ({ users, createUser, signInUser, logOut, loading }), [loading, users]); // 3rd
  // const authInfo = { users, createUser, signInUser };

  return <userContext.Provider value={authInfo}>{children}</userContext.Provider>; // 2nd {children}
};

export default AuthProvider;
