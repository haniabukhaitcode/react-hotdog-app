import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Mayonnaise", type: "mayonnaise" },
  { label: "Mustard", type: "mustard" },
  { label: "Ketchup", type: "ketchup" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p className={classes.CurrentPrice}>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabledLess={props.disabledLessInfo[ctrl.type]}
        disabledExtra={props.disabledExtraInfo[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} onClick={props.ordered}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
