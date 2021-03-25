import React from "react";
import classes from "./Hotdog.css";
import HotdogIngredient from "./HotdogIngredient/HotdogIngredient";

const hotdog = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <HotdogIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Hotdog}>
      <HotdogIngredient type="bread-top" />
      {transformedIngredients}
      <HotdogIngredient type="bread-bottom" />
    </div>
  );
};

export default hotdog;
