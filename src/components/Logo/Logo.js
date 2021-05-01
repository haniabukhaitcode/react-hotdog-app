import React from "react";
import hotdog from "../../assets/images/hotdog.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={hotdog} alt="Hotdog" />
  </div>
);

export default logo;
