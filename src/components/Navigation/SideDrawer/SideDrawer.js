import React from 'react';
import cssClass from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxx from '../../../hoc/Auxx/Auxx';
const sideDrawer =(props) =>{
    let attachedClasses= [cssClass.SideDrawer, cssClass.Close]
    if(props.open){
        attachedClasses=[cssClass.SideDrawer, cssClass.Open]
    }
    return (
        <Auxx>
            <Backdrop show={props.open}  clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={cssClass.Logo}><Logo /></div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Auxx>
    );
};
export default sideDrawer;