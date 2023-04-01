import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./../utils/firebase/firebase.js";
//as actual val of context u want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// provider  is actual component

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  // signOutUser();

  // returning unsubribe in useEffect , to stop listener whenever component unMounts
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user, " --- user from onAuthStateChange------");
    });
    return unsubscribe;
  }, []);
  // adding value in provider and wrapping whole app inside that , in that fashion whole app will be able to access the storage i.e context values
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
