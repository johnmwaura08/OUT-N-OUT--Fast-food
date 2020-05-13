import React from 'react';
import classes from './Burger.css';
import Burgeringredients from '../../Components/Burger/BurgerIngredients/BurgerIngredients';
//this component is essentially a wrapper of our burger ingredients
//we'll import burgeringredients as a self-closing component
//we'll also add the css to the main div
const  Burger=(props)=> {
    return (
        <div className={classes.Burger}>
            {/* //you have to add the prop type as well */}
            {/* because we implemented the proptype checking */}
            <Burgeringredients  type="bread-top"/> 
            <Burgeringredients  type="meat"/> 
            <Burgeringredients  type="cheese"/> 

            <Burgeringredients  type="bread-bottom"/> 

            
        </div>
    )
}

export default Burger;

