import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = props => (
    <li className="text-lg h-full w-full cursor-pointer hover:bg-blue-500">
        <NavLink 
            className="w-full h-full p-5 block no-underline hover:underline box-border text-center"
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;