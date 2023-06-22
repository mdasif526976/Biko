import React, { createContext, useState } from "react";
export const UserContext = createContext();
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../Firebase.config";
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");

  //create user
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const login = () => {};
  const authinfo = { user, setUser, loading, signUp };

  return (
    <div>
      <UserContext.Provider value={authinfo}>{children}</UserContext.Provider>
    </div>
  );
};

export default Authprovider;
