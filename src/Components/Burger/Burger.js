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
  let transformedIngredients = Object.keys(props.ingredients)
                                      .map((igr) => {
                   return [...Array(props.ingredients[igr])].map((_, i) => {
               return <BurgerIngredients key={igr + i} type={igr} />
    });
  })
                                    .reduce((arr,el)=> {
                                      return arr.concat(el)
                                    },[]);

      if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p> //will only work if you use let instead of const when declaring transformed ingredients variable
      }

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
