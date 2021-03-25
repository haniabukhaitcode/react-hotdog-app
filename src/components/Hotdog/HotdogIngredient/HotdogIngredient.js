import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./HotdogIngredient.css";

class HotdogIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = <div className={classes.BreadTop}></div>;
        break;
      case "hotdogMeat":
        ingredient = <div className={classes.HotdogMeat}></div>;
        break;
      case "mayonnaise":
        ingredient = <div className={classes.Mayonnaise}></div>;
        break;
      case "mustard":
        ingredient = <div className={classes.Mustard}></div>;
        break;
      case "ketchup":
        ingredient = <div className={classes.Ketchup}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

HotdogIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HotdogIngredient;
