import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIENT_PRICE = {
  salad: 0.2,
  cheese: 0.5,
  bacon: 1,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      meat: 0,
      salad: 0,
    },
    totalPrice: 3,
    purchasable: false,
    openmodal: false,
  };

  UpdatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngreadientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const price = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + price;

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    this.UpdatePurchaseState(updatedIngredients);
  };

  removeIngreadientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const price = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - price;

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    this.UpdatePurchaseState(updatedIngredients);
  };

  modalOpenHandler = () => {
    this.setState({ openmodal: true });
  };
  modalCloseHandler = () => {
    this.setState({ openmodal: false });
  };

  purchase = () => {
    alert("Here you go");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.openmodal}
          closed={this.modalCloseHandler}
          purchaseContinue={this.purchaseContinueHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            closePurchase={this.modalCloseHandler}
            continue={this.purchase}
            price={this.state.totalPrice}
          ></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          openModal={this.modalOpenHandler}
          ingredientsAdded={this.addIngreadientsHandler}
          ingredientRemove={this.removeIngreadientsHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        ></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;
