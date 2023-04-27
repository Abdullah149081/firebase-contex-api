/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useMemo, useState } from "react";
import app from "../firebase/firebae.config";

export const userContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [users] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = useMemo(() => ({ users, createUser, signInUser }), []);
  // const authInfo = { user, createUser };

  return <userContext.Provider value={authInfo}>{children}</userContext.Provider>;
};

export default AuthProvider;
