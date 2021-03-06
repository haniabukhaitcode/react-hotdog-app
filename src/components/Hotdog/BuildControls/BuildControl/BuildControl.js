import React from "react";

import classes from "./BuildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabledLess}
    >
      Less
    </button>
    <button
      className={classes.Extra}
      onClick={props.added}
      disabled={props.disabledExtra}
    >
      Extra
    </button>
  </div>
);

export default buildControl;
