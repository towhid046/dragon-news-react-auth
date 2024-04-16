import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, gitHubProvider, googleProvider } from "../../config/firebase";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const loginUserWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authData = {
    createUser,
    loading,
    loginUserWithGoogle,
    user,
    logOut,
    loginUserWithGitHub,
    loginUser,
  };
  return (
    <>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
