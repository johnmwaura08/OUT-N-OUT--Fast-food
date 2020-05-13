import React, { Component } from 'react';
import Aux from "../../Hoc/Aux";
import Burger from '../../Components/Burger/Burger';

export class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        {/* // this is where we'll add the burger component from the stateless folder */}
        <Burger /> 
        <div> Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
