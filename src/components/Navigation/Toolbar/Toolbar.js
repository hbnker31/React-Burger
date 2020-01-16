import React from 'react';
import cssClass from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar =(props) =>(
    <header className={cssClass.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={cssClass.Logo}><Logo /></div>        
        <nav className={ cssClass.DesktopOnly}>
           <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
)
export default toolbar;