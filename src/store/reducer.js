import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    ketchup: 0,
    mustard: 0,
    mayonnaise: 0,
    hotdogMeat: 0,
    cheese: 0,
  },
  totalPrice: 4,
};

const INGREDIENT_PRICES = {
  ketchup: 0.25,
  mustard: 0.25,
  mayonnaise: 0.25,
  hotdogMeat: 0,
  cheese: 0.5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
