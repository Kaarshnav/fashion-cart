import { createContext, useState } from "react";

//as actual val of context u want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
// provider  is actual component

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  // adding value in provider and wrapping whole app inside that , in that fashion whole app will be able to access the storage i.e context values
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
