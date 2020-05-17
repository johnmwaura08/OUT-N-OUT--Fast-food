import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import Burger from '../../Components/Burger/Burger';

export class BurgerBuilder extends Component {
  //this is the modern way of writing class component
  state ={
    //we'll have an ingredients object here with key value pairs, 
    //the keys are the names of the ingredients and the values is the amount
      ingredients: {

        salad: 0,
        bacon:0,
        meat: 0,
        cheese: 0
      }
      //we want to give our burger componet the ingredients

  }
  render() {
    return (
      <Aux>
        {/* // this is where we'll add the burger component from the stateless folder */}
        <Burger  ingredients={this.state.ingredients}/> 
        <div> Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
