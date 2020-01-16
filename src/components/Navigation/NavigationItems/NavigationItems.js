import React from 'react';
import cssClass from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems =(props) =>(
    <ul className={cssClass.NavigationItems}>
        <NavigationItem link ="/" exact  active>Burger Builder </ NavigationItem>
        {props.isAuthenticated ?
        <NavigationItem link ="/orders" active>Orders</ NavigationItem>: null}
        {props.isAuthenticated ?
            <NavigationItem link ="/logout" active>Logout</ NavigationItem>:
            <NavigationItem link ="/auth" active>Authenticate</ NavigationItem>}
    </ul>

)
export default navigationItems;