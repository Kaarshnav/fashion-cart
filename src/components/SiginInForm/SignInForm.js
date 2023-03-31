import React, { useState } from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import FormInput from "../FormInput/FormInput";
import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
function SignInForm() {
  const defaultFormVal = {
    email: "",
    password: "",
  };
  const [formVal, setFormVal] = useState(defaultFormVal);
  //   const { displayName, email, password, confirmPassword } = formVal;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormVal({ ...formVal, [name]: value });
  };
  const resetFormValues = () => {
    setFormVal(defaultFormVal);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const sigUpWithEmailAndPass = async (event) => {
    event.preventDefault();
    const { email, password } = formVal;

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      response && alert(" Sigin succesful");
      console.log(response);
      resetFormValues();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user with these creds");
          break;

        default:
          alert(`${error.message}`);
          console.log(error.message, " er code ------");
          break;
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2 className="titleCompStyle">Already Have an account ? </h2>
      <span className="titleCompStyle">
        Sign Ip with your email and password
      </span>
      <form onSubmit={sigUpWithEmailAndPass}>
        <FormInput
          label="Email "
          type={"text"}
          required
          onChange={handleChange}
          name="email"
          value={formVal.email}
        />
        <FormInput
          label="Password"
          type={"password"}
          required
          onChange={handleChange}
          name="password"
          value={formVal.password}
        />

        {/*<button type="submit">Sign Up </button>*/}
        <div className="buttons-container">
          {/*div for btns */}
          <ButtonComp type="submit">
            <h1 className="btnTextCompStyle">Sign In</h1>
          </ButtonComp>
          <ButtonComp
            buttonType={"google"}
            type="button"
            onClick={signInWithGoogle}
          >
            <h1 className="btnTextCompStyle">SigIn with Google</h1>
          </ButtonComp>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
