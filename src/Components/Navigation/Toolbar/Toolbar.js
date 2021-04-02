import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.clicked}>MENU</DrawerToggle>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;