import React from "react";
import Aux from "../../hoc/Auxillary";
import Button from "../UI/Button/Button";

const orderSummary = (props) => {
  const orderSummary = Object.keys(props.ingredients).map((igKey, index) => {
    return (
      <li key={index + igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with following ingrdients :</p>
      <ul>{orderSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)} $</strong>
      </p>
      <p>Continue to checkout</p>

      <Button btnType="Danger" clicked={props.closePurchase}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
