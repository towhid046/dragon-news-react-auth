import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const loginUserWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  const authData = { loading, loginUserWithGoogle, user, logOut };
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
