import React from 'react';
import cssClass from './DrawerToggle.module.css';
const drawerToggle= (props) =>(
    <div className={cssClass.DrawerToggle} onClick={props.clicked}>  
        <div></div>
        <div></div>
        <div></div>
    </div>
)
export default drawerToggle;