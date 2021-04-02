import React from "react";
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad',  type: 'salad' },
    { label: 'Bacon',  type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat',   type: 'meat' }

]

const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p><strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map((control, i) => {
                // passing control.type from here to builder since its AddIngHandler consumes this type as argument
                return(
                    <BuildControl
                        label={control.label}
                        key={i}
                        remove={() => props.ingredientRemoved(control.type)}
                        added={() => props.ingredientAdded(control.type)}
                        disabled={props.disabled[control.type]}
                    />
                )
            })}
            <button
                onClick={props.ordered}
                disabled={!props.purchasable}
                className={classes.OrderButton}
            >
                ORDER NOW
            </button>
        </div>
    );
}

export default buildControls;