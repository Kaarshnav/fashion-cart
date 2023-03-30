import React, { useState } from "react";

function SignUpFormComp() {
  const defaultFormVal = {
    displayName: " ",
    email: " ",
    password: " ",
    confirmPassword: " ",
  };
  const [formVal, setFormVal] = useState(defaultFormVal);
  //   const { dispalyName, email, password, confirmPassword } = formVal;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormVal({ ...formVal, [name]: value });
  };
  console.log(formVal);
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
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
