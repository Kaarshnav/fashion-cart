import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import ButtonComp from "../ButtonComp/ButtonComp";
import FormInput from "../FormInput/FormInput";
import "./sign-up-form.styles.scss";
function SignUpFormComp() {
  const defaultFormVal = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formVal, setFormVal] = useState(defaultFormVal);
  const { displayName, email, password, confirmPassword } = formVal;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormVal({ ...formVal, [name]: value });
  };
  const resetFormValues = () => {
    setFormVal(defaultFormVal);
  };
  const sigUpWithEmailAndPass = async (event) => {
    event.preventDefault();
    // const { displayName, email, password, confirmPassword } = formVal;
    if (password !== confirmPassword) {
      alert("Password doesn't Match ");
      return;
    }
    try {
      console.log(email, password, " ----- inside res ------ ");
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user, " succ ");
      await createUserDocumentFromAuth(user, { displayname: displayName });
      alert(" User Succesfully created ");
      // user created , now  reset form values
      resetFormValues();
    } catch (error) {
      //   console.log(error.code, " er code ------");

      if (error.code == "auth/email-already-in-use") {
        //specific handling for already used email
        alert(" User Already exists with email id ");
        console.log(error.message, " error ");
      } else {
        console.log(error.message, " error ");
        return;
      }
    }
  };

  console.log(formVal);
  return (
    <div className="sign-up-container">
      <h2>Don't have an account </h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={sigUpWithEmailAndPass}>
        <FormInput
          label="Display Name "
          type={"text"}
          required
          onChange={handleChange}
          value={formVal.displayName}
          name={"displayName"}
        />
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
        <FormInput
          label="Confirm Password"
          type={"password"}
          required
          onChange={handleChange}
          name="confirmPassword"
          value={formVal.confirmPassword}
        />

        {/*<button type="submit">Sign Up </button>*/}
        <ButtonComp type="submit">
          <h1>Sign up</h1>
        </ButtonComp>
      </form>
    </div>
  );
}

export default SignUpFormComp;
