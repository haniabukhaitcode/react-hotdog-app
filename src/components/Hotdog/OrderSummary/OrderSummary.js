import React from "react";
import Auxx from "../../../hoc/Auxx";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}:</span>
        {props.ingredients[igkey]}
      </li>
    );
  });

  return (
    <Auxx>
      <h3>Your Order</h3>
      <p>Tasty HotDog with the following toppings:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Auxx>
  );
};

export default orderSummary;