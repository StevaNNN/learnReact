import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.module.scss';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.opened) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <Aux>
            <BackDrop
                shown={props.backDropUp}
                clicked={props.backDropClicked}
            />
            <div
                className={attachedClasses.join(' ')}
            >
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;