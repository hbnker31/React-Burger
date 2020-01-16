import React from 'react';
import cssClass from './NavigationItem.module.css'
import {NavLink} from 'react-router-dom';
const navigationItem=(props) =>(
    <li className={cssClass.NavigationItem }>
        <NavLink 
        to={props.link} 
        exact={props.exact}
        activeClassName={cssClass.active}>
        {props.children}
        </NavLink> 
    </li>

);
export default navigationItem;