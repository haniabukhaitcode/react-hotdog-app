import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Mayonnaise", type: "mayonnaise" },
  { label: "Mustard", type: "mustard" },
  { label: "ketchup", type: "ketchup" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {/* <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p> */}
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default buildControls;
