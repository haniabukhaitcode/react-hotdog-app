import React from "react";

import Hotdog from "../../Hotdog/Hotdog";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We are confident it will taste good!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Hotdog ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        Cancle
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
