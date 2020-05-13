import React from "react";
import classes from "./Burger.css";
import Burgeringredients from "../../Components/Burger/BurgerIngredients/BurgerIngredients";
import BurgerIngredients from "../../Components/Burger/BurgerIngredients/BurgerIngredients";
//this component is essentially a wrapper of our burger ingredients
//we'll import burgeringredients as a self-closing component
//we'll also add the css to the main div
const Burger = (props) => {
  {
    /* //our ingredients are an object that we have to transform the object into an array of the values of the BurgerIngredients */
  }
  const transformedIngredients = Object.keys(props.ingredients).map((igr) => {
    return [...Array(props.ingredients[igr])].map((_, i) => {
      return
      <BurgerIngredients key={igr + i} ttype={igr} />
    });
  });
  return (
    <div className={classes.Burger}>
      {/* //you have to add the prop type as well */}
      {/* because we implemented the proptype checking */}

      <Burgeringredients type="bread-top" />

      {transformedIngredients}
      <Burgeringredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
