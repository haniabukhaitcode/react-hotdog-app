import React, { Component } from "react";
import axiosFile from "../../axios";
import Auxx from "../../hoc/Auxx/Auxx";
import BuildControls from "../../components/Hotdog/BuildControls/BuildControls";
import Hotdog from "../../components/Hotdog/Hotdog";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Hotdog/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

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
    loading: false,
  };

  componentDidMount() {
    console.log("HotdogBuilder.js componentDidMount: " + this.props);
  }

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

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      //property name and property value
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
    console.log("HotdogBulder.js queryString:" + queryString);
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

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice.toFixed(2)}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxx>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
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

export default withErrorHandler(HotdogBuilder, axiosFile);
