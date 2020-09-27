import React, { Component } from "react";
import Classses from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={Classses.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={Classses.BreadTop}>
            <div className={Classses.Seeds1}></div>
            <div className={Classses.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={Classses.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={Classses.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={Classses.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={Classses.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
