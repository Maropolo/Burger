import React from "react";
import Classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient.js";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(Math.max(0, props.ingredients[igKey]))].map(
        (_, index) => {
          return (
            <BurgerIngredient
              key={igKey + index}
              type={igKey}
            ></BurgerIngredient>
          );
        }
      );
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={Classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
