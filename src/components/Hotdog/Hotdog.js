import React from "react";
import classes from "./Hotdog.css";
import HotdogIngredient from "./HotdogIngredient/HotdogIngredient";

const hotdog = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <HotdogIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Add Your Toppings</p>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.Hotdog}>
        <HotdogIngredient type="bread-top" />
        <div className={classes.HotdogMeat}>{transformedIngredients}</div>
        <HotdogIngredient type="bread-bottom" />
      </div>
    </div>
  );
};

export default hotdog;
