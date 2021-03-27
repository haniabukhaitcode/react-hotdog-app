import React, { Component } from "react";

import Auxx from "../../hoc/Auxx";
import BuildControls from "../../components/Hotdog/BuildControls/BuildControls";
import Hotdog from "../../components/Hotdog/Hotdog";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Hotdog/OrderSummary/OrderSummary";

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
      cheese: 0,
    },
    totalPrice: 4,
    purchasing: false,
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

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert("You Continue");
  };

  render() {
    const disabledLessInfo = { ...this.state.ingredients };
    for (let i in disabledLessInfo) {
      disabledLessInfo[i] = disabledLessInfo[i] <= 0; //|| disableInfo[i] >= 2;
    }
    const disabledExtraInfo = { ...this.state.ingredients };
    for (let i in disabledExtraInfo) {
      disabledExtraInfo[i] = disabledExtraInfo[i] >= 2; //|| disableInfo[i] >= 2;
    }

    return (
      <Auxx>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Hotdog ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          disabledLessInfo={disabledLessInfo}
          disabledExtraInfo={disabledExtraInfo}
        />
      </Auxx>
    );
  }
}

export default HotdogBuilder;
