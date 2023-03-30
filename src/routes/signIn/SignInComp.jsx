import React from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignInComp = () => {
  const logGogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      SignInComp
      <button onClick={logGogleUser}>signin with google popup</button>
    </div>
  );
};

export default SignInComp;
