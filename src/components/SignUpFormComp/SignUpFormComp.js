import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

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
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={sigUpWithEmailAndPass}>
        <label> Display Name</label>
        <input
          required
          type={"text"}
          name="displayName"
          onChange={handleChange}
          value={formVal.displayName}
        />
        <label> Email </label>
        <input
          required
          type={"email"}
          name="email"
          onChange={handleChange}
          value={formVal.email}
        />
        <label> Password </label>
        <input
          required
          type={"password"}
          name="password"
          onChange={handleChange}
          value={formVal.password}
        />
        <label> Confirm Password</label>
        <input
          required
          type={"password"}
          name="confirmPassword"
          onChange={handleChange}
          value={formVal.confirmPassword}
        />
        <button type="submit">Sign Up </button>
      </form>
    </div>
  );
}

export default SignUpFormComp;
