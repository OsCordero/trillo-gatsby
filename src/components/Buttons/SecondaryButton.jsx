import React from "react";
import "./secondary-button.scss";

const SecondaryButton = ({ childen, className, ...rest }) => {
  return (
    <button {...rest} className={`button-secondary ${className}`}></button>
  );
};

export default SecondaryButton;
