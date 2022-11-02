import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Utility/firebase.init";

export const AuthContext = createContext([]);
export const auth = getAuth(app);
const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsingGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userProfileUpdate = (name, photoUrl) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const UserInfo = {
    createUser,
    loginUser,
    user,
    userProfileUpdate,
    logOut,
    signInUsingGoogle,
    loader,
  };
  return (
    <>
      <AuthContext.Provider value={UserInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default UserContext;
