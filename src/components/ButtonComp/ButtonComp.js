import React from "react";
import "./button.styles.scss";
/*

default btn
invertd btn
google sign in btn 
making 3 diff btn with diff styls based on classes 

*/
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
function ButtonComp({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default ButtonComp;
