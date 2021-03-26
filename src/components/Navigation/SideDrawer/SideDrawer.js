import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = props => {
    let attachedClasses = ["fixed w-full top-18 left-0 z-40 bg-blue-700 box-border lg:hidden", classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = ["fixed w-full top-18 left-0 z-40 bg-blue-700 box-border lg:hidden", classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.toggle}/>
            <div className={attachedClasses.join(' ')} onClick={props.toggle}>
                <nav className="h-full">
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
};

export default sideDrawer;