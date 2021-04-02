import React from "react";
import Burger from '../../assets/images/burger-logo.png'
import classes from './Logo.module.scss';

const logo = props => {
    return(
        <div className={classes.Logo}>
            <img src={Burger} alt="burger"/>
        </div>
    )
}

export default logo;