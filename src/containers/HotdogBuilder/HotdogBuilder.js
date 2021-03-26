import React, { Component } from "react";

import Auxx from "../../hoc/Auxx";
import BuildControls from "../../components/Hotdog/BuildControls/BuildControls";
import Hotdog from "../../components/Hotdog/Hotdog";

const INGREDIENT_PRICES = {
  ketchup: 0.2,
  mustard: 0.2,
  mayonnaise: 0.2,
  hotdogMeat: 0.5,
  cheese: 0.5,
};

class HotdogBuilder extends Component {
  state = {
    ingredients: {
      ketchup: 0,
      mustard: 0,
      mayonnaise: 0,
      hotdogMeat: 1,
      cheese: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    // if (oldCount <= 0) {
    //   return;
    // }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  disinfo = (type) => {
    const oldCount = [...this.state.ingredients[type]];
    console.log(oldCount);
  };

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let i in disableInfo) {
      disableInfo[i] = disableInfo[i] <= 0; //|| disableInfo[i] >= 2;
    }

    return (
      <Auxx>
        <Hotdog ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          disabled={disableInfo}
        />
      </Auxx>
    );
  }
}

export default HotdogBuilder;
