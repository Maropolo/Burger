import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "meat", type: "meat" },
  { label: "cheese", type: "cheese" },
  { label: "salad", type: "salad" },
  { label: "bacon", type: "bacon" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price : <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientsAdded(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <button
      className={classes.OrderButton}
      onClick={props.openModal}
      disabled={!props.purchasable}
    >
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
