import React from "react";
import classes from "./Modal.css";
import Auxx from "../../../hoc/Auxx";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Auxx>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        display: props.show ? "" : "none",
      }}
    >
      {props.children}
    </div>
  </Auxx>
);

export default modal;
