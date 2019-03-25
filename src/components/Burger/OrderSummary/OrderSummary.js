import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  componentDidUpdate() {
    console.log('[OrderSummary] did update')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingredientKey => (
        <li key={ingredientKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
        </li>
      )
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    )
  }

}

export default OrderSummary;
