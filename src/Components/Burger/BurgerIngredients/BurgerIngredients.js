/* eslint-disable default-case */
import React, { Component } from 'react'
import PropTypes from 'prop-types';


//getting classes from sister css file
import classes from "./BurgerIngredients.css";
//function for ingredients, switch statements for inputting ingredients on ui


 class BurgerIngredients extends Component {
  render() {
    

    let ingredient = null;

    switch (props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
  
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
  
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
  
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
  
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
  
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
  
      default:
        ingredient = null;
    }
    return ingredient;
  };
}
 //ensuring the input added by the user is a string
BurgerIngredients.PropTypes = {
  type: PropTypes.string.isRequired
};
  
export default BurgerIngredients;


  