import React, {Component} from 'react';
import Auxx from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{
    render () {
        const ingredientSummary=Object.keys(this.props.ingredients)
            .map(igKey =>{
                return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>
                : {this.props.ingredients[igKey]}</li>)
            })
        return (
            <Auxx>
            <h3>Your Order </h3>
            <p> A delicious burger with the foolowing ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked ={this.props.purchaseContinued}>Continue </Button>
            <Button btnType="Danger" clicked ={this.props.purchaseCancelled}> Cancel </Button>
        </Auxx>
        )

    }
 
};
export default OrderSummary;