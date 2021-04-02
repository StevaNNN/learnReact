import React from "react";
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {

    componentDidUpdate() {
        console.log('[OrderSummary] did update')
    }

    render() {

        // 1.expect to get object of ingredients as prop
        // transform that object into array of keys from that object
        // use the keys as the labels and access it's values
        const ingredientSummary = Object.keys(this.props.ingredients).map(iGKey => {
            return(
                <li key={iGKey}>
                    <span style={{textTransform: 'capitalize'}}>{iGKey}</span> : {this.props.ingredients[iGKey]}
                </li>
            )
        });

        return(
            <Aux>
                <h3>Your oreder</h3>
                <p>Delicios burger with following items:</p>
                <ul>{ingredientSummary}</ul>
                <p><strong>Total price : {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue with checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        )
    }
}
export default OrderSummary;