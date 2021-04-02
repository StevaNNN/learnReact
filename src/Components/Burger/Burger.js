import React from "react";
import BurgerIngreedient from "./BurgerIngreedients/BurgerIngreedient";

import classes from './Burger.module.scss';

const burger = (props) => {

    // collecting all keys from ingredients object we get via props
    // looping trough that keys and returning TEMPORARY array with all keys and
    // looping trough that TEMPORARY array and extracting unique ID which will be used for key property since that is
    // how react works with array, binding each key from Object.keys to the BurgerIngredient type
    let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngreedient type={ igKey } key={ igKey + i }/>
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>"Add some ingredients"</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngreedient type='bread-top' />
            {transformedIngredients}
            <BurgerIngreedient type='bread-bottom' />
        </div>
    )
}

export default burger;