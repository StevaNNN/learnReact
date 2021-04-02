import React, { Component } from "react";
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        totalPrice: 4,
        ingredients: {
            salad:   0,
            bacon:   0,
            cheese:  0,
            meat:    0
        },
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (updatedIngredients) => {
        // accessing all ingreedients keys values and looping trought them
        const sum = Object.keys(updatedIngredients).map((ingKey) => {
            return updatedIngredients[ingKey]
            // collecting the each key value and + 0 with that value this (0) is basicly parametar which you pass ass argument to the reduce function
        }).reduce((sum, el) => {
            return sum + el
            // 0 + 0 = 0
            // 0 + 1 = 1
            // 0 + 2 = 2
            // ......
        }, 0);

        /// here we set state with either true or false
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        // here we need to use the current state of the ingredients to know we are not dealing with past one
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceSubstraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubstraction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        // here we need to use the current state of the ingredients to know we are not dealing with past one
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHanlder = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('You continued')
    }

    render() {
        console.log(this.state)
        const disabledInfo = {...this.state.ingredients}

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <Modal
                    shown={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    <OrderSummary
                        totalPrice={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    disabled={disabledInfo}
                    ordered={this.purchaseHanlder}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;