import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase.config";
import { toast } from "react-toastify";
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");

  //create user
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user update");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout Successfully");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authinfo = {
    user,
    setUser,
    loading,
    logout,
    signUp,
    login,
    updateUser,
  };

  return (
    <div>
      <UserContext.Provider value={authinfo}>{children}</UserContext.Provider>
    </div>
  );
};

export default Authprovider;
