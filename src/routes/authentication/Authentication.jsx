import React from "react";
import SignInForm from "../../components/SiginInForm/SignInForm";
import SignUpFormComp from "../../components/SignUpFormComp/SignUpFormComp";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import "./Authentication.style.scss";
// import {
//   // auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   // signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase";

// comment sigin with redirect part
const Authentication = () => {
  // const redirectfn = async () => {
  //   const response = await getRedirectResult(auth);
  //   // console.log(response);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // };

  // useEffect(() => {
  //   redirectfn();
  // }, []);

  //moved to sigin comp
  // const logGogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpFormComp />
      {/* 
       moved to sigin comp 
      
      <button onClick={logGogleUser}>signin with google popup</button> */}
      {/*
      <button onClick={signInWithGoogleRedirect}>
        signin with google Redirect
      </button>
  */}
    </div>
  );
};

export default Authentication;
