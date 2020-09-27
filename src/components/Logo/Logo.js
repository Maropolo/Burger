import React from "react";
import burgerLogo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";
const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="My burger"></img>
  </div>
);

export default logo;
